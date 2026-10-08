export default async function ShopsPage({
  searchParams,
}: {
  searchParams: Promise<{ postcode?: string }>;
}) {
  const { postcode } = await searchParams;
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
