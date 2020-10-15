import React from 'react';
import styled, { isStyledComponent } from "styled-components";


const App = () => {
  return (
    <Title>
      This is a template for React app.
    </Title>
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


export default App;
