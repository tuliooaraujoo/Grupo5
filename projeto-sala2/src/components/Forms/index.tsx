import Image from "next/image";
import styles from "./Forms.module.css";
import Inputs from "../Inputs";

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
                    <Inputs
                        key={field.id}
                        id={field.id}
                        placeholder={field.placeholder}
                        value={formData[field.id] as string}
                        onChange={onChange}
                        error={errors[field.id.toLowerCase()]}
                    />
                ))}
                {checkbox && (
                    <div className={styles.form_checkbox}>
                        <input
                            id="Aceito"
                            type="checkbox"
                            checked={formData.Aceito as boolean}
                            onChange={onChange}
                        />
                        <label htmlFor="Aceito">{checkbox.label}</label>
                        {errors.aceito && <span className={styles.error}>{errors.aceito}</span>}
                    </div>
                )}
            </div>
        </form>
    );
};

export default Form;
