import { useReducer } from "react";

export default function Repons({ reponse, remove }) {
  const initialState = { score: reponse.score };

  const reducer = (state, action) => {
    if (action.type === "AJOUTE") return { score: state.score++ };
    else if (action.type === "RETIRE") return { score: state.score-- };
    else return state;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>{reponse.answer}</h3>
      <button onClick={() => dispatch({ type: "AJOUTE" })}>+</button>
      <label>{state.score}</label>
      <button onClick={() => dispatch({ type: "RETIRE" })}>-</button>

      <button onClick={() => remove(reponse.id)}>remove</button>
    </div>
  );
}
