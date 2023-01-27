import JobItem from "./jobitem";

function ListJobs() {
  return (
    <>
      <div className=" flex fixed md:relative mb-10 md:mt-20  md:flex-col flex-1  space-x-2 md:space-x-0  scrollbar-thin scrollbar-corner-rounded-xl  scrollbar-thumb-slate-400 mt-4 mx-4  md:ml-28  bg-white  overflow-x-clip overflow-y-auto rounded-lg right-3 left-3">
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
