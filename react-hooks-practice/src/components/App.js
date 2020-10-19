import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event from "./event.js"
import reducer from "../reducers/index"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
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

  return (
    <>
      <div className="container-fluid mt-5">
        <h4>イベント作成フォーム</h4>
        <form>

          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input type="text" className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}/>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea type="text" className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}/>
          </div>

          <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>

        </form>

        <h4 className="mt-4">イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>タイトル</th>
              <th>メッセージ</th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
            
          </tbody>
        </table>
      </div>
    </>
  );
}




export default App;
