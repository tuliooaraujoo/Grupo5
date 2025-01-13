import Image from "next/image";
import settings from "../../../public/images/illustrations/settings.svg";
import TextField from "../Inputs/TextField";
import Button from "../Button";
import { MdModeEdit } from "react-icons/md";

const AccountSettings = () => {

    const fields = [
        { id: "Nome", value: "Joana Oliveira" },
        { id: "E-mail", value: "joanaoliveira@exemplo.com" },
        { id: "Senha", value: "********", type: "Senha" },
    ];

    return (
        <div className="bg-background bg-cover rounded-lg flex flex-col p-12">
            <h2 className="text-2xl font-bold">Configurações de conta</h2>
            <div className="flex flex-col lg:flex-row-reverse gap-8 justify-end">
                <form className="w-full lg:w-2/3">
                    {fields.map((field) => (
                        <div key={field.id} className="relative">
                            <TextField
                                id={field.id}
                                value={field.value}
                                placeholder={`${field.id}`}
                            />
                            <MdModeEdit className="absolute right-5 top-14 transform -translate-y-1/2 text-gray-400"/>
                        </div>
                    ))}
                    <Button
                        text="Salvar alterações"
                        onClick={() => { }}
                        className="bg-orange text-white w-2/3 self-center"
                    />
                </form>
                <Image
                    src={settings}
                    alt="Ilustração de uma pessoa ao lado de um computador gigante"
                    width={333}
                    height={267}
                    className="self-center"
                />
            </div>
        </div>
    );
};

export default AccountSettings;