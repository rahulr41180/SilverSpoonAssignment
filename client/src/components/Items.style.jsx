
import styled from "styled-components";

const Container = styled.div`
    border: 1px solid silver;
    width: 69%;
    margin: 1vw auto 2vw .1vw;
    border-radius: 1vw;
    height: fit-content;
    background-color: rgb(223, 223, 238);
    @media (max-width : 800px) {
        margin: 1vw auto 2vw auto;
    }
    .circle__items {
        padding: 1vw;
        width: 60%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 2vw;
        .small {
            border : 1px solid black;
            width: 20%;
            height: 16.5vh;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(0, 0, 255);
            color: rgb(255, 255, 255);
            border-radius: 50%;
            font-size: 1.2vw;
            @media (max-width : 1000px) {
                
                height: 12vh;
            }
            @media (max-width : 800px) {
                height: 10vh;
            }
            @media (max-width : 600px) {
                height: 8vh;
            }
        }
        .medium {
            border : 1px solid black;
            width: 32%;
            height: 26vh;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(0, 128, 0);
            color: rgb(255, 255, 255);
            border-radius: 50%;
            font-size: 1.2vw;
            @media (max-width : 1000px) {
                height: 18vh;
            }
            @media (max-width : 600px) {
                height: 12vh;
                
            }
        }
        .large {
            border : 1px solid black;
            width: 55%;
            height: 45vh;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgb(255, 0, 0);
            color: rgb(255, 255, 255);
            border-radius: 50%;
            font-size: 1.2vw;
            @media (max-width : 1000px) {
                height: 30vh;
            }
            @media (max-width : 600px) {
                height: 20vh;
            }
        }
    }
`

export { Container };