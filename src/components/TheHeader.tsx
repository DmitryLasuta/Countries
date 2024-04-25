import Link from 'next/link';

const TheHeader = () => {
  return (
    <header className="bg-white p-4 dark:bg-dark-blue dark:text-white shadow border border-b-dark-blue dark:border-none">
      <div className="container">
        <h2 className="text-xl sm:text-3xl font-bold capitalize">
          <Link href="/" aria-label="go to homepage">
            where in the world?
          </Link>
        </h2>
      </div>
    </header>
  );
};

export { TheHeader };
