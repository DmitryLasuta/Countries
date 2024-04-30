'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useCallback } from 'react';

const useUpdateSearchParams = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const updateSearchParams = useCallback(
    ({ key, value }: { key: string; value: string }) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set(key, value);
      replace(`${pathname}?${newParams.toString()}`);
    },
    [pathname, replace, searchParams]
  );

  return {
    updateSearchParams,
    readOnlySearchParams: searchParams,
  };
};

export { useUpdateSearchParams };
