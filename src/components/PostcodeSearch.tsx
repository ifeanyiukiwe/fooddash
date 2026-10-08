"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { isValidUkPostcode } from "@/lib/postcode";

export default function PostcodeSearch() {
  const [postcode, setPostcode] = useState("");
  const [postError, setPostError] = useState("");
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isValidUkPostcode(postcode)) {
      setPostError("Enter a real UK postcode, like NE61 1AA");
      return;
    }
    setPostError("");
    router.push(`/shops?postcode=${encodeURIComponent(postcode.trim())}`);
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        role="search"
        action="/shops"
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
          aria-invalid={postError !== ""}
          aria-describedby={postError ? "postcode-error" : undefined}
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
      {postError && (
        <p
          id="postcode-error"
          role="alert"
          className="mx-auto mt-2 max-w-xl text-left font-bold text-brick"
        >
          {postError}
        </p>
      )}
    </>
  );
}
