function NavBarItem({ name, focused }) {
  return (
    <div
      className={
        focused
          ? "flex m-auto p-3 rounded-full bg-cyan-700 text-white font-semibold"
          : "flex m-auto p-3 rounded-full bg-cyan-50 hover:bg-cyan-700 hover:text-white hover:font-semibold"
      }
    >
      <p className="">{name}</p>
    </div>
  );
}

export default NavBarItem;
