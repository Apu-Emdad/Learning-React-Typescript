import React, { useReducer } from "react";
// Define the type for state
type State = {
  count: number;
};

// Define the type for action
type Action = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
};

// Reducer function
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Reducer = () => {
  const initialState: State = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>useReducer </h1>
      <h1>Count: {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Reducer;
