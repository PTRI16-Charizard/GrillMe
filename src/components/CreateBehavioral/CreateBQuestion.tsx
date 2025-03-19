
function CreateBehavioralQuestion() {
    return (
        <div>
            <div style={{
                width: '800px', 
                height: '800px', 
                backgroundColor: 'white', 
                border: 'solid', 
                borderRadius: '8px',
                position: "relative",
                margin: "20px auto"
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
                        create behavioral question flashcards!
                    </h2>  
                </div>
                <div style={{
                    display: "grid",
                    placeItems: "center"
            }}>
                {/* <div style={{
                width: '400px', 
                height: '100px', 
                backgroundColor: 'white', 
                border: 'solid', 
                borderRadius: '8px',
                // paddingTop: 
                // justifyContent: "center"
                }}>
                     </div> */}
                </div>
            </div>
        </div>

    )
}


export default CreateBehavioralQuestion