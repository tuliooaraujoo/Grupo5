interface ButtonProps {
  color: string;
  backgroundColor?: string;
  border?: string;
  padding: string;
  width: string;
  children: React.ReactNode;
}

const Button = ({ width, backgroundColor, color, padding, border, children }: ButtonProps) => {

  return <button style={{
    width: width,
    height: "48px",
    backgroundColor: backgroundColor,
    padding: padding,
    color: color,
    border: border,
    borderRadius: "var(--space-small)",
    cursor: "pointer",
    fontSize: "var(--font-medium)",
    fontWeight: "var(--bold)"
  }}
  >
    {children}
  </button>;
};

export default Button;
