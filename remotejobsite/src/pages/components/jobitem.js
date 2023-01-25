import Image from "next/image";
import useStore from "../storage/state";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import mitt from "next/dist/shared/lib/mitt";
import { Collapse } from "react-collapse";
import Jobdetail from "./jobdetail";

function JobItem(pageProps) {
  const storage = useStore((state) => state.storage);
  const addData = useStore((state) => state.addData);
  const removeData = useStore((state) => state.removeData);
  const clearData = useStore((state) => state.clearData);

  return (
    <>
      <div
        className="w-full h-24 grid grid-cols-[2rem,1fr] rounded-xl gap-4 border-b-2 flex-shrink-0 hover:border-cyan-600"
        onClick={() => pageProps.toggle(!pageProps.open)}
      >
        <Image
          src="/next.svg"
          className="w-full h-full shrink-0 bg-cover bg-center rounded-xl"
          width={100}
          height={100}
        />
        <div className=" grid  grid-cols-2 shr  w-full h-full justify-center content-center justify-items-center text-cyan-700">
          <div className=" ">
            <h1 className="font-extrabold text-xs">
              {" "}
              {pageProps.title !== undefined ? pageProps.title : "Nothins yet"}
            </h1>
            <p className="font-thin text-xs">Girona</p>
          </div>
          <div className="font-semibold ml-auto text-xs">
            {pageProps.open ? <AiOutlineMinus /> : <AiOutlinePlus />}
            <p className="text-left ">€ 2k</p>
            <p className="">Remote</p>
          </div>
        </div>
        <Collapse isOpened={pageProps.open}>
          <Jobdetail></Jobdetail>
        </Collapse>
      </div>
    </>
  );
}

export default JobItem;
