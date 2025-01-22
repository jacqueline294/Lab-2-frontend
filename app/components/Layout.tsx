
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 p-4 text-white">
        <ul className="flex gap-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><Link href="/shopping-list">Shopping List</Link></li>
        </ul>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
