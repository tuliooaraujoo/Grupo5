import styles from "./Inputs.module.css"

interface InputProps {
    id: string,
    placeholder: string
}

const Inputs = ({ id, placeholder }: InputProps) => {
    return (
        <div className={styles.input_form}>
            <label htmlFor={id}>{id}</label>
            <input type={id} placeholder={placeholder} />
        </div>
    )
}

export default Inputs;