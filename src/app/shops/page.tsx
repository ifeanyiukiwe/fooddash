import Link from "next/link";
import { isValidUkPostcode } from "@/lib/postcode";
export default async function ShopsPage({
  searchParams,
}: {
  searchParams: Promise<{ postcode?: string }>;
}) {
  const { postcode } = await searchParams;

  if (postcode && !isValidUkPostcode(postcode)) {
    return (
      <main className="mx-auto max-w-5xl px-5 pt-5">
        <h1 className="text-3xl font-bold  sm:text-4xl">
          We could not recognise the postcode
        </h1>
        <p className="mt-3 text-lg text-muted">
          Check it and try agian for example NE61 1AA
        </p>
        <Link
          href="/"
          className="mt-6 inline-block font-bold text-petrol underline hover:text-petrol-dark"
        >
          Try another postcode
        </Link>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-5xl px-5 pt-5">
      <h1 className="text-3xl font-bold  sm:text-4xl">
        {postcode
          ? `Shops near ${postcode.toLocaleUpperCase()}`
          : "Shops near you"}
      </h1>
    </main>
  );
}
