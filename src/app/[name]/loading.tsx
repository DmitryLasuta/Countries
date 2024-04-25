export default function LoadingCountryPage() {
  const skeletonRows = {
    firstRow: 5,
    secondRow: 3,
  };
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 mx-auto max-w-7xl mt-10" aria-busy="true">
      {/* flag Image */}
      <div className="bg-slate-400 animate-pulse w-[250px] mx-auto h-[150px] sm:w-[350px] sm:h-[200px] md:w-[450px] md:h-[250px] border dark:border-transparent border-very-dark-blue"></div>
      {/* country details */}
      <div>
        {/* country name */}
        <div className="w-[65%] bg-slate-400 animate-pulse h-[25px] my-4 rounded mx-auto lg:mx-0"></div>
        {/* Country overview */}
        <div className="flex flex-col sm:flex-row sm:gap-10 mb-">
          {Object.entries(skeletonRows).map(([row, itemsInRow]) => (
            <ul key={row}>
              {Array.from({ length: itemsInRow }).map((_, index) => (
                <li key={index} className="w-[200px] rounded bg-slate-400 animate-pulse h-[18px] mb-2"></li>
              ))}
            </ul>
          ))}
        </div>
        {/* Border Countries */}
        <div className="flex mt-4 items-center gap-2">
          <div className="w-[150px] bg-slate-400 animate-pulse h-[25px] rounded"></div>
          {/* borders */}
          <ul className="flex gap-2 flex-wrap">
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className="w-[80px] bg-slate-400 animate-pulse h-[30px] rounded"></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
