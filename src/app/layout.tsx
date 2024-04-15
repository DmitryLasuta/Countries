import './globals.css';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Countries',
  description:
    'Overview of the list of countries, each with its unique geography, history and cultural aspects. Learn the names of the countries and their capitals. Whether you are an experienced traveller or just beginning your journey',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
