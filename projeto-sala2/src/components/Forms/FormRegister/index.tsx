import Form from "..";
import styles from "./FormRegister.module.css";

const FormRegister = () => {
    const fields = [
        { id: "Nome", placeholder: "Digite seu nome completo" },
        { id: "Email", placeholder: "Digite seu email" },
        { id: "Senha", placeholder: "Digite sua senha" }
    ];

    return (
        <div className={styles.container_registrar}>
        <Form
            imageSrc="/images/ilustrations/register.svg"
            imageAlt="Ilustração de uma pessoa ao lado de um computador gigante"
            title="Preencha os campos abaixo para criar sua conta corrente"
            fields={fields}
            checkbox={{
                label: "Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
            }}
        />
        <button className={styles.cadastrar}>Abrir minha conta</button>
        </div>
    );
};

export default FormRegister;
