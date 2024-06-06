"use client";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import Checkbox from "./checkbox";

export default function FilterComponent() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex w-full max-w-3xl flex-col bg-pale font-semibold sm:flex-row">
      <div className="relative flex flex-grow items-center border-0 text-xs sm:text-sm md:border-x">
        <div
          className={cn(
            "pointer-events-none absolute left-0",
            "flex items-center gap-1",
            "transition-all duration-500",
            isFocused || inputValue
              ? "left-2 mr-2"
              : "left-1/2 -translate-x-1/2",
          )}
        >
          <Search />
          <span
            className={cn(
              "text-sm transition-opacity",
              isFocused || inputValue ? "opacity-0" : "opacity-100",
            )}
          >
            Search
          </span>
        </div>
        <input
          className={cn(
            "flex w-full items-center bg-pale px-6 py-2 pl-10",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main",
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="flex border-t text-xs sm:border-0 sm:text-sm">
        <div className="flex w-full items-center justify-center px-4 sm:border-l md:border-0">
          <Checkbox id="review">
            <Checkbox.Indicator />
            <Checkbox.Label>Reviewed</Checkbox.Label>
          </Checkbox>
        </div>

        <div className="flex w-full items-center gap-2 border-l px-4 md:border-x">
          <label htmlFor="sort" className="min-w-16">
            Sort by:
          </label>
          <select
            defaultValue="alpha"
            className="flex w-full py-2 focus-visible:outline-main sm:w-fit"
          >
            <option value="alpha">A-Z</option>
            <option value="date">Date reviewed</option>
            <option value="name">Near me</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option className="border-0" value="-alpha">
              Z-A?
            </option>
          </select>
        </div>
      </div>
    </div>
  );
}
