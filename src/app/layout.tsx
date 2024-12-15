import type { Metadata } from "next";
import "./globals.scss";
import { SUSE } from 'next/font/google'
import Sidebar from '@/components/layout/sidebar/Sidebar'
import { Layout } from '@/components/layout/Layout'
import { Providers } from '@/providers/Providers'
import favicon from './../assets/img/favicon.ico'

const inter = SUSE({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    absolute: 'FinTech',
    template: '%s | FinTech'
  },
  description: 'FinTech is a global community dedicated to promoting innovation, collaboration, and sustainability in the financial sector.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
