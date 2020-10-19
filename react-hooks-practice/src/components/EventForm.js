import React, { useState } from 'react';

const EventForm = ({ state, dispatch }) => {
  // const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const addEvent = e => {
    e.preventDefault()
    // console.log({title, body}) アクセスが可能か確認
    dispatch({ //この式でイベントを追加可能
      type: "CREATE_EVENT",
      title,
      body
    })
    setTitle("")
    setBody("")
  }


  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm("全てのイベントを本当に削除しても良いですか？") //削除前に確認メッセージを実装
    if (result) dispatch({ type: "DELETE_ALL_EVENT" })
  }

  //タイトルが空かボディが空の場合、ボタンを無効化
  const unCreatable = title === "" || body === ""

  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>

        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea type="text" className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)} />
        </div>

        <button className="btn btn-primary" disabled={unCreatable} onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger" disabled={state.length === 0} onClick={deleteAllEvents}>全てのイベントを削除する</button>
      </form>
    </>
  )
}

export default EventForm