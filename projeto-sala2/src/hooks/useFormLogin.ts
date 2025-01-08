"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail } from "@/utils/validators";
import { checkEmailExists } from "@/services/api";

export const useFormLogin = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Senha: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    senha: "",
  });

  const router = useRouter(); // Inicializando o hook useRouter

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const newErrors = { email: "", senha: "" };
    let isValid = true;

    if (!formData.Email) {
      newErrors.email = "O email é obrigatório.";
      isValid = false;
    } else if (!validateEmail(formData.Email)) {
      newErrors.email = "Formato de email inválido.";
      isValid = false;
    }

    if (!formData.Senha) {
      newErrors.senha = "A senha é obrigatória.";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    const users = await checkEmailExists(formData.Email);
    if (!users || users[0]?.Senha !== formData.Senha) {
      setErrors({
        email: !users ? "O email não foi encontrado." : "",
        senha:
          users && users[0]?.Senha !== formData.Senha ? "Senha incorreta." : "",
      });
      return;
    }

    alert(`Bem-vindo, ${users[0]?.Nome}!`);
    router.push("/dashboard");
  };

  return { formData, errors, handleChange, handleSubmit };
};
