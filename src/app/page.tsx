import { CountryList, CountryListSkeleton } from '@/components';

import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="px-2 sm:px-4 lg:px-8">
      <h1 className="text-3xl font-bold mb-2 text-center">
        Hello world! There are a lot of different countries at the moment. <br />
        <span className="mb-2 text-xl">On this page you can see a list of countries.</span>
      </h1>
      <p className="mb-4 font-normal text-xl text-center">
        If you want to see more details about a country you can click on it.
      </p>
      <Suspense fallback={<CountryListSkeleton />}>
        <CountryList />
      </Suspense>
    </main>
  );
}
