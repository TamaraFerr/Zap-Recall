export default function Answer(props){
    const wrong = ["erro", "../assets/icone_erro.png", "no-icon", true]
    const almost = ["quase", "../assets/icone_quase.png", "partial-icon", true]
    const zap = ["certo", "../assets/icone_certo.png", "zap-icon", true]
    const { contador, setContador } = props.count

    function handleClick(classe, icon, teste, desabilitado) {
        props.clicked(false)
        props.setConfig({
            classe: classe, 
            icon: icon,
            teste: teste,
            desabilitado: desabilitado
        })

        setContador(contador + 1)
    }

    return(
        <div className="card-answer" data-test="flashcard">
            <p data-test="flashcard-text">{props.answer}</p>
            <div className="buttons">
                <button className="no" onClick={e => {handleClick(...wrong)}}>Não lembrei</button>
                <button className="maybe" onClick={e => {handleClick(...almost)}}>Quase não lembrei</button>
                <button className="zap" onClick={e => {handleClick(...zap)}}>Zap!</button>
            </div>
        </div>
    )
}