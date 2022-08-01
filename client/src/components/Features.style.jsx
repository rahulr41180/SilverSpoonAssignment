
import styled from "styled-components";

const Container = styled.div`
    border : 1px solid silver;
    width: 16%;
    height: fit-content;
    padding : 1vw 2vw;
    margin: 1vw .2vw 2vw 1vw;
    border-radius: 1vw;
    background-color: rgb(236, 236, 245);
    display: flex;
    flex-direction: column;
    gap: 1vw;
    @media (max-width : 1400px) {
        margin: 1vw auto 2vw auto;
    }
    .sortBy__size {
        width: 66%;
        border-radius: .2vw;
        height: fit-content;
        .size__button {
            
            border: 1px solid rgb(78, 78, 189);
            width: 100%;
            height: 5vh;
            font-size: 1vw;
            background-color: rgb(88, 88, 243);
            outline: none;
            /* border: 0; */
            cursor: pointer;
            &:hover {
                background-color: rgb(255, 255, 255);
                color: rgb(0, 0, 255);
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                transition: 800ms;
            }
        }
        .size__drop__down {
            margin: 0 0 0 2vw;
            width: 12vw;
            display: ${(props) => (props.dropDown.sizeDisplay === "block" ? "block" : "none")};
            .small__large, .large__Small {
                border: 1px solid rgb(78, 78, 189);
                font-size: 1.2vw;
                padding: .2vw;
                width: 100%;
                &:hover {
                    background-color: rgb(0, 0, 255);
                    color: rgb(255, 255, 255);
                }
            }
        }
    }

    .sortBy__color {
        width: 66%;
        border-radius: .2vw;
        height: fit-content;
        .color__button {
            border: 1px solid rgb(78, 78, 189);
            width: 100%;
            height: 5vh;
            font-size: 1vw;
            background-color: rgb(88, 88, 243);
            outline: none;
            /* border: 0; */
            cursor: pointer;
            &:hover {
                background-color: rgb(255, 255, 255);
                color: rgb(0, 0, 255);
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                transition: 800ms;
            }
        }
        .color__drop__down {
            margin: 0 0 0 2vw;
            width: 12vw;
            display: ${(props) => (props.dropDown.colorDisplay === "block" ? "block" : "none")};
            .red, .green, .blue{
                border: 1px solid rgb(78, 78, 189);
                font-size: 1.2vw;
                padding: .2vw;
                width: 100%;
                &:hover {
                    background-color: rgb(0, 0, 255);
                    color: rgb(255, 255, 255);
                }
            }
        }
    }
    .sortBy__price {
        width: 65%;
        border-radius: .2vw;
        height: fit-content;
        .price__button {
            border: 1px solid rgb(78, 78, 189);
            width: 100%;
            height: 5vh;
            font-size: 1vw;
            background-color: rgb(88, 88, 243);
            outline: none;

            /* border: 0; */
            cursor: pointer;
            &:hover {
                background-color: rgb(255, 255, 255);
                color: rgb(0, 0, 255);
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
                transition: 800ms;
            }
        }
        .price__drop__down {
            margin: 0 0 0 2vw;
            width: 12vw;
            display: ${(props) => (props.dropDown.priceDisplay === "block" ? "block" : "none")};
            .higher__lower, .lower__higher{
                border: 1px solid rgb(78, 78, 189);
                font-size: 1.2vw;
                padding: .2vw;
                width: 100%;
                &:hover {
                    background-color: rgb(0, 0, 255);
                    color: white;
                }
            }
        }
    }
`

export { Container };