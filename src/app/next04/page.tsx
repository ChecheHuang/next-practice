import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Next04',
};

export default function Home() {
  return (
    <main>
      <h1>Next04</h1>
      <p>
        <Link href="next04/users">Users</Link>
      </p>
    </main>
  );
}
