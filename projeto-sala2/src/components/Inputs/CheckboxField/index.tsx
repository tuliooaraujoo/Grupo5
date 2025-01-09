import styles from "./CheckboxField.module.css";

interface CheckboxFieldProps {
    id: string;
    label: string;
    checked: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
}

const CheckboxField = ({ id, label, checked, onChange, error }: CheckboxFieldProps) => {
    return (
        <div className={styles.checkbox_field}>
            <div className={styles.form_checkbox}>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                />
                <label htmlFor={id}>{label}</label>
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
};

export default CheckboxField;