'use client';

import { useEffect, useState } from 'react';

import { COUNTRY_LIST_SEARCH_PARAMS } from '@/constants';
import { useUpdateSearchParams } from '@/hooks';

const Search = () => {
  const { updateSearchParams, readOnlySearchParams } = useUpdateSearchParams();
  const [searchTerm, setSearchTerm] = useState(readOnlySearchParams.get(COUNTRY_LIST_SEARCH_PARAMS.SEARCH_QUERY) ?? '');

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };
  useEffect(() => {
    const handler = setTimeout(() => {
      updateSearchParams({ key: COUNTRY_LIST_SEARCH_PARAMS.SEARCH_QUERY, value: searchTerm });
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm, updateSearchParams]);

  return (
    <input
      className="text-very-dark-black-blue dark:text-white bg-very-light-gray dark:bg-dark-blue border border-very-dark-blue dark:border-none p-2 rounded"
      type="text"
      placeholder="Search for a country..."
      role="search"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export { Search };
