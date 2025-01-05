import { useState } from "react";
import { validateEmail, validatePassword } from "@/utils/validators";
import { checkEmailExists, saveUser } from "@/services/api";

export const useFormRegister = () => {
    const [formData, setFormData] = useState({
        Nome: "",
        Email: "",
        Senha: "",
        Aceito: false,
    });

    const [errors, setErrors] = useState({
        email: "",
        senha: "",
        aceito: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = async () => {
        const newErrors = { email: "", senha: "", aceito: "" };
        let isValid = true;

        if (!formData.Aceito) {
            newErrors.aceito = "Você deve aceitar os termos.";
            isValid = false;
        }

        if (!validateEmail(formData.Email)) {
            newErrors.email = "Formato de email inválido.";
            isValid = false;
        }

        const passwordError = validatePassword(formData.Senha);
        if (passwordError) {
            newErrors.senha = passwordError;
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (!(await validateForm())) return;

        const emailExists = await checkEmailExists(formData.Email);
        if (emailExists) {
            setErrors((prev) => ({ ...prev, email: "Este e-mail já está cadastrado." }));
            return;
        }

        try {
            await saveUser(formData);
            alert("Conta criada com sucesso!");
            setFormData({ Nome: "", Email: "", Senha: "", Aceito: false });
            setErrors({ email: "", senha: "", aceito: "" });
        } catch (error) {
            console.error(error);
            alert("Houve um problema ao salvar os dados.");
        }
    };

    return { formData, errors, handleChange, handleSubmit };
};
