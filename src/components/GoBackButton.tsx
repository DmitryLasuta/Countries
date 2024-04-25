'use client';

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="rounded bg-slate-700 hover:bg-slate-500 text-white font-bold py-2 px-4 transition-colors"
      type="button"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export { GoBackButton };
