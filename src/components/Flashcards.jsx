import { useState } from "react"
import { styled } from "styled-components"
import Question from "./Question"

export default function Flashcard(props) {
    const [clicked, setClicked] = useState(false)

    const [config, setConfig] = useState({
        classe:"", 
        icon: "/assets/seta_play.png" , 
        teste: "play-btn",
        desabled: false, 
    })

    function handleClick() {

        if(config.desabled === false){
            setClicked(true)
        }
    }

    return (
        <li>
            {clicked ?  <Question question={props.question} answer={props.answer} clicked={setClicked} index={props.index} setConfig={setConfig} count={props.count}/>  :
                <div className={`zap-questions ${config.classe}`} data-test="flashcard">
                    <TitleOne data-test="flashcard-text">{`Pergunta ${props.index + 1}`}</TitleOne>
                    <Play src={config.icon} className="zap-start" alt="zap-start" data-test={config.teste} onClick={handleClick}/>
                </div>}
        </li>
    )
}

const TitleOne = styled.p `
    padding-left: 10px;
`
const Play = styled.img`
    margin-right: 15px;
`