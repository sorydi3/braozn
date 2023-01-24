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
        <NavBarItem name="Home" focused={true} />
        <NavBarItem name="Jobs" />
        <NavBarItem name="Companies" />
        <NavBarItem name="About" />
        <NavBarItem name="Contact" />
      </div>

      <div className="md:hidden flex flex-col space-y-2"></div>
    </div>
  );
}

export default NavBar;
