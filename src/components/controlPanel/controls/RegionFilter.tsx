'use client';

import { useEffect, useState } from 'react';

import { COUNTRY_LIST_SEARCH_PARAMS } from '@/constants';
import { useUpdateSearchParams } from '@/hooks';

const RegionFilter = () => {
  const { updateSearchParams, readOnlySearchParams } = useUpdateSearchParams();

  const [selectedRegion, setSelectedRegion] = useState(
    readOnlySearchParams.get(COUNTRY_LIST_SEARCH_PARAMS.REGION) ?? 'all'
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      updateSearchParams({ key: COUNTRY_LIST_SEARCH_PARAMS.REGION, value: selectedRegion });
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [selectedRegion, updateSearchParams]);

  const handleChange = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(target.value);
  };

  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  return (
    <select
      className="bg-very-light-gray border border-very-dark-blue dark:border-none dark:bg-dark-blue text-dark-blue dark:text-white p-2 rounded"
      value={selectedRegion}
      onChange={handleChange}
    >
      <option value="all">Filter by Region</option>
      {regions.map(region => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
};

export { RegionFilter };
