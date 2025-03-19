
import React, { useEffect, useState } from "react";

const CreateTechnicalQuestion: React.FC = () => {

        // useeffect to fetch
        // usestate to save 
        // only fetch 5 at a time / fetching all but only displaying 5 at a time
        // this is where we will be storing result of fetching questions
        // setQuestions React.Dispatch<React.SetStateAction<string[]>> 
        const [questions, setQuestions] = useState<string[]>([]);
        const boxes: Array<null> = [];

        useEffect(() => {
            const fetchQuestions = async () => {
                try {
                    const response = await fetch('http://localhost:3000/api/')
                    const data = await response.json();
                    setQuestions(data);
                    console.log('this is data', data)

                } catch(err) {
                    console.log('error fetching', err);
                }
            }
            // .then(response => response.json())
            // .then(data  => {
            //     console.log('data', data)
            //     setQuestions(data)})
            fetchQuestions();
        }, [])

    
    for (let i = 0; i < 5; i += 1) {
        if (questions[i]) {
            boxes.push(questions[i])
        }
    }

    console.log(boxes);

    return (
        <div>
            <div style={{
                display: "flex",
                width: '800px', 
                height: '800px', 
                backgroundColor: 'white', 
                border: 'solid', 
                borderRadius: '8px',
                position: "relative",
                margin: "20px auto",
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '400px', 
                    height: '100px', 
                    backgroundColor: 'white', 
                    border: 'solid', 
                    borderRadius: '8px',
                    position: "absolute",
                    top: '-25px',
                    left: "200px",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <h2 style={{fontFamily: "fantasy"}}>
                        create technical question flashcards!
                    </h2>  
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px'
                }}>
                    {boxes.map((questions, index) => {
                        console.log("index", questions)

                        return  (
                        <div>
                         <div key={index} style={{
                                    width: '600px', 
                                    height: '100px', 
                                    backgroundColor: 'cream', 
                                    border: 'solid', 
                                    borderRadius: '8px',
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: 'center'
                        }}>  
                        <p>{questions.question}</p>
                        </div>
                        </div>
                    )
                    })}
                     </div>
                </div>
            </div>
    )
}


export default CreateTechnicalQuestion