'use client';

import { useRouter } from 'next/navigation';

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className="rounded bg-slate-400 hover:bg-slate-600 text-dark-blue hover:text-white dark:bg-slate-700 dark:hover:bg-slate-500 dark:text-white font-bold py-2 px-4 transition-colors"
      type="button"
      onClick={() => router.back()}
    >
      Go Back
    </button>
  );
};

export { GoBackButton };
