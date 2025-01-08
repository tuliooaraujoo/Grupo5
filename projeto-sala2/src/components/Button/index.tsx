import styles from "./Button.module.css"

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void
  className?: string
}

const Button = ({className, children, onClick }: ButtonProps) => {

  return <button 
    onClick={onClick}
    className= {`${className} ${styles.button}`}
  >
    {children}
  </button>;
};

export default Button;
