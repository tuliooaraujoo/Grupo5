"use client";

import Image from "next/image";
import styles from "./AccountSettings.module.css";
import ilustration_settings from "./settings.svg";
import Button from "../Button";
import Form from "../Forms";
import { useFormRegister } from "@/hooks/useFormRegister";

const AccountSettings = () => {
  const { formData, errors, handleChange, handleSubmit } = useFormRegister();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Configurações da Conta</h2>
      <div className={styles.content}>
        <Image
          src={ilustration_settings}
          alt="Ilustração de uma pessoa segurando um botão gigante de toggle para ligar ou desligar uma funcionalidade"
          width={446}
          height={381}
        />
        <div className={styles.form}>
          <Form
            fields={[
              { id: "Nome", placeholder: "Digite seu nome completo" },
              { id: "Email", placeholder: "Digite seu email" },
              { id: "Senha", placeholder: "Digite sua senha", type: "password" },
            ]}
            formData={formData}
            errors={errors}
            onChange={handleChange}
          />
          <Button
            className={styles.button_settings}
            onClick={handleSubmit}
          >
            Salvar Configurações
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
