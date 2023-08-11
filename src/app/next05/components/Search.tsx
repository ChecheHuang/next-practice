"use client";

import { useRouter } from "next/navigation";
import type { FC, FormEvent } from "react";
import { useState } from "react";

const Search: FC = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`http://localhost:3000/next05/${search}`);
  };

  return (
    <form
      className=" flex justify-center md:justify-between"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 rounded-xl bg-white p-2 text-xl"
        placeholder="Search"
      />
      <button
        type="submit"
        className="ml-2 rounded-xl bg-slate-300 p-2 text-xl font-bold"
      >
        🚀
      </button>
    </form>
  );
};

export default Search;
