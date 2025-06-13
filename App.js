import { useState } from "react";
import quizData from "./data/quizData";
import Categoris from "./Components/Categoris";
import QuizPage from "./Components/QuizPage";
import Results from "./Components/Results";


const App = () => {
  const [category,setCategory] = useState("");
  const [filterQuiz,setFilterQuiz] = useState([]);
  const [finished, setFinished] = useState(false);
  const [score,setScore] = useState(0);
  const onSelectCategory = (select)=>{
    setCategory(select);
    
    const quizArr = quizData.quizzes.filter((data)=>{
      return data.category === select;
    });
    setFilterQuiz(quizArr);
  }
  const handleFinish = (score) => {
    setFinished(true);
    setScore(score);
  }
  // 다시 시작 버튼 활성. 
  const handleRestart = ()=>{
    setCategory('');
    setFinished(false);
  }


  return (
    <div className="app">
      { !category && !finished &&
        <Categoris categoris={quizData.categories}
                  onSelect={onSelectCategory}
        />
      }
      {
        category && !finished && (<QuizPage quiz={filterQuiz} onFinished={handleFinish}/>)
      }
      {
        finished && (<Results onRestart={handleRestart} appScore={score}/>)
      }
    </div>
  );
};

export default App;