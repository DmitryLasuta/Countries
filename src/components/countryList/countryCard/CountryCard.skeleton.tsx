const CountryCardSkeleton = () => {
  return (
    <div className="bg-white rounded dark:bg-dark-blue" aria-busy="true" aria-label="loading country profile">
      <div className="p-2">
        {/* flag Image */}
        <div className="w-full bg-slate-500 animate-pulse h-[200px]"></div>
        {/* country details */}
        <div className="px-4 py-2">
          <div className="w-full bg-slate-500 animate-pulse h-[20px] mb-2"></div>
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-2/3 bg-slate-500 animate-pulse h-[15px] mb-2"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { CountryCardSkeleton };
