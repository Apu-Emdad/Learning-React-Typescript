import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const EventProps = () => {
  const handleClick = (event: any, id: number) => {
    console.log("clicked", event, id);
  };
  const handleChange = (event: any) => {
    console.log("event:", event.target.value);
  };
  return (
    <div>
      <h1>Event Props</h1>
      <Button handleClick={handleClick} />
      <Input defaultValue="asdf" handleChange={handleChange} />
    </div>
  );
};

export default EventProps;
