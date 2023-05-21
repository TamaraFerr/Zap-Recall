import mocks from "./mock"

export default function Footer(props){
    const numeroFinal = mocks.length

    return(
        <div className="footer">
            <h2>{props.contador}/{numeroFinal} CONCLUÍDOS</h2>
        </div>
    )
}