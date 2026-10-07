"use client";

import { useState } from "react";

export default function PostcodeSearch() {
  // TODO 1: create a state variable called postcode, starting as an empty string ""
  const [postcode, setPostcode] = useState("");

  return (
    // TODO 2: paste your <form> from page.tsx here (the form, label, input and button)
    <form
      role="search"
      className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
    >
      <label htmlFor="postcode" className="sr-only">
        Enter your postcode
      </label>
      <input
        id="postcode"
        name="postcode"
        type="text"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
        autoComplete="postal-code"
        placeholder="Enter your postcode, e.g. NE61 1AA"
        className="min-h-12 flex-1 rounded-lg border border-gray-300 bg-white px-4 text-base"
      />
      <button
        type="submit"
        className="min-h-12 rounded-lg bg-honey px-6 font-bold text-charcoal hover:bg-honey-dark"
      >
        Find shops
      </button>
    </form>
  );
}
