export default function Answer(){
    return(
        <div className="card-answer" data-test="flashcard">
            <p data-test="flashcard-text">Pergunta 1</p>
            <div className="buttons">
                <button className="no">Não lembrei</button>
                <button className="maybe">Quase não lembrei</button>
                <button className="zap">Zap!</button>
            </div>
        </div>
    )
}