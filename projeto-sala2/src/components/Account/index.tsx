import Balance from "./Balance";
import Image from "next/image";
import balance from "../../../public/images/illustrations/balance.svg";

const Account = ({ saldo }: { saldo: number }) => {

    const today = new Date();
    let formattedDate = today.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });
    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return (
        <div className=" grid grid-cols-2 grid-rows-2 bg-backgroundBlue bg-cover bg-no-repeat rounded-lg p-8 max-sm:gap-2 max-sm:flex max-sm:flex-col max-sm:items-center text-white">
            <div className="col-start-1 row-start-1">
                <h1 className="font-semibold text-2xl mb-6">Olá, Joana :)!</h1>
                <span className="text-xs">{formattedDate}</span>
            </div>
            <div className="col-start-2 row-start-1 mt-24">
                <Balance saldo={saldo} />
            </div>
            <Image
                src={balance}
                alt="Ilustração de uma pessoa segurando um cartão gigante"
                className="col-start-1 row-start-2 lg:hidden max-sm:w-96 max-sm:mt-8"
            />
        </div>
    );
};

export default Account;
