import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";

const PracticeBehavioralQ: React.FC = () => {
    // const { id } = useParams();

    // let data = sessionStorage.getItem("AnsweredBehavioralQs")
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
    const [behavioralQ, setBehavioralQ] = useState('');
    const [answer, setAnswer] = useState('');
    const [showAnswer, setShowAnswer] = useState(false);
    
        useEffect(() => {
            const fetchBehavioralQ = async () => {
                try {
                    let data = sessionStorage.getItem("AnsweredBehavioralQs");
                    // if (!data) return;
                    console.log('this is session stored data', data);
                    data = JSON.parse(data);
                    console.log('rejson data', data)
                    
                    for (let i = 0; i < data.length; i += 1) {
                        for (const key in data[i]) {
                            if (data[i][key] === params.id) {
                                setBehavioralQ(data[i].question)
                                setAnswer(data[i].answer);
                            }
                        }
                    }
                } catch(err) {
                    console.log('error fetching', err);
                }
            }
        
            //     setQuestions(data)
            fetchBehavioralQ();
            // console.log('question', techQ);
        }, [params.id])
    
    
        useEffect(() => {
            console.log("question", behavioralQ);
        }, [behavioralQ]);
    
    
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
                                {behavioralQ}
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
                <div>
                    {<BackButton />}
                </div>
            </div>
    
        )
}

export default PracticeBehavioralQ;