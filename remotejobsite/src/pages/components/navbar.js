import NavBarItem from "./navbaritem";

function NavBar() {
  return (
    <div className="mr-auto left-16 top-10 top sticky flex space-x-5">
      <NavBarItem name="Home" focused={true} />
      <NavBarItem name="Jobs" />
      <NavBarItem name="Companies" />
      <NavBarItem name="About" />
      <NavBarItem name="Contact" />
    </div>
  );
}

export default NavBar;
