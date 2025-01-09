import styles from "./Forms.module.css";
import CheckboxField from "../Inputs/CheckboxField";
import TextField from "../Inputs/TextField";

export interface FormProps {
    title?: string;
    fields: {
        id: string;
        placeholder: string;
        type?: string;
    }[];
    checkbox?: {
        label: string;
    };
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        [key: string]: string | boolean;
    };
    errors: {
        [key: string]: string;
    };
}

const Form = ({
    title,
    fields,
    checkbox,
    onChange,
    formData,
    errors,
}: FormProps) => {
    return (
        <form className={styles.form}>
            <h4 className={styles.form_title}>{title}</h4>
            <div className={styles.form_fields}>
                {fields.map((field) => (
                    <TextField
                        key={field.id}
                        id={field.id}
                        placeholder={field.placeholder}
                        value={formData[field.id] as string}
                        onChange={onChange}
                        error={errors[field.id.toLowerCase()]}
                    />
                ))}
                {checkbox && (
                    <CheckboxField
                        id="Aceito"
                        label={checkbox.label}
                        checked={formData.Aceito as boolean}
                        onChange={onChange}
                        error={errors.aceito}
                    />
                )}
            </div>
        </form>
    );
};

export default Form;