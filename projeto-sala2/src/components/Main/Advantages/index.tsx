import Image from 'next/image';
import styles from './Advantages.module.css';

interface AdvantagesProps {
    image: string,
    paragraph: string,
    text: string,
    className:string
}

const Advantages = ({ image, text, paragraph }: AdvantagesProps) => {
    return (
        <div className={styles.advantages}>
            <Image
                src={`/images/advantages/${image}.svg`}
                alt={`Vantagem:${text}`}
                width={73}
                height={56} />
            <h4>{text}</h4>
            <p>{paragraph}</p>
        </div>
    )
}

export default Advantages;