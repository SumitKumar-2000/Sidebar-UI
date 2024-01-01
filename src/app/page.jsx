import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <Link href="/sidebar1" className="text-blue-400 mr-2">
        Sidebar one
      </Link>
      <Link href="/sidebar2" className="text-blue-400">
        Sidebar two
      </Link>
    </main>
  );
}
