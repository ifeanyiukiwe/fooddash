import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-charcoal text-white text-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 flex-col gap-3 sm:flex-row">
        <p>© 2026 Foodash</p>
        <ul className="flex gap-6">
          <li>
            <Link href="#" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Help
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Accessibility
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
