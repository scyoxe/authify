import styles from './styles/nav-item.module.css';

interface navItem {
    name: string;
    link: string;
    style?: string;
}

export default function NavItem({ name, link, style }: navItem) {
    return (
        <a
            className={[style, styles.navitem].join(' ')}
            href={link}>
            {name}
        </a>
    );
}
