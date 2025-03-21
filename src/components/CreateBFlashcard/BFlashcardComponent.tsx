import { text } from "express";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyForm from "../SubmitAnswer/SubmitAnswer";

interface BehavioralFlashcardProps {
    id: string;
}
interface Data {
    id: string;
    question: string;
    answer: string;
}
const BehavioralFlashcard: React.FC<BehavioralFlashcardProps> = () => {
     let params = useParams();
    params.id;
    console.log('this is id', params.id)

    const [behavioralQ, setBehavioralQ] = useState('');

    useEffect(() => {
        
        const fetchBehavioralQ = async () => {
            try {
                let data = sessionStorage.getItem("BehavioralQObject");
                // if (!data) return;
                console.log('this is session stored data', data);
                data = JSON.parse(data);
                console.log('rejson data', data)
                
                for (let i = 0; i < data.length; i += 1) {
                    for (const key in data[i]) {
                        if (data[i][key] === params.id) {
                            setBehavioralQ(data[i].question)
                            console.log("this is behavioralq", behavioralQ)
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
                    <div
                    style={{paddingTop: '50px'}}>
                        <label style={{fontSize: 'large' ,fontFamily: "papyrus", display: 'center'}}>
                            {behavioralQ}
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
                        }}
                        /> */}
                        <MyForm 
                            apiUrl="http://localhost:3000/api/answer"
                            question={behavioralQ}
                            category="behavioral"
                            user={params.id}
                            preset={true} 
                            />
                            
                    </div>
                </div>
        </div>

    )

}

export default BehavioralFlashcard;