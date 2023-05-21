import Question from "./Question"
import { useState } from "react"

export default function Flashcards(props){
    const [clicked, setClicked] = useState(false)

    const [config, setConfig] = useState({
        classe:"",
        teste: "play-btn",
        icon: "../assets/seta_play.png",
        desabilitado: false, 
    })

    function handleClick() {

        if(config.desabilitado === false){
            setClicked(true)
        }
    }


    return(
        <div className="card-container">
            {clicked ? <Question 
                question={props.question} 
                answer={props.answer} 
                clicked={setClicked} 
                index={props.index} 
                setConfig={setConfig} 
                count={props.count}
                /> :
                <div className={`cards ${config.classe}`} data-test="flashcard">
                    <p data-test="flashcard-text">{`Pergunta ${props.index + 1}`}</p>
                    <img src={config.icon} className="seta-play" alt="seta-play" data-test={config.teste} onClick={handleClick}/>
                </div>
            }
        </div>
    )
}