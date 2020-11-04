import React from 'react';
import {useToggle} from 'react-use';


const Demo = () => {
  const [on, toggle] = useToggle(true)

  return (
    <>
      <div>{on ? "on" : "off"}</div>
      <button onClick={()=>toggle(true)} >switch on</button>
      <button onClick={() => toggle(false)} >switch off</button>
    </>
  )
}
export default Demo