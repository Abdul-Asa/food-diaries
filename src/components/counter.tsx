"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="my-4 inline-flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800">
      <span className="font-medium text-sm">Count: {count}</span>
      <button
        className="rounded bg-neutral-800 px-2 py-1 text-sm text-white hover:bg-neutral-700 dark:bg-neutral-200 dark:text-neutral-900 dark:hover:bg-neutral-300"
        onClick={() => setCount((c) => c + 1)}
        type="button"
      >
        +1
      </button>
    </div>
  );
}
