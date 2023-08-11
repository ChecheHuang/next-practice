import Link from "next/link";

import getFormattedDate from "../lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90">
      <Link
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`next06/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="mt-1 text-sm">{formattedDate}</p>
    </li>
  );
}
