import { Accordion, VStack } from "@chakra-ui/react";
import JobItem from "./jobitem";

function ListJobs() {
  return (
    <>
      <Accordion className="w-full md:w-1/2 m-3 rounded-lg" allowToggle>
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
      </Accordion>
    </>
  );
}

export default ListJobs;
