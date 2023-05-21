import React from "react";
type HeadingProps = {
  children: string;
};
const Heading = (props: HeadingProps) => {
  return <h4>{props.children}</h4>;
};

export default Heading;
