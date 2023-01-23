import Head from "next/head";
import Image from "next/image";
import ListJobs from "./components/listjobs";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="grid grid-cols-[1fr] bg-slate-400 h-screen w-screen bg-gradient-to-r from-cyan-200 via-cyan-100  to-orange-200 justify-">
      <NavBar />
      <ListJobs />
      <div className="bg-slate-600 opacity-5"></div>
    </div>
  );
}
