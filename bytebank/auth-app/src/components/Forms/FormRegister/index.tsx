import Image from "next/image"
import login from "../../../../public/images/illustrations/register.svg"
import TextField from "@/components/Inputs/TextField"
import Button from "@/components/Button"
import CheckboxField from "@/components/Inputs/CheckboxField"

const FormRegister = () => {

    const fields = [
        { id: "Nome", placeholder: "Digite seu nome completo" },
        { id: "E-mail", placeholder: "Digite o e-mail cadastrado" },
        { id: "Senha", placeholder: "Digite sua senha", type: "Senha" },
    ]

    return (
        <form className="flex flex-col w-3/4">
            <Image
                src={login}
                alt="Ilustração de uma pessoa ao lado de um computador gigante"
                width={333}
                height={267}
                className="self-center"
            />
            <h4 className="text-xl font-bold self-center my-8">Preencha os campos abaixo para criar sua conta corrente</h4>
            {fields.map((field) => (
                <TextField
                    key={field.id}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="border-green focus:outline-green"
                />
            ))}
            <CheckboxField
                id="terms"
                label="Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
                checked
                />
            <Button text="Criar conta" className="bg-orange text-white w-36 self-center" onClick={() => {}} />
        </form>
    )
}

export default FormRegister
