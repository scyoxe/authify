import styles from './styles/nav.module.css';

export default function Nav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <nav className={styles.nav}>{children}</nav>;
}
