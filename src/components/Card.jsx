import Play from "../assets/seta_play.png"

export default function Card(){
    return(
        <div className="cards" data-test="flashcard">
            <p data-test="flashcard-text">Pergunta 1</p>
            <img src={Play} className="seta-play" alt="seta-play" data-test="play-btn"/>
        </div>
    )
}