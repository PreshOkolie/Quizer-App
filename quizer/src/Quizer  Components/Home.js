import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome">
    <h1>WELCOME TO QUIZZER</h1>
    <button onClick={() => navigate ('Quizarea')}>Start Quiz</button>
      </div>
    </>

  )
}
