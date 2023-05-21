import { useState } from "react"
import Desk from "./components/Desk"
import "./styles/reset.css"
import "./styles/style.css"
import Footer from "./components/Footer"
import Logo from "./assets/logo.png";


function App() {
  const [contador, setContador] = useState(0)

  return (
    <div className="container">
      <div className="header">
        <img src={Logo} className="logo-zap"/>
        <h1 className="titulo">ZapRecall</h1>
      </div>

      <Desk count={{contador: contador , setContador: setContador}}/>

      <Footer contador={contador}/>
    </div>
  )
}

export default App
