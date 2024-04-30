import { RegionFilter, Search } from './controls';

const ControlPanel = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between py-4">
      <Search />
      <RegionFilter />
    </div>
  );
};

export { ControlPanel };
