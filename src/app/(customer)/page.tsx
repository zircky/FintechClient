import Image from "next/image";
import Home from '@/app/(customer)/Home'
import type { Metadata } from 'next'
import { PUBLIC_PAGE } from '@/config/public-page.config'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Crypto Service',
  alternates: {
    canonical: PUBLIC_PAGE.HOME
  },
  openGraph: {
    type: 'website',
    url: PUBLIC_PAGE.HOME,
    title: 'Home'
  }
}
export default function HomePage() {
  return (
    <Home/>
  );
}
