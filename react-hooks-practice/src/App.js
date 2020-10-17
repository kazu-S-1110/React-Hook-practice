import React, { useState } from 'react';
import styled from "styled-components";

const App = (props) => {
  // 初期値をここで設定するパターン
  // const initialStates = { name: "", price: 1000 }

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const reset = () => {
    setPrice(props.price)
    setName(props.name)
  }


  return (
    <>
      <Container>
        <Title>現在の{name}は、{price}円です</Title>
        <Button onClick={() => setPrice(price + 1)}>+1</Button>
        <Button onClick={() => setPrice(price - 1)}>-1</Button>
        <Button onClick={reset}>Reset</Button>
        <input value={name} onChange={e => setName(e.target.value)}></input>
      </Container>

    </>

  )
}

// 初期値を外部より取り込むパターン
App.defaultProps = {
  name: "sample",
  price: 1000
}

const Title = styled.h2`
  font-size:50px;
  background-color:cyan;
  margin: 0;
  position: relative;
  /* top: 50%;
  left: 50%;
  margin-right: -50%;
  transform:translate(-50%,-50%); */
`
const Container = styled.div`
  display:flex;
  position:absolute;
  width: 500px;
  height: 500px;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
  outline:#000 solid 1px;
  justify-content:center;
  align-items:center;
  flex-direction:column;

`

const Button = styled.button`
  width: auto;
  margin-right:20px;
  background-color:green;
  font-size:20px;
`


export default App;