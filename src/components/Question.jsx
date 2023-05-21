import Virar from "../assets/seta_virar.png"
import Answer from "./Answer"
import { useState } from "react"

export default function Question(props){
    const [clicked, setClicked] = useState(false) 

    function handleClick() {
        setClicked(true)
    }



    return(
        <>
            {clicked ? <Answer 
                answer={props.answer} 
                clicked={props.clicked} 
                setConfig={props.setConfig} 
                count={props.count}
                /> :
                <div className="card-question" data-test="flashcard">
                    <p data-test="flashcard-text">{props.question}</p>
                    <img src={Virar} className="seta-play" alt="seta-play" data-test="turn-btn" onClick={handleClick}/>
                </div>
            }
        </>
    )
}