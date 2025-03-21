import React from "react"

const PracticeBehavioralQ: React.FC = () => {

    let data = sessionStorage.getItem("AnsweredBehavioralQs")
    data = JSON.parse(data);
    console.log('parsed', data)
    return (
        <div>
            <h3>
                {data[0].answer}
            </h3>
        </div>
    )
}

export default PracticeBehavioralQ;