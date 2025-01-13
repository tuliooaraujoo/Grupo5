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
        <div className="bg-lightgray rounded-lg p-6 flex flex-col items-start max-md:flex-row max-sm:hidden">
            {options.map((option) => (
                <div key={option} className="w-full justify-center">
                    <Button
                        text={option}
                        onClick={() => handleOptionClick(option)}
                        className={`text-left p-2 ${activeOption === option ? "font-bold text-green" : "text-black"
                            }`}
                    />
                        <div className="border-b border-darkgray mt-2 w-full max-md:hidden" />
                </div>
            ))}
        </div>
    );
};

export default Menu;
