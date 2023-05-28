import React from "react";
import List from "./List";

const GenericProps = () => {
  return (
    <div>
      <h1>Generic Props</h1>
      <List
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[
          {
            first: "Bruce",
            last: "Wayne",
          },
          {
            first: "Clark",
            last: "Kent",
          },
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
};

export default GenericProps;
