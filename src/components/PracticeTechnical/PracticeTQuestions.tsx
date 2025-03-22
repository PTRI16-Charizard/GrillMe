
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
// question: { type: String, required: true },
// answer: { type: String, required: true },
// category: { type: String, required: true },
// user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
// createdAt: {type: Date, default: Date.now }

interface Question {
    _id: string;
    question: string;
    answer: string;
    category: string;
}

const PracticeTechnicalQuestion: React.FC = () => {
        const navigate = useNavigate()
        const handleTechClick = (id: string) => {
            navigate(`/practiceYourTechnicalQs/${id}`)
            // display answer on click

           
        }
        // useeffect to fetch
        // usestate to save 
        // only fetch 5 at a time / fetching all but only displaying 5 at a time
        // this is where we will be storing result of fetching questions
        // setQuestions React.Dispatch<React.SetStateAction<string[]>> 
        const [questions, setQuestions] = useState<Question[]>([]);
        const boxes: string[] = [];

        const handleCustom = () => {
            navigate('/createCustomQ');
        }

        const handleDeleteClick = async(id: string) =>{
            try {
                await fetch(`http://localhost:3000/api/delete/${id}`, {
                    method: 'DELETE',
                });
                setQuestions(questions.filter(question=> question._id !== id))
                
            } catch (error) {
                console.log('Error deleting', error)
            }
        }

        useEffect(() => {
            const fetchQuestions = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/answered/technical/${localStorage.getItem('ID')}`)
                    const data = await response.json();
                    setQuestions(data);
                    // save in session storage
                    sessionStorage.setItem("AnsweredTQuestionsObj", JSON.stringify(data));
                    

                    // props._id = data._id;
                    
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

    
    for (let i = 0; i < questions.length; i += 1) {
        if (questions[i]) {
            boxes.push(questions[i])
        }
    }

    console.log(boxes);

    return (
        <div style={{fontFamily: "papyrus"}}>
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
                    <h2>
                        Select a question to practice
                    </h2>  
                    {/* <button onClick={handleCustom}>Create custom question</button>    */}
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    width: '100%',
                    height: '600px',
                    overflowY: 'scroll',
                    padding: '20px',
                    boxSizing: 'border-box'
                }}>
                    {boxes.map((questions, index) => {
                        console.log("index", questions)
                        const id = questions._id;
                        console.log('questionID', id)
                        return  (
                        <div>
                            <div style={{
                                    width: '600px', 
                                    height: '100px', 
                                    backgroundColor: '#f9f9f9', 
                                    border: 'solid', 
                                    borderRadius: '8px',
                            }}>
                                <div style={{display: "flex", justifyContent: 'space-between'}}>
                                    <button onClick={() => handleTechClick(id)} key={index} style={{
                                        width: '5700px', 
                                        height: '100px', 
                                        backgroundColor: 'cream', 
                                        border: 'none', 
                                        borderRadius: '8px'
                                    }}>  
                                        <p style={{alignSelf: "center"}}>{questions.question}</p>
                                    </button>
                                    <div>
                                        <button onClick={()=> handleDeleteClick(id)} style={{alignSelf: "flex-start"}}> <img src="https://img.icons8.com/?size=40&id=109470&format=png&color=000000" alt="X" /> </button>
                                    </div>            
                                </div>
                            </div>
                        </div>
                    )
                    })}
                     </div>
                </div>
                <div>
                    {<BackButton />}
                </div>
            </div>
    )
}


export default PracticeTechnicalQuestion