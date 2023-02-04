import { Flex, Toast } from "@chakra-ui/react";
import ListJobs from "./components/listjobs";
import { auth } from "@/config/firebase";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { Text } from "@chakra-ui/react";
import toast, { Toaster } from "react-hot-toast";
import { MotionConfig, motion } from "framer-motion";
const redirecrToLogin = async () => {
  typeof window !== "undefined" && Router.push("/Login");
};

function AlertNotLogin() {
  return (
    <>
      <Toaster /> && {toast.error("You need to login first")}
    </>
  );
}
export default function Home() {
  const [user, _] = useAuthState(auth);
  if (!user) {
    redirecrToLogin();
  }

  return (
    <Flex justify="center" pt={20} h="full" w="full">
      <Toaster
        position="bottom-center"
        duration={10000}
        toastOptions={{
          // Define default options
          style: {
            height: "60px",
            width: "200px",
            zIndex: 1,
            // Default options for specific types
          },
        }}
      />
      {user ? (
        toast.success(<Text className="font-bold">Your are logged in.</Text>, {
          style: {
            fontSize: "14px",
            padding: "5px",
            borderRadius: "10px",
          },

          duration: 5000,
        }) && <ListJobs />
      ) : (
        <AlertNotLogin />
      )}

      <PostAjobButton />
    </Flex>
  );
}

function PostAjobButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1 }}
      className="fixed bottom-4 right-4"
    >
      <a
        href="#"
        class="inline-block animate-border  rounded-xl bg-white from-teal-500 via-purple-500 to-pink-500 bg-[length:400%_400%] p-0.5 transition bg-gradient-to-r shadow-lg focus:outline-none focus:ring "
      >
        <span class="block rounded-[11px] bg-slate-900 px-10 py-4 text-3xl text-white">
          {" "}
          POST A JOB{" "}
        </span>
      </a>
    </motion.div>
  );
}
