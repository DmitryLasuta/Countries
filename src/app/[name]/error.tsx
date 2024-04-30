'use client';

export default function ErrorPage() {
  return (
    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-xl sm:text-3xl font-bold mb-4">
        Something went wrong.
        <br /> We could not find that country.
      </h1>
      <p className="text-lg sm:text-xl">Please try again or go back to the homepage.</p>
    </div>
  );
}
