import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login/loginComponents';
import AnswerQuestions from './components/Options/optionsComponents';
import CreateBehavioralQuestion from './components/CreateBehavioral/CreateBQuestion';
import CreateTechnicalQuestion from './components/CreateTechnical/CreateTQuestion';
import PracticeBehavioralQuestion from './components/PracticeBehavioral/PracticeBQuestions';
import PracticeTechnicalQuestion from './components/PracticeTechnical/PracticeTQuestions';
import TechnicalFlashcard from './components/CreateTechnicalFlashcard/TFlashcardComponent';
import BehavioralFlashcard from './components/CreateBFlashcard/BFlashcardComponent';

function App() {

  return (
    <div>

      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/options" element={<AnswerQuestions/>}></Route>
        <Route path="/createTechnical" element={<CreateTechnicalQuestion/>}></Route>
        <Route path="/createBehavioral" element={<CreateBehavioralQuestion/>}></Route>
        <Route path="/practiceBehavioral" element={<PracticeBehavioralQuestion/>}></Route>
        <Route path="/practiceTechnical" element={<PracticeTechnicalQuestion/>}></Route>
        <Route path="/createTechnicalFlashcards/:id" element={<TechnicalFlashcard/>}></Route>
        <Route path="/createBehavioralFlashcards/:id" element={<BehavioralFlashcard/>}></Route>

      </Routes>
    </div>
  )
}

export default App;