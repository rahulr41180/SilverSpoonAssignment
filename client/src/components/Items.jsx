
import { Container } from "./Items.style";

export const Items = ({ circleData }) => {

    return (
        <Container>
            <div className="circle__items">
                {circleData.map((element) => {
                    return (
                        <div key={element.size} className={`${element.size}`}>₹ {element.price}</div>
                    )
                })}
            </div>
        </Container>
    )

}