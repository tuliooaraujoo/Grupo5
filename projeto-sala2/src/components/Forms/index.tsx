import Image from "next/image";
import styles from "./Forms.module.css";
import Inputs from "../Inputs";

interface Field {
    id: string;
    placeholder: string;
}

interface CheckboxProps {
    label: string;
}

interface FormProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    fields: Field[];
    checkbox?: CheckboxProps;
}

const Form = ({ 
    imageSrc, 
    imageAlt, 
    title, 
    fields, 
    checkbox, 
}: FormProps) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
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
                    />
                ))}
                {checkbox && (
                    <div className={styles.form_checkbox}>
                        <input type="checkbox" />
                        <label>{checkbox.label}</label>
                    </div>
                )}
            </div>
        </form>
    );
};

export default Form;


