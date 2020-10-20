import React, { useContext }　 from 'react'
import Event from "./event"
import AppContext from "../contexts/AppContext"



const Events = ({ state, dispatch }) => {
  const value = useContext(AppContext) {/* <= useContextの場合 */} 
  return (
    <>
      {/* 以下のConsumerの記述は古いのでuseContextで書いた方がスマート */}
      {/* <AppContext.Consumer >
        {value => <div className="mt-5">{value}</div>}
      </AppContext.Consumer> */}

      <div className="mt-4">{value}</div> {/* <= useContextの場合 */} 
      <h4 className="mt-5">イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>タイトル</th>
              <th>ボディー</th>
            </tr>
          </thead>
          <tbody>
            {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
          </tbody>
      </table>
    </>
  )
}
export default Events