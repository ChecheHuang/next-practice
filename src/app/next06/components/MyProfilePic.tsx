import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className="mx-auto w-full">
      <Image
        className="mx-auto mt-8 rounded-full border-4 border-black shadow-black drop-shadow-xl dark:border-slate-500"
        src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600"
        width={200}
        height={200}
        alt="Dave Gray"
        priority
      />
    </section>
  );
}
