import React, { useReducer } from "react";
import { buttonStyle } from "../components/Login";
// Define the type for state
type State = {
  count: number;
};

// Define the type for action
type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

type ResetAction = {
  type: "RESET";
};

type CounterAction = UpdateAction | ResetAction;

const Reducer = () => {
  // Reducer function
  const reducer = (state: State, action: CounterAction) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + action.payload };
      case "DECREMENT":
        return { count: state.count - action.payload };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };
  const initialState: State = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "INCREMENT", payload: 5 });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT", payload: 5 });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h1>useReducer </h1>
      <h3>Count: {state.count}</h3>
      <button style={buttonStyle} onClick={increment}>
        Increment + 5
      </button>
      <button style={buttonStyle} onClick={decrement}>
        Decrement -5
      </button>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Reducer;
