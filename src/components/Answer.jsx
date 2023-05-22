import styled from "styled-components"

export default function Answers(props) {  
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

        console.log(classe)
    }

    return (
        <Answer data-test="flashcard">
            <p data-test="flashcard-text">{props.answer}</p>
            <Buttons>
                <Button1 data-test="no-btn" onClick={e => {handleClick(...wrong)}} >Não lembrei</Button1>
                <Button2 data-test="partial-btn" onClick={e => {handleClick(...almost)}}>Quase não lembrei</Button2>
                <Button3 data-test="zap-btn" onClick={e => {handleClick(...zap)}}>Zap!</Button3>
            </Buttons>
        </Answer>
    )
}

const Answer = styled.div `
    margin-top: 25px;
    width: 100%;
    height: 131px;
    background-color: #FFFFD4;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    flex-direction: column;

    p {
        padding-left: 6px;
    }
`

const Buttons = styled.div `
    display: flex;
    justify-content: center;
    gap: 7px;
    top: 25px;
    z-index: 0;
    padding-top: 19px;
`

const Button1 = styled.button `
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    font-family: 'recursive';
    font-size: 12px;
    font-weight: 400;
    border: none;
    background-color: #FF3030;
    color: #FFFFFF;
`

const Button2 = styled.button `
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    font-family: 'recursive';
    font-size: 12px;
    font-weight: 400;
    border: none;
    background-color: #FF922E;
    color: #FFFFFF;
`

const Button3 = styled.button `
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    font-family: 'recursive';
    font-size: 12px;
    font-weight: 400;
    border: none;
    background-color: #2FBE34;
    color: #FFFFFF;
`