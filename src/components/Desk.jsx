import Flashcards from "./Flashcards";
import mocks from "./mock";

export default function Desk(props){
    return(
        <div className="container-principal">
            <div className="flashcards">
                {mocks.map((mock, index) =>
                    <Flashcards 
                    key={index} 
                    index={index}
                    question={mock.question}
                    answer={mock.answer}
                    count={props.count}
                    />
                )}
            </div>
        </div>
    )
}