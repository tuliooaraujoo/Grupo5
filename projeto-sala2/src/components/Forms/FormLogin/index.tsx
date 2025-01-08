import { useFormLogin } from "@/hooks/useFormLogin";
import styles from "./FormLogin.module.css";
import Form from "..";
import Button from "@/components/Button";

const FormLogin = () => {
    const { formData, errors, handleChange, handleSubmit } = useFormLogin();

    const fields = [
        { id: "Email", placeholder: "Digite seu email" },
        { id: "Senha", placeholder: "Digite sua senha", type: "password" },
    ];

    return (
        <div className={styles.container_login}>
            <div className={styles.login_form}>
                <Form
                    imageSrc="/images/ilustrations/login.svg"
                    imageAlt="Ilustração de uma pessoa ao lado de um celular gigante em uma tela de login"
                    title="Login"
                    fields={fields}
                    onChange={handleChange}
                    formData={formData}
                    errors={errors}
                />
                <a href="#" className={styles.forget}>Esqueci minha senha!</a>
            </div>
            <Button
                className={styles.button_login}
                onClick={handleSubmit}
            >
                Acessar
            </Button>
        </div>
    );
};

export default FormLogin;