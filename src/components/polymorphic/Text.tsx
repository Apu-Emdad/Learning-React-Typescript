type TextProps = {
  size?: "sm" | "md";
  color?: "primary" | "secondary";
  as?: React.ElementType;
};

const Text = ({ size, color, as }: TextProps) => {
  const Component = as || "div";
  return (
    <div>
      <Component>
        {as}: color:{color}, size: {size},
      </Component>
    </div>
  );
};

export default Text;
