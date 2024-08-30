import Image from 'next/image';
import styles from './styles/brand.module.css';

export default function Brand() {
    return (
        <div className={styles.brand}>
            <Image
                src={'./images/authify-logo.svg'}
                alt='Authify Logo'
                width={50}
                height={50}
            />
            <p>Authify</p>
        </div>
    );
}
