import React from "react";
import Person from "./Person";
import PersonList from "./PersonList";
type GreetProps = {
  name: string;
  messageCount?: number; //makes mesaageCount optional prop
  isLoggedIn: boolean;
};
/* the below code works the same for type:
interface GreetProps {
  name: string;
}
*/
const Greet = (props: GreetProps) => {
  const personName = {
    firstName: "Bruce",
    lastName: "Wayne",
  };
  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div>
      <h2>Login Status: {props.isLoggedIn ? "true" : "false"}</h2>
      <h4>
        Hello {props.name}, you have {props.messageCount} message
      </h4>
      <h5>Welecomt the Person</h5>
      <Person name={personName} />
      <PersonList nameList={nameList} />
    </div>
  );
};

export default Greet;
