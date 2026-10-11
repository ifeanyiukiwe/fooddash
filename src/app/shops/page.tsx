import Link from "next/link";
import { isValidUkPostcode } from "@/lib/postcode";
import { shops } from "@/data/shops";
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
          Check it and try again for example NE61 1AA
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
      <ul className="grid gap-4 mt-6  sm:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <li
            key={shop.id}
            className={`rounded-xl border border-stone-200 bg-white p-5  ${shop.isOpen ? "" : "opacity-60"}`}
          >
            <p className="font-bold text-petrol">{shop.name}</p>
            <p>{shop.description}</p>
            <p
              className={`mt-2 text-sm font-bold ${shop.isOpen ? "text-sage" : "text-muted"}`}
            >
              <span aria-hidden="true">{shop.isOpen ? "● " : "○ "}</span>
              {shop.isOpen ? "Open" : "Closed"}
            </p>
            <p>{`${shop.deliveryMinMins} - ${shop.deliveryMaxMins} mins`}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
