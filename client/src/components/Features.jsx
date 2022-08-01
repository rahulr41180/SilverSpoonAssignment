
import styled from "styled-components";

import { useState, useEffect } from "react";
import { Container } from "./Features.style";

export const Features = ({handlePriceFn, handleColorFn, hanldeSizeFn}) => {

    /*---------------------------- State For Handle Drop Down Menu Display Style ----------------------- */
    const [dropDown, setDropDown] = useState({
        sizeDisplay : "none",
        colorDisplay : "none",
        priceDisplay : "none"
    })

    return (
        <Container dropDown={dropDown}>
            <div className="sortBy__size">
                <button onClick={() => {
                    /*------------------ Set Display Style For Size Drop Down ---------------------- */
                    setDropDown({...dropDown, sizeDisplay : `${dropDown.sizeDisplay !== "block" ? "block" : "none"}`})
                }} className="size__button">SORT BY SIZE</button>
                <div className="size__drop__down">
                    <button onClick={() => hanldeSizeFn(1)} className="small__large">Small to Large</button>
                    <button onClick={() => hanldeSizeFn(-1)} className="large__Small">Large to Smaller</button>
                </div>
            </div>
            <div className="sortBy__color">
                <button onClick={() => {
                    /*------------------ Set Display Style For Color Drop Down -------------------------- */
                    setDropDown({...dropDown, colorDisplay : `${dropDown.colorDisplay !== "block" ? "block" : "none"}`})
                }} className="color__button">SORT BY COLOR</button>
                <div className="color__drop__down">
                    <button onClick={() => handleColorFn("red")} className="red">Red</button>
                    <button onClick={() => handleColorFn("green")} className="green">Green</button>
                    <button onClick={() => handleColorFn("blue")} className="blue">Blue</button>
                </div>
            </div>
            <div className="sortBy__price">
                <button onClick={() => {
                    /*-------------------- Set Display Style For Price Drop Down -------------------------- */
                    setDropDown({...dropDown, priceDisplay : `${dropDown.priceDisplay !== "block" ? "block" : "none"}`})
                }} className="price__button">SORT BY PRICE</button>
                <div className="price__drop__down">
                    <button onClick={() => handlePriceFn(-1)} className="higher__lower">Higher to Lower</button>
                    <button onClick={() => handlePriceFn(1)} className="lower__higher">Lower to Higher</button>
                </div>
            </div>
        </Container>
    )

}