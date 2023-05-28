import React from "react";
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h1>List of Itmes</h1>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            click on the item-{index}
          </div>
        );
      })}
    </div>
  );
};

export default List;
