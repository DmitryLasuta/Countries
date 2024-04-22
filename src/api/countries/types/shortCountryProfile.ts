import type { Flags, Name, Region } from './fields';

export type ShortCountryData = {
  flags: Flags;
  name: Name;
  capital: string[];
  region: Region;
  population: number;
};
