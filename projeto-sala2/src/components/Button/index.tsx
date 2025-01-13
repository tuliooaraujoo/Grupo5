import React from "react";

export interface ButtonProps {
    text:string | React.ReactNode;
    onClick: () => void;
    className?: string;
}

const Button = ({ className, onClick, text }: ButtonProps) => {
    return(
        <button
            onClick={onClick}
            className={`${className} h-12 rounded-lg cursor-pointer font-semibold text-base hover:scale-105`}
        >
            {text}
        </button>
    )
}

export default Button