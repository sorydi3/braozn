import Head from "next/head";
import Image from "next/image";
import Jobdetail from "./components/jobdetail";
import ListJobs from "./components/listjobs";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row  bg-slate-400 h-screen w-screen bg-gradient-to-r from-cyan-200 via-cyan-100  to-orange-200">
      <ListJobs />
      <Jobdetail></Jobdetail>
    </div>
  );
}
