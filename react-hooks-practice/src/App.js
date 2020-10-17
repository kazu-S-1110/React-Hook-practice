import React, { useState } from 'react';
import styled from "styled-components";

const App = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  return (
    <>
      <Title>count: {count}</Title>
      <Container>
        <Button onClick={increment}>+1</Button>
        <Button onClick={decrement}>-1</Button>
        <Button onClick={reset}>reset</Button>
      </Container>
    </>
  );
}

const Title = styled.h2`
  font-size:50px;
  background-color:cyan;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform:translate(-50%,-50%);
`
const Container = styled.div`
  display:flex;
  position:absolute;
  width: 400px;
  height: 100px;
  top: 60%;
  left:50%;
  transform:translate(-50%,-50%);
  /* outline:#000 solid 1px; */
  justify-content:center;
  align-items:center;
`

const Button = styled.button`
  width: auto;
  margin-right:20px;
  background-color:green;
  font-size:20px;
`


export default App;