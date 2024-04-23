import { Children } from 'react';

const Grid = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
      {Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  );
};

export { Grid };
