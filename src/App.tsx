import { Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/loginComponents';
import AnswerQuestions from './components/optionsComponents';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/options" element={<AnswerQuestions/>}></Route>
      </Routes>
    </div>
  )

}

export default App;