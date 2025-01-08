interface ButtonProps {
  color: string;
  backgroundColor?: string;
  border?: string;
  width: string;
  children: React.ReactNode;
  onClick?: () => void
}

const Button = ({ width, backgroundColor, color, border, children, onClick }: ButtonProps) => {

  return <button style={{
    width: width,
    height: "48px",
    backgroundColor: backgroundColor,
    color: color,
    border: border,
    borderRadius: "var(--space-small)",
    cursor: "pointer",
    fontSize: "var(--font-medium)",
    fontWeight: "var(--bold)"
  }}
    onClick={onClick}
  >
    {children}
  </button>;
};

export default Button;
