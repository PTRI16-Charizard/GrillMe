import { text } from "express";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyForm from "../SubmitAnswer/SubmitAnswer";
import BackButton from "../BackButton/BackButton";

interface TechnicalFlashcardProps {
    id?: string;
}
const TechnicalFlashcard: React.FC<TechnicalFlashcardProps> = () => {
     let params = useParams();
    params.id;
    console.log('this is id', params.id)

    let userId = localStorage.getItem("ID");

    const [techQ, setTechQ] = useState('');

    useEffect(() => {
        const fetchTechnicalQ = async () => {
            try {
                let data = sessionStorage.getItem("questionsObj");
                console.log('this is session stored data', data);
                data = JSON.parse(data);
                console.log('rejson data', data)
                
                for (let i = 0; i < data.length; i += 1) {
                    for (const key in data[i]) {
                        if (data[i][key] === params.id) {
                            setTechQ(data[i].question)
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
        console.log("question", techQ);
    }, [techQ]);
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
                    <div
                    style={{paddingTop: '50px'}}></div>
                        <label style={{fontSize: 'large', fontFamily: "papyrus", display: 'center'}}>
                            {techQ}
                        </label>
                        {/* <input type="text" style={{
                            color: "pastelblack",
                            textAlign: "center",
                            fontSize: 'large',
                            justifyContent: "center",
                            margin: '50px',
                            width: '600px',
                            height: '150px',
                            transition: "0.3s all",
                            boxShadow: "5000px 4px 20px 0px rgba(0, 0, 0, 0.05)",
                            />
                        }} */}
                        <MyForm 
                            apiUrl="http://localhost:3000/api/answer"
                            question={techQ}
                            category="technical"
                            user={userId}
                            preset={true} 
                            />
                    
                </div>
                <div>
                    {<BackButton />}
                </div>
        </div>
    )
}

export default EditFlashcard;