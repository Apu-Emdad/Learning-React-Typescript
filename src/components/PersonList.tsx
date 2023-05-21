import React from "react";

type PersonListProps = {
  nameList: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <h4>Person List:</h4>
      <ol>
        {props.nameList.map((name) => (
          <li key={name.first}>
            {name.first} {name.last}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PersonList;
