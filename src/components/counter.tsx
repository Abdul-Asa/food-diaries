"use client";

import { useState } from "react";
import { Button } from "@/components/retroui/button";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="my-4 inline-flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-neutral-700 dark:bg-neutral-800">
      <span className="font-medium text-sm">Count: {count}</span>
      <Button
        onClick={() => setCount((c) => c + 1)}
        type="button"
        variant="default"
      >
        +1
      </Button>
    </div>
  );
}
