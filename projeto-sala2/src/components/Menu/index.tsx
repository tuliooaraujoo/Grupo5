import Link from "next/link";

const Menu = () => {
    const options = ['Inicial', 'Investimentos', 'Cartões', 'Serviços', 'Configurações'];

    const normalizeText = (text: string) => 
        text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    return (
        <div className="bg-lightgray rounded-lg p-4 max-lg:flex max-lg:flex-row max-lg:justify-center max-sm:hidden">
            {options.map((option) => (
                <div key={option}>
                    <Link 
                        href={`/dashboard/${normalizeText(option)}`} 
                        className="flex justify-center p-2 active:text-green active:font-bold active:scale-105"
                    >
                        {option}
                    </Link>
                    <div className="border-b border-darkgray mt-2 w-full max-lg:hidden" />
                </div>
            ))}
        </div>
    );
};

export default Menu;

