import mocks from "./mock"
import styled from "styled-components"

export default function Footer(props) {
    const numeroFinal = mocks.length
   

    return (
        <FooterZap className="zap-footer" data-test="footer">
            <h2>{props.contador}/{numeroFinal} CONCLUÍDOS</h2>
        </FooterZap>
    )
}

const FooterZap = styled.div `
    position: fixed;
    bottom: 0;
    background-color: #ffffff;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        font-family: 'recursive';
        font-size: 18px;
        font-weight: 400;
    }
`