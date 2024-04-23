import './globals.css';

import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { TheHeader } from '@/components';

const nunitoSans = Nunito_Sans({ subsets: ['latin'], weight: ['300', '600', '800'] });

export const metadata: Metadata = {
  title: 'Countries',
  description:
    'Overview of the list of countries, each with its unique geography, history and cultural aspects. Learn the names of the countries and their capitals. Whether you are an experienced traveller or just beginning your journey',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <TheHeader />
        <div className="min-h-screen p-4 text-very-dark-black-blue dark:text-white bg-very-light-gray dark:bg-very-dark-blue">
          {children}
        </div>
      </body>
    </html>
  );
}
