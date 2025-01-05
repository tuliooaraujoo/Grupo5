import { useFormLogin } from "@/hooks/useFormLogin";
import styles from "./FormLogin.module.css";
import Form from "..";

const FormLogin = () => {
    const { formData, errors, handleChange, handleSubmit } = useFormLogin();

    const fields = [
        { id: "Email", placeholder: "Digite seu email" },
        { id: "Senha", placeholder: "Digite sua senha" },
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
                <a href="#" className={styles.esqueci}>Esqueci minha senha!</a>
            </div>
            <button className={styles.acessar} onClick={handleSubmit}>
                Acessar
            </button>
        </div>
    );
};

export default FormLogin;
