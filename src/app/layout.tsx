import { Metadata } from 'next';
import { Montserrat } from 'next/font/google'; // Importando a fonte Montserrat do Google Fonts

import './globals.css';
import ContactForm from './components/contact-form';
import { Header } from './components/header';

// Usando a fonte Montserrat do Google Fonts
const montserrat = Montserrat({
  // Substitua 'Montserrat' pela fonte desejada
  weight: ['100', '400', '700'], // Adapte conforme necessário os pesos
  subsets: ['latin'], // Adapte o subconjunto da fonte
});

export const metadata: Metadata = {
  title: 'LandingPage',
  description: 'A modern langing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <ContactForm />
      </body>
    </html>
  );
}
