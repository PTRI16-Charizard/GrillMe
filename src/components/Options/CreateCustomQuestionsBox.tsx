import { useNavigate } from "react-router";

const CreateCustomQuestionsBox: React.FC = () => {
    const navigate = useNavigate();
  
    // const HandleCreateTechnical = () => {
    //   navigate('/createTechnical');  
    // }
  
    // const HandleCreateBehavioral = () => {
    //   navigate('/createBehavioral');
    // }
    const handleCustom = (): void => {
        navigate('/createCustomQ');
    }

    return (
      <div style={{
        display:"flex",
        cursor: 'pointer',
        width: '400px', 
        height: '90px', 
        justifyContent:"center",
        backgroundColor: '#f9f9f9', 
        border: 'solid', 
        borderRadius: '8px'}}>
          <div onClick={handleCustom} style={{paddingBottom: '0px', marginTop: '6px', backgroundColor: '#f9f9f9'}}>
            <h2 >
            Create custom question
            </h2>
        </div>
      {/* <div style={{ 
        display: "flex", 
        justifyContent: "space-around" }}>
      <div style={{
        paddingTop: '30px'
        }}> */}
        {/* <button 
         style={{
          width: '120px',
          height:'60px'
        }}
          onClick={handleCustom}
          onMouseEnter={(e) => e.currentTarget.style.border = 'solid 1px black'}
          onMouseLeave={(e) => e.currentTarget.style.border = ''}
        > */}
          {/* Behavioral
        </button>
      </div>
      <div style={{
        paddingTop: '30px'
      }}>
        <button 
         style={{
          width: '120px',
          height:'60px'
        }}
          onClick={HandleCreateTechnical}
          onMouseEnter={(e) => e.currentTarget.style.border = 'solid 1px black'}
          onMouseLeave={(e) => e.currentTarget.style.border = ''}
        >
          Technical
        </button> */}
      {/* </div> */}
      {/* // </div> */}
      </div>
    )
  }
  
  export default CreateCustomQuestionsBox;