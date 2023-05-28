import React from "react";
import { RandomNumber } from "./RandomNumber";

const RestrictingProps = () => {
  return (
    <div>
      <h1>Restricting Props</h1>
      <RandomNumber value={10} isPositive />
      {/* invalid  isZero and isNegative are restricted*/}
      {/* <RandomNumber value={10} isPositive isZero /> */}
    </div>
  );
};

export default RestrictingProps;
