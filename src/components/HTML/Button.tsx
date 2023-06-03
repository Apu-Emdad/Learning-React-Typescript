type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
} & React.ComponentProps<"button">; //& Omit<React.ComponentProps<'button'>, 'children'> ommits the children property from ButtonProps

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
