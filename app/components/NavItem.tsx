interface navItem {
    name: string;
    link: string;
    style?: string;
}

export default function NavItem({ name, link, style }: navItem) {
    return (
        <a
            className={style}
            href={link}>
            {name}
        </a>
    );
}
