import JobItem from "./components/jobitem";
import { useState } from "react";
import AccordeonItem from "./components/accordeonitem";
import Jobdetail from "./components/jobdetail";

function Jobs() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-200 h-screen w-screen">
      <section className="flex justify-center items-center rounded-lg">
        <h1 className="text-gray-800 font-extrabold text-center text-4xl ">
          List of jobs
        </h1>
        <AccordeonItem
          title="Job 1"
          open={open}
          toggle={setOpen}
          children={<Jobdetail></Jobdetail>}
        />
      </section>
    </div>
  );
}

export default Jobs;
