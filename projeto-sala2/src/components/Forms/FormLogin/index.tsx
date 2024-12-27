import Form from "..";
import styles from "./FormLogin.module.css";

const FormLogin = () => {
    const fields = [
        { id: "Email", placeholder: "Digite seu email" },
        { id: "Senha", placeholder: "Digite sua senha" }
    ];

    return (
        <div className={styles.container_login}>
            <div className={styles.login_form}>
                <Form
                    imageSrc="/images/ilustrations/login.svg"
                    imageAlt="Ilustração de uma pessoa ao lado de um celular gigante em uma tela de login"
                    title="Login"
                    fields={fields}
                />
                <a href="#" className={styles.esqueci}>Esqueci minha senha!</a>
            </div>
            <button className={styles.acessar}>Acessar</button>
        </div>
    );
};

export default FormLogin;

