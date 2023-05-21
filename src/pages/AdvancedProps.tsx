import React from "react";
import Status from "../components/Status";
import Heading from "../components/Heading";
import Oscar from "../components/Oscar";

const AdvancedProps = () => {
  return (
    <div>
      <h1>Advanced props</h1>
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>The oscar goes Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
};

export default AdvancedProps;
