import Balance from "./Balance";
import Image from "next/image";
import balance from "../../../public/images/illustrations/balance.svg";

interface AccountProps {
    saldo: number;
}

const Account = ({ saldo }: AccountProps) => {

    const today = new Date();
    let formattedDate = today.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return (
        <div className="max-h-[402px] max-sm:max-h-[800px] grid grid-cols-6 grid-rows-6 bg-backgroundBlue bg-cover rounded-lg p-8 max-sm:gap-2 max-sm:flex max-sm:flex-col max-sm:items-center text-white max-sm:gap-8">
            <div className="col-start-1 col-end-3">
                <h1 className="font-semibold text-2xl mb-6">Olá, Joana :)!</h1>
                <span className="text-xs">{formattedDate}</span>
            </div>
            <div className="col-start-4 col-end-7 row-start-3 row-end-6">
                <Balance saldo={saldo} />
            </div>
            <div className="col-start-1 col-end-5 row-start-3 row-end-6">
                <Image
                    src={balance}
                    alt="Ilustração de uma pessoa segurando um cartão gigante"
                    className="col-start-1 lg:hidden"
                />
            </div>
        </div>
    );
};

export default Account;
