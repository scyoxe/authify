export default function Header({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <header>{children}</header>;
}
