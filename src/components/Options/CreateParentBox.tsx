
import { useNavigate } from "react-router";

const CreateQuestionsBox: React.FC = () => {
    const navigate = useNavigate();
  
    const HandleCreateTechnical = () => {
      navigate('/createTechnical');  
    }
  
    const HandleCreateBehavioral = () => {
      navigate('/createBehavioral');
    }

    return (
      <div style={{
        width: '400px', 
        height: '200px', 
        backgroundColor: 'white', 
        border: 'solid', 
        borderRadius: '8px'}}>
          <div>
          <h2>
          Answer sample questions
          </h2>  
      </div>
      <div style={{ 
        display: "flex", 
        justifyContent: "space-around" }}>
      <div style={{
        paddingTop: '50px'
        }}>
        <button 
          onClick={HandleCreateBehavioral}
          onMouseEnter={(e) => e.currentTarget.style.border = 'solid 1px black'}
          onMouseLeave={(e) => e.currentTarget.style.border = ''}
        >
          Behavioral
        </button>
      </div>
      <div style={{
        paddingTop: '50px'
      }}>
        <button 
          onClick={HandleCreateTechnical}
          onMouseEnter={(e) => e.currentTarget.style.border = 'solid 1px black'}
          onMouseLeave={(e) => e.currentTarget.style.border = ''}
        >
          Technical
        </button>
      </div>
      </div>
      </div>
    )
  }
  
  export default CreateQuestionsBox;