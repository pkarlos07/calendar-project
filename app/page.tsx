import Image from "next/image";
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
    <Header/>
    <div className="flex justify-center h-1/1 w-1/1 items-center gap-10">
      <Link href="./calendar" className="btn btn-primary w-1/3 h-1/4 rounded-3xl shadow-black shadow-2xl">
        <p className="text-3xl">Create New Calendar</p>
      </Link>
      <p>Or</p>
      <button className="btn btn-active btn-primary w-1/3 h-1/4 rounded-3xl flex-col gap-5 shadow-black shadow-2xl">
        <p className="text-3xl">Join Existing:</p>
        <input className="outline-1 text-2xl" placeholder="Join Code:"></input>
      </button>
    </div>
    </div>
  );
}
