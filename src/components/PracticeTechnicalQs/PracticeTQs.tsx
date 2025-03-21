import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PracticeTechnicalQ: React.FC = () => {
    // const { id } = useParams();

    // let data = sessionStorage.getItem("AnsweredTQuestionsObj")
    // const parsedData = JSON.parse(data);
    // const question = parsedData.find(element => element._id === id)

    // return (
    //     <div>
    //         <h3>
    //             {question.answer}
    //         </h3>
    //     </div>
    // )

    const params = useParams();
        const [technicalQ, setTechnicalQ] = useState('');
        const [answer, setAnswer] = useState('');
        const [showAnswer, setShowAnswer] = useState(false);
        
            useEffect(() => {
                const fetchTechnicalQ = async () => {
                    try {
                        let data = sessionStorage.getItem("AnsweredTQuestionsObj");
                        // if (!data) return;
                        console.log('this is session stored data', data);
                        data = JSON.parse(data);
                        console.log('rejson data', data)
                        
                        for (let i = 0; i < data.length; i += 1) {
                            for (const key in data[i]) {
                                if (data[i][key] === params.id) {
                                    setTechnicalQ(data[i].question)
                                    setAnswer(data[i].answer);
                                }
                            }
                        }
                    } catch(err) {
                        console.log('error fetching', err);
                    }
                }
            
                //     setQuestions(data)
                fetchTechnicalQ();
                // console.log('question', techQ);
            }, [params.id])
        
        
            useEffect(() => {
                console.log("question", technicalQ);
            }, [technicalQ]);
        
        
            return (
                <div style={{                            
                    fontFamily: "papyrus",
                }}>
                    <div style={{
                            width: '700px', 
                            height: '400px', 
                            backgroundColor: 'white', 
                            border: 'solid', 
                            borderRadius: '8px',
                            left: "200px",
                            display: 'center',
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <div style={{paddingTop: '50px'}}>
                                <label style={{fontSize: 'large' ,fontFamily: "papyrus", display: 'center'}}>
                                    {technicalQ}
                                </label>
                                <div style={{
                                    display: 'flex',
                                    color: "pastelblack",
                                    textAlign: "center",
                                    fontSize: 'large',
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    margin: '50px',
                                    width: '600px',
                                    height: '150px',
                                    transition: "background-color 0.5s ease",
                                    boxShadow: "5000px 4px 20px 0px rgba(0, 0, 0, 0.05)",
                                    border: 'solid',
                                    borderRadius: '8px',
                                    backgroundColor: showAnswer ? 'white' : 'lightgreen',
                                    cursor: 'pointer'
                                }}
                                onClick={() => setShowAnswer(!showAnswer)}
                                >
                                    {showAnswer ? answer : "Click to reveal the answer"}
                                </div>
                            </div>
                        </div>
                </div>
        
            )
}

export default PracticeTechnicalQ;