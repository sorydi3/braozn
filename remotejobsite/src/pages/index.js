import { Flex } from "@chakra-ui/react";
import ListJobs from "./components/listjobs";
import { auth } from "@/config/firebase";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
export default function Home() {
  const [user, setUser] = useAuthState(auth);

  const redirecrToLogin = () => {
    typeof window !== "undefined" && Router.push("/Login");
  };

  if (!user) {
    redirecrToLogin();
  }

  return (
    <Flex justify="center" pt={20} h="full" w="full">
      <ListJobs />
    </Flex>
  );
}
