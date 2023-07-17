import { Quizarea } from "./Quizer  Components/Quizarea";
import React from "react";
import { Routes,Route } from "react-router-dom";
import { Home } from "./Quizer  Components/Home";
import { Score } from "./Quizer  Components/Score";
import './Quizer  Components/Quizer.css'


function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="quizarea" element = {<Quizarea/>}/>
      <Route path="score" element = {<Score/>}/>
    </Routes>
  );
}

export default App;
