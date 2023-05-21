import React from "react";
type InputProps = {
  defaultValue: string;
  handleChange: (event: any) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      defaultValue={props.defaultValue}
      onChange={(event) => props.handleChange(event)}
    />
  );
};

export default Input;
