import { useState } from "react";
import { useRouter } from "next/navigation";

const useLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (email === "admin@example.com" && password === "password123") {
            setError("");
            router.push("/dashboard/inicial");
        } else {
            setError("E-mail ou senha inválidos.");
        }
    };

    return { email, password, error, setEmail, setPassword, handleLogin };
};

export default useLogin;
