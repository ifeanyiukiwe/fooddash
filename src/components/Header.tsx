import Link from "next/link";
export default function Header() {
  return (
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
            <Link href="/shops" className="hover:underline">
              Shops
            </Link>
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
  );
}
