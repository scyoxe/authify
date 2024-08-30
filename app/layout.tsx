import './globals.css';
import localFont from 'next/font/local';

const suse = localFont({ src: './fonts/suse/suse.ttf' });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={suse.className}>{children}</body>
        </html>
    );
}
