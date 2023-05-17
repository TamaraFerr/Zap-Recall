import Flashcard from "./Flashcard";
import Footer from "./Footer";
import Logo from "../assets/logo.png"

export default function Desk(){
    return(
        <div className="container-principal">
            <div className="header">
                <img src={Logo} className="logo-zap"/>
                <h1 className="titulo">ZapRecall</h1>
            </div>
            <div className="flashcards">
                <Flashcard />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}