import type { Metadata } from "next";
import Link from "next/link";

// import getAllUsers from '../lib/getAllUsers';

export const metadata: Metadata = {
  title: "Users",
};

export async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) throw new Error("failed to fetch data");

  return res.json();
}
export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  // console.log('Hello') // Did you find where this appears?

  const content = (
    <section>
      <h2>
        <Link href="/next03/">Back to Next03</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );

  return content;
}
