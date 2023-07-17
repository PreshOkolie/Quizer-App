import {useNavigate} from "react-router-dom";

export const Score = () => {
  const navigate = useNavigate();
  return (
  
     <div className="start-again">

      <h1>congratulations, You have answered all the questions.</h1>
      <br/>
      <p>Your score has been sent to your email.</p>
     
    <>
     <button onClick={() => navigate (-1)}>Start Again</button>
    </>
    </div>
   
  )
}
// export default Score
