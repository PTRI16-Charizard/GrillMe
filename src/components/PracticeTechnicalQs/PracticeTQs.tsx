import React from "react"

const PracticeTechnicalQ: React.FC = () => {

    let data = sessionStorage.getItem("AnsweredTQuestionsObj")
    data = JSON.parse(data);
    console.log('hello!!')
    console.log('parsed answer portion data', data[0].answer)
    return (
        <div>
            <h3>
                {data[0].answer}
            </h3>
        </div>
    )
}

export default PracticeTechnicalQ;