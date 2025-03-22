import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import { useNavigate } from "react-router-dom";

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
    const [editMode, setEditMode] = useState(false);
    const [editAnswer, setEditAnswer] = useState(answer)
    
    const navigate = useNavigate();

    const handleEditClick = () => {
        setEditMode(true);        
    }

    const handleSubmit = async () => {
        try {
            await fetch(`http://localhost:3000/api/update/${params.id}`, {
                method: 'PUT',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ answer: editAnswer, userId: localStorage.getItem('ID')})
            })
            // console.log('id', params.id)
            console.log('submitting new answer: ', editAnswer);
            navigate(-1)
        } catch (error) {
            console.log('Error editing answer', error)
        }
    }
    

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
    
    
        // useEffect(() => {
        //     console.log("question", behavioralQ);
        // }, [behavioralQ]);
    
    
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
                        alignItems: "center",
                    }}>
                        <div style={{paddingTop: '50px'}}>
                            <label style={{fontSize: 'large' ,fontFamily: "papyrus", display: 'center'}}>
                                {behavioralQ}
                            </label>
                            {editMode ? (<div><textarea style={{width:'650px', height:'250px', overflowY:'scroll', wordBreak:"break-word", textAlign: 'left'}} value={editAnswer} onChange={(e) => setEditAnswer(e.target.value)}></textarea> <button onClick={handleSubmit}>Submit</button></div>) : (<div style={{
                                display: 'flex',
                                color: "pastelblack",
                                textAlign: "left",
                                fontSize: 'large',
                                // alignItems: 'center',
                                justifyContent: "center",
                                margin: '25px',
                                width: '650px',
                                height: '250px',
                                transition: "background-color 0.5s ease",
                                boxShadow: "5000px 4px 20px 0px rgba(0, 0, 0, 0.05)",
                                border: 'solid',
                                borderRadius: '8px',
                                backgroundColor: showAnswer ? 'white' : 'lightgreen',
                                cursor: 'pointer',
                                overflowY:"scroll",
                            }}
                            
                            onClick={() => setShowAnswer(!showAnswer)}
                            >
                                {showAnswer ? <div style={{display: 'flex', flexDirection: 'column', alignItems:"center"}
                                }>{answer}<button onClick={handleEditClick} style={{width:"200px", height:"50px", alignItems:"center"}}>Edit Answer</button></div>
                                 : <h4 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', overflowY: 'hidden'}}>Click to reveal the answer</h4>}
                                {/* {showAnswer ? (<div><button onClick={handleEditClick}>Edit Answer</button></div>) : ('')} */}
                            </div>
                            )
                                
                            }
                        </div>
                    </div>
                <div>
                    {<BackButton />}
                </div>
            </div>
    
        )
}

export default PracticeBehavioralQ;