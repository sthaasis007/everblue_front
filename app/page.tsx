import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">EverBlue</h1>

      <div className="flex gap-4">
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>
        <Link href="/register" className="text-blue-600 underline">
          Register
        </Link>
      </div>
    </main>
  );
}
