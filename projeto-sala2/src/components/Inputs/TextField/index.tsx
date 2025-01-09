import styles from "./TextField.module.css";

interface InputProps {
    id: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const TextField = ({ id, placeholder, value, onChange, error }: InputProps) => {
    const inputClass = error ? styles.error : styles.success;

    return (
        <div className={styles.input_form}>
            <label htmlFor={id}>{id}</label>
            <input
                id={id}
                type={id === "Senha" ? "password" : "text"}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={inputClass}
            />
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default TextField;



