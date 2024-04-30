import type { NativeName } from './nativeName';

export type Name = {
  common: string;
  official: string;
  nativeName: Record<string, NativeName>;
};
