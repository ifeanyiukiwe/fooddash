import Link from "next/link";
import PostcodeSearch from "@/components/PostcodeSearch";
const steps = [
  { title: "Find local shops", text: "Search by your postcode" },
  { title: "Fill your basket", text: "Everyday essentials" },
  { title: "Delivery or collect", text: "Whatever suits you" },
];

export default function Home() {
  return (
    <>
      <header className="bg-petrol text-white">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4"
        >
          <Link href="/" className="text-xl font-bold">
            Foodash
          </Link>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:underline">
                Shops
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sign in
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Basket
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-5">
        <section className="py-16 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Your local corner shop, delivered
          </h1>
          <p className="mt-3 text-lg text-muted">
            Everyday essentials from independent shops near you
          </p>

          <PostcodeSearch />
        </section>

        <section aria-labelledby="how-it-works" className="pb-16">
          <h2 id="how-it-works" className="sr-only">
            How it works
          </h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.title}
                className="rounded-xl border border-stone-200 bg-white p-5 text-center"
              >
                <p className="font-bold text-petrol">{step.title}</p>
                <p className="mt-1 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
