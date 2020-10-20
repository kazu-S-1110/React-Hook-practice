import React, { useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from "./EventForm"
import Events from "./Events"
import reducer from "../reducers/index"
import AppContext from "../contexts/AppContext"

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  return (
    <AppContext.Provider value={"Hello , this is a Context"}>
      <div className="container-fluid mt-5">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
      </div>
    </AppContext.Provider>
  )
}




export default App;
