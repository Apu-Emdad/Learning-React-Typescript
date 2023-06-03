import Greet from "../Greet";
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h4>{props.name}</h4>
    </div>
  );
};

export default CustomComponent;
