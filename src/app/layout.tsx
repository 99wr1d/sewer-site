import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Leysan.ya',
  description: 'Полотенца и халаты с вышивкой на заказ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
