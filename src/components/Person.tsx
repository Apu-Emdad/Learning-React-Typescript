import React from "react";

type person = {
  name: {
    firstName: string;
    lastName: string;
  };
};
const Person = (props: person) => {
  return (
    <div>
      <h5>
        {props.name.firstName} {props.name.lastName}
      </h5>
    </div>
  );
};

export default Person;
