import Link from "next/link";
import NavBarItem from "./navbaritem";

function NavBar() {
  return (
    <div className="flex justify-between">
      <div className="flex m-auto p-3 rounded-full bg-cyan-700 text-white font-semibold">
        <image
          src="/next.svg"
          className="w-full h-full shrink-0 bg-cover bg-center rounded-xl"
          width={100}
          height={100}
        />
      </div>
      <div className="mr-auto left-16  top-3 md:fixed hidden md:flex space-x-5">
        <Link href="\">
          <NavBarItem name="Home" focused={true} />
        </Link>

        <Link href="contact">
          <NavBarItem name="Contact" />
        </Link>

        <Link href="about">
          <NavBarItem name="About" />
        </Link>

        <Link href="companies">
          <NavBarItem name="Companies" />
        </Link>

        <Link href="jobs">
          <NavBarItem name="Jobs" />
        </Link>
      </div>

      <div className="md:hidden flex flex-col space-y-2"></div>
    </div>
  );
}

export default NavBar;
