import Navbar from './components/Navbar';

export const metadata = {
  title: 'Next05',
  description: 'Next05',
};
type Props = {
  children: React.ReactNode;
};

export default function Next05Layout({ children }: Props) {
  return (
    <div className="min-h-screen w-screen  bg-slate-800">
      <Navbar />
      {children}
    </div>
  );
}
