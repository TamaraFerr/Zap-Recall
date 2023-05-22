import { useState } from "react";
import Footer from "./components/Footer";
import "./styles/style.css"
import styled from "styled-components";
import Desk from "./components/Desk";
import Zap from "./assets/logo.png"


function App() {
  const [contador, setContador] = useState(0)

  return (
    <>
      <Container>
        <Top>
          <Logo src={Zap} alt="zaprecall-logo"/>
          <Title>ZapRecall</Title>
        </Top>       

        <Desk count={{contador: contador, setContador: setContador}}/>

        <Footer contador={contador}/>
      </Container>    
    </>
  )
}

export default App;


const Container = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FB6B6B;
`

const Top = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
`

const Logo = styled.img `
  width: 52px;
  height: 60px;
  margin-right: 25px;
`

const Title = styled.h1 `
  color: #ffffff;
  font-size: 36px;
  font-weight: bold;
  font-family: 'Rigtheous';
  margin-right: 20px;
`