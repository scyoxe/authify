import './globals.css';
import localFont from 'next/font/local';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Authify | Landing',
};

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
            <head>
                <link
                    rel='shortcut icon'
                    href='./favicon.ico'
                    type='image/x-icon'
                />
            </head>
            <body className={albertSans.className}>{children}</body>
        </html>
    );
}
