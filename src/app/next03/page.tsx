import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next03",
};

export default function Home() {
  return (
    <main>
      <h1>Next03</h1>
      <p>
        <Link href="/next03/users">Users</Link>
      </p>
    </main>
  );
}
