
import './App.css';

import styled from "styled-components";
import { Features } from "./components/Features";
import { Items } from "./components/Items";
import { useState, useEffect } from "react";

/*---------------------- Circle Size Data ----------------------------- */
const circleSize = [
  {
    price : 1500,
    color : "blue",
    dia : 20,
    size : "small",
  },
  {
    price : 500,
    color : "green",
    dia : 32,
    size : "medium"
  },
  {
    price : 1000,
    color : "red",
    dia : 55,
    size : "large"
  }
]

function App() {


  /*----------------------------- Circle Data State -------------------------- */
  const [circleData, setCircleData] = useState(circleSize);

  /*------------------------------ Function For Price Sorting ----------------- */
  const handlePrice = (value) => {
    const data = [...circleSize];
    {value === -1 ? data.sort((a,b) => b.price - a.price) : data.sort((a,b) => a.price - b.price)}
    setCircleData(data);
  }

  /*------------------------------- Function For Color Filtering --------------- */
  const handleColor = (value) => {
    const data = [...circleSize];
    const filterData = value === "red" ? data.filter(element => element.color === "red") : value === "green" ? data.filter(element => element.color === "green") : data.filter(element => element.color === "blue");
    setCircleData(filterData);
  }

  /*-------------------------------- Function For Size Sorting --------------------------------*/
  const hanldeSize = (value) => {
    const data = [...circleSize];
    {value === -1 ? data.sort((a,b) => b.dia - a.dia) : data.sort((a,b) => a.dia - b.dia)}
    setCircleData(data);
  }

  return (
    <Container>
      <Features handlePriceFn = {handlePrice} handleColorFn = {handleColor} hanldeSizeFn = {hanldeSize} />
      <Items circleData = {circleData} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 90vw;
  margin: auto;
  gap: 2vw;
  @media (max-width : 600px) {
    display : block;
  }
`
