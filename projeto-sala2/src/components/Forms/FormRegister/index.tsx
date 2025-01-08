import { useFormRegister } from "@/hooks/useFormRegister";
import styles from "./FormRegister.module.css";
import Form from "..";
import Button from "@/components/Button";

const FormRegister = () => {
    const { formData, errors, handleChange, handleSubmit } = useFormRegister();

    const fields = [
        { id: "Nome", placeholder: "Digite seu nome completo" },
        { id: "Email", placeholder: "Digite seu email" },
        { id: "Senha", placeholder: "Digite sua senha", type: "password" },
    ];

    return (
        <div className={styles.container_register}>
            <Form
                imageSrc="/images/ilustrations/register.svg"
                imageAlt="Ilustração de uma pessoa ao lado de um computador gigante"
                title="Preencha os campos abaixo para criar sua conta corrente"
                fields={fields}
                checkbox={{
                    label: "Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
                }}
                onChange={handleChange}
                formData={formData}
                errors={errors}
            />
            <Button
                className={styles.button_register}
                onClick={handleSubmit}
            >
                Abrir minha conta
            </Button>
        </div>
    );
};

export default FormRegister;
