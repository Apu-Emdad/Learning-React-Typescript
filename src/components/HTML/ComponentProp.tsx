import React from "react";
import { CustomButton } from "./Button";
import CustomComponent from "./CustomComponent";

const ComponentProp = () => {
  return (
    <div>
      <h1>React.ComponentProp</h1>
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        <div> Button Label</div>
      </CustomButton>
      <CustomComponent name="Bruce Wayne" isLoggedIn={true} />
    </div>
  );
};

export default ComponentProp;
