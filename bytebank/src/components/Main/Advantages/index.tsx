import Image from 'next/image';
import React from 'react';

interface AdvantagesProps {
    image: string,
    paragraph: string,
    text: string,
    className: string
}

const Advantages = ({ image, text, paragraph }: AdvantagesProps) => {
    return (
        <div className="w-72 flex flex-col items-center gap-4">
            <Image
                src={`/images/icons/${image}.svg`}
                alt={`Vantagem:${text}`}
                width={73}
                height={56}
            />
            <h4 className="text-5 font-bold text-green">{text}</h4>
            <p>{paragraph}</p>
        </div>
    )
}

export default Advantages;