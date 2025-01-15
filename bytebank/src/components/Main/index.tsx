"use client"

import Image from "next/image";
import ListOfAdvantages from "./ListOfAdvantages";
import ModalButtons from "../Modal/ModalButtons";
import ModalApplication from "../Modal/ModalApplication";
import banner from "../../../public/images/illustrations/banner.svg";

const Main = () => {

    return (
        <div className="max-w-[1920px] flex flex-col gap-4 bg-custom-gradient p-4">
            <div className="flex flex-col items-center justify-center gap-7 lg:grid lg:grid-cols-2 mx-auto max-w-[1171px]">
                <p className="text-3xl font-bold py-7 text-center lg:text-left">
                    Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
                </p>
                <Image
                    src={banner}
                    alt="Ilustração da página inicial"
                    width={660}
                />
            </div>

            <div className="sm:hidden flex items-center justify-center">
                <ModalButtons variant={"main"} />
            </div>
            <ListOfAdvantages />
            <ModalApplication />
        </div>
    )
}

export default Main;
