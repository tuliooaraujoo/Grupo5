import Image from "next/image";
import styles from "./Forms.module.css";
import CheckboxField from "../Inputs/CheckboxField";
import TextField from "../Inputs/TextField";

export interface FormProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
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
    imageSrc,
    imageAlt,
    title,
    fields,
    checkbox,
    onChange,
    formData,
    errors,
}: FormProps) => {
    return (
        <form className={styles.form}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={330}
                height={267}
            />
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