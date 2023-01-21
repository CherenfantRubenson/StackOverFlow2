import Repons from "./Repons";
import { useState,useReducer } from "react";



export default function Stack1({ kesyon,efase }) {
  const [answers, setAnswers]= useState(kesyon.answers);

  const removeAnswer = (id) => {
    const newAnswers = answers.filter((el) => {
      if (el.id !== id) {
        return el
      }
    
    })
    setAnswers(newAnswers)
  }

  

  const initialState = {score: kesyon.score}

  const reducer = (state, action) => {
    if(action.type==="AJOUTE")
      return { score: state.score++ }
    else if(action.type==="RETIRE")
      return { score: state.score--}
    else
      return state
  }



  const [state, dispatch] = useReducer(reducer, initialState)



  return (
    <div>
  
      <h2>{kesyon.question}</h2>
      <span >Date:{kesyon.date}</span><br/>
      <button onClick={() => dispatch({ type: "AJOUTE" })}>+</button>
      <label>{state.score}</label>
      <button onClick={() => dispatch({ type: "RETIRE" })}>-</button>
      <button onClick={() => efase(kesyon.id)}>Efase</button>
   
      <hr/>
      <strong>Total Reponse: {answers.length}</strong>
      <ul>
        {answers.map(tr => <Repons  reponse={tr} remove={removeAnswer} />)}
      </ul>
      
      <hr />
    
      {kesyon.tags.map((e)=><strong>
        li tag {e}
      </strong>)} 
    </div>
  );
}