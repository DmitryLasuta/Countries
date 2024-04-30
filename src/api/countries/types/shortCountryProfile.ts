import type { Flags, Name, Region } from './fields';

export interface ShortCountryProfile {
  flags: Flags;
  name: Name;
  capital: string[];
  region: Region;
  population: number;
}
