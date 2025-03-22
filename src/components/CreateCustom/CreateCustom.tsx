import { text } from "express";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import MyForm from "../SubmitAnswer/SubmitAnswer";
import CustomForm from "./SubmitCustom";
import BackButton from "../BackButton/BackButton";

interface CustomFlashcardProps {
    id?: string;
}
const CustomFlashcard: React.FC<CustomFlashcardProps> = () => {
    //  let params = useParams();
    // params.id;
    // console.log('this is id', params.id)
    const [category, setCategory] = useState('behavioral')

    let userId = localStorage.getItem("ID");

    // const [techQ, setTechQ] = useState('');

    // useEffect(() => {
    //     const fetchTechnicalQ = async () => {
    //         try {
    //             let data = sessionStorage.getItem("questionsObj");
    //             console.log('this is session stored data', data);
    //             data = JSON.parse(data);
    //             console.log('rejson data', data)
                
    //             for (let i = 0; i < data.length; i += 1) {
    //                 for (const key in data[i]) {
    //                     if (data[i][key] === params.id) {
    //                         setTechQ(data[i].question)
    //                     }
    //                 }
    //             }
    //         } catch(err) {
    //             console.log('error fetching', err);
    //         }
    //     }
    
    //     //     setQuestions(data)
    //     fetchTechnicalQ();
    //     // console.log('question', techQ);
    // }, [params.id])


    // useEffect(() => {
    //     // console.log("question", techQ);
    // }, []);
    return (
        <div style={{                            
            fontFamily: "papyrus",
        }}>
            <div style={{
                    width: '700px', 
                    height: '450px', 
                    backgroundColor: 'white', 
                    border: 'solid', 
                    borderRadius: '8px',
                    left: "200px",
                    display: 'center',
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <select 
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                    }}>
                      <option value="behavioral">Behavioral</option>
                      <option value="technical">Technical</option>
                    </select>
                    <div
                    style={{paddingTop: '0px'}}></div>
                        {/* <label style={{fontSize: 'large', fontFamily: "papyrus", display: 'center'}}>
                            test
                        </label> */}
                        <CustomForm 
                            apiUrl="http://localhost:3000/api/create"
                            question="test"
                            category={category}
                            user={userId}
                                                    />
                    
                </div>
                <div>
                    {<BackButton />}
                </div>
        </div>

    )


}

export default CustomFlashcard;