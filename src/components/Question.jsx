import Virar from "../assets/seta_virar.png"

export default function Question(){
    return(
        <div className="card-question" data-test="flashcard">
            <p data-test="flashcard-text">Pergunta 1</p>
            <img src={Virar} className="seta-play" alt="seta-play" data-test="play-btn"/>
        </div>
    )
}