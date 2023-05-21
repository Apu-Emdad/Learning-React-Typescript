import React from "react";
type ButtonProps = {
  // handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  handleClick: (event: any, id: number) => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button
      style={{ padding: "10px", cursor: "pointer" }}
      onClick={(event) => props.handleClick(event, 1)}
    >
      Click Me
    </button>
  );
};

export default Button;
