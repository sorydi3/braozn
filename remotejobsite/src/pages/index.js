import { Flex } from "@chakra-ui/react";
import ListJobs from "./components/listjobs";

export default function Home() {
  return (
    <Flex justify="center" pt={20} h="full" w="full">
      <ListJobs />
    </Flex>
  );
}
