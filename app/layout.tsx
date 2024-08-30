import './globals.css';
import localFont from 'next/font/local';

const albertSans = localFont({
    src: './fonts/albert-sans/albert-sans-regular.ttf',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={albertSans.className}>{children}</body>
        </html>
    );
}
