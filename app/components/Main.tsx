import styles from './styles/main.module.css';

export default function Main({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className={styles.main}>{children}</main>;
}
