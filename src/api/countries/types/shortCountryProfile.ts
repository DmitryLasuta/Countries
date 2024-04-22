import type { Flags, Name, Region } from './fields';

export type ShortCountryProfile = {
  flags: Flags;
  name: Name;
  capital: string[];
  region: Region;
  population: number;
};
