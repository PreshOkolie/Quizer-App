import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Quizarea = () => {
  
  var Quizquestions =[

    {
      Question:"What is the capital of Nigeria?",
      QuizAnswer:[
        {Answer:"Lagos", isCorrect: false},
        {Answer:"Abuja", isCorrect: true},
        {Answer:"Ekiti", isCorrect: false},
        {Answer:"Abia", isCorrect: false}
      ]
    },
    {
      Question:"Who is the current president of Nigeria?",
      QuizAnswer:[
        {Answer:"Mohammadu Buhari", isCorrect: false},
        {Answer:"Nyesom Wike", isCorrect: false},
        {Answer:"Bola Asiwaju Tinubu", isCorrect: true},
        {Answer:"Lai Mohammed", isCorrect: false}
      ]
    },
    {
      Question:"Which city is the biggest city in Nigeria?",
      QuizAnswer:[
        {Answer:"Kano", isCorrect: false},
        {Answer:"Abuja", isCorrect: false},
        {Answer:"Ekiti", isCorrect: false},
        {Answer:"Ibadan", isCorrect: true}
      ]
    },
    {
      Question:"What is the capital of Nigeria?",
      QuizAnswer:[
        {Answer:"Lagos", isCorrect: false},
        {Answer:"Abuja", isCorrect: true},
        {Answer:"Ekiti", isCorrect: false},
        {Answer:"Abia", isCorrect: false}
      ]
    },
    {
      Question:"What is the most traditional food in Nigeria?",
      QuizAnswer:[
        {Answer:"Jollof rice", isCorrect: false},
        {Answer:"Fried rice", isCorrect: false},
        {Answer:"Beans", isCorrect: false},
        {Answer:"All of the above", isCorrect: true}
      ]
    },
    {
      Question:"how many languages are spoken in Nigeria?",
      QuizAnswer:[
        {Answer:"500+", isCorrect: true},
        {Answer:"10", isCorrect: false},
        {Answer:"90+", isCorrect: false},
        {Answer:"50", isCorrect: false}
      ]
    },
    {
      Question:"How many seasons are in Nigeria?",
      QuizAnswer:[
        {Answer:"5", isCorrect: false},
        {Answer:"4", isCorrect: false},
        {Answer:"1", isCorrect: false},
        {Answer:"2", isCorrect: true}
      ]
    },
    {
      Question:"What is the Nigerian currency?",
      QuizAnswer:[
        {Answer:"Yen", isCorrect: false},
        {Answer:"Naira", isCorrect: true},
        {Answer:"Dollar", isCorrect: false},
        {Answer:"Cedis", isCorrect: false}
      ]
    },
    {
      Question:"What continent is Nigeria in?",
      QuizAnswer:[
        {Answer:"Asia", isCorrect: false},
        {Answer:"Africa", isCorrect: true},
        {Answer:"Europe", isCorrect: false},
        {Answer:"antarctica", isCorrect: false}
      ]
    },
    {
      Question:"Who coined the name Nigeria?",
      QuizAnswer:[
        {Answer:"Lord Lugard", isCorrect: false},
        {Answer:"Nnamdi Azikiwe", isCorrect: false},
        {Answer:"Queen Elizabeth", isCorrect: false},
        {Answer:"Flora Shaw", isCorrect: true}
      ]
    },
  ]

  const [newQuestion,setNewQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerResponse = (isCorrect) =>{
    if(isCorrect)
    {
      setScore(score+1);
    }

    const nextQuestion = newQuestion+1;
    if(nextQuestion<Quizquestions.length)
    {
      setNewQuestion(nextQuestion);
    }else{
      setShowScore(true);
    }
  }

  console.log(Quizquestions);

  const resetQuiz = () =>
  {
    setNewQuestion(0);
    setScore(0);
    setShowScore(false);

  }

  const navigate = useNavigate();

  return (
    <div className="App">

    {showScore?(
      <div className="scores">
        You have scored {score} out of {Quizquestions.length}
        <>
        <button type = 'submit' onClick={resetQuiz}>Play Again</button>

        <button onClick={() => navigate('/Score')}>End Quiz</button>
        </>
      </div>

    )
    //for questions
    :(
      <>
      <div className="questions">
          <div className="question-count">
            <span>{newQuestion+1}</span>/{Quizquestions.length}
          </div>

          <div className="question-text">
            {Quizquestions[newQuestion].Question}
          </div>
      </div>


        {/* //for answers */}

      <div className="answers">
        {Quizquestions[newQuestion].QuizAnswer.map((answer)=>
        (
          <button onClick={() => handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
        ))}

      </div>
      </>
    )
  }
    </div>
  )
}

export default Quizarea
