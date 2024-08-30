import Image from 'next/image';

export default function Brand() {
    return (
        <div>
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
