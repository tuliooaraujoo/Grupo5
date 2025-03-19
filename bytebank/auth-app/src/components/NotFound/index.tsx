import Image from "next/image";
import Link from "next/link";
import image_404 from "../../../public/images/illustrations/404.svg"

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-7 bg-custom-gradient p-10">
            <h2 className="font-bold text-2xl">Ops! Não encontramos a página... </h2>
            <div className="flex flex-col items-center">
                <p>E olha que exploramos o universo procurando por ela!</p>
                <p>Que tal voltar e tentar novamente?</p>
            </div>
            <Link
                href="/"
                className="bg-orange rounded-lg text-white font-bold p-3.5"
            >
                Voltar ao início
            </Link>
            <Image
                src={image_404}
                alt="Imagem de erro 404"
                width={470}
                height={354}
            />
        </div>
    )
}

export default NotFound