interface TextFieldProps {
    id: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    className?: string
}

const TextField = ({ id, className, placeholder, value, onChange, error }: TextFieldProps) => {
    return (
        <div className="flex flex-col">
            <label className="mb-2 font-bold" htmlFor={id}>{id}</label>
            <input
                type={id === "Senha" ? "password" : "text"}
                id={id}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${className} border text-base rounded-lg p-3.5 mb-2 placeholder:text-placeholder placeholder:text-base focus:outline-green ${
                    error ? "border-error" : "border-gray"
                }`}
            />
            {error && <span className="text-error text-sm ">{error}</span>}
        </div>
    )
}

export default TextField