import mocks from "./mock"
import Flashcards from "./Flashcards"
import styled from "styled-components"

export default function Desk(props) {


    return (
        <ContainerCards>
            {mocks.map((mock, index) =>
                <Flashcards 
                key={index} 
                index={index}
                question={mock.question}
                answer={mock.answer}
                count={props.count}
                />
            )}
        </ContainerCards>
    )
}

const ContainerCards = styled.ul `
    display: flex;
    flex-direction: column;
    margin-top: 27px;
    margin-bottom: 90px;
    box-sizing: border-box;
    width: 300px;
`