import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './styles/globals.css';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Github Manager',
  description: 'Manage your Github repositories with ease.',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
