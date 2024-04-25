import { GoBackButton } from '@/components';

export default function CountryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <GoBackButton />
      {children}
    </>
  );
}
