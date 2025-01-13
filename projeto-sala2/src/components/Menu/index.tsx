import React, { useState } from "react";
import Button from "../Button";

interface MenuProps {
    setActiveComponent: (component: string) => void;
}

const Menu = ({ setActiveComponent }: MenuProps) => {
    const [activeOption, setActiveOption] = useState<string>("");

    const options = ['Inicial', 'Investimentos', 'Cartões', 'Serviços', 'Configurações'];

    const handleOptionClick = (option: string) => {
        setActiveOption(option);
        setActiveComponent(option);
    };

    return (
        <div className="bg-lightgray rounded-lg p-6 flex flex-col items-start w-full">
            {options.map((option) => (
                <div key={option} className="w-full">
                    <Button
                        text={option}
                        onClick={() => handleOptionClick(option)}
                        className={`w-full text-left p-2 ${activeOption === option ? "font-bold text-green" : "text-black"
                            }`}
                    />
                        <div className="border-b border-darkgray mt-2 w-full" />
                </div>
            ))}
        </div>
    );
};

export default Menu;
