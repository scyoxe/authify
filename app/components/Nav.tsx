export default function Nav({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <nav>{children}</nav>;
}
