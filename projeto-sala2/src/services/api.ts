export interface UserData {
    Nome: string;
    Email: string;
    Senha: string;
    Aceito: boolean;
}

const API_URL = "http://localhost:3001/users";

export const saveUser = async (data: UserData): Promise<void> => {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Erro ao enviar os dados para o servidor.");
    }
};

export const checkEmailExists = async (email: string): Promise<UserData[] | null> => {
    const response = await fetch(`${API_URL}?Email=${email}`);
    if (!response.ok) {
        throw new Error("Erro ao buscar os dados.");
    }
    const users = await response.json();
    return users.length > 0 ? users : null;
};



