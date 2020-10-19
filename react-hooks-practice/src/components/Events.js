import React, { Fragment } from 'react';
import Event from "./event"

const Events = ({state, dispatch}) => {
  return (
    <>
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