import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Dave's Blog",
  description: "Created by Dave Gray",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-slate-800 min-h-screen">
      <Navbar />
      <MyProfilePic />
      {children}
    </div>
  );
}
