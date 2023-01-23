import JobItem from "./jobitem";

function ListJobs() {
  return (
    <>
      <div className="grid md:grid-cols-1 sm:grid-rows-1 scrollbar-thin scrollbar-corner-rounded-xl scrollbar-thumb-slate-400 sticky md:left-24 mb-10  mt-32 bg-white   md:w-1/6 sm:w-screen sm:mx-3  overflow-x-clip overflow-y-auto rounded-lg px-2 py-3 ">
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
        <JobItem />
      </div>
    </>
  );
}

export default ListJobs;
