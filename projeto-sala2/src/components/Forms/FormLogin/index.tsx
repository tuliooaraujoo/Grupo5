import { useFormLogin } from "@/hooks/useFormLogin";
import styles from "./FormLogin.module.css";
import Form from "..";
import Button from "@/components/Button";
import Image from "next/image";

const FormLogin = () => {
    const { formData, errors, handleChange, handleSubmit } = useFormLogin();

    const fields = [
        { id: "Email", placeholder: "Digite seu email" },
        { id: "Senha", placeholder: "Digite sua senha", type: "password" },
    ];

    return (
        <div className={styles.container_login}>
            <div className={styles.login_form}>
                <Image
                    src="/images/ilustrations/login.svg"
                    alt="Ilustração de uma pessoa ao lado de um celular gigante em uma tela de login"
                    width={330}
                    height={267}
                />
                <Form
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