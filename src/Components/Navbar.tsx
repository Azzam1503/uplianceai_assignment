import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-teal-800 flex justify-center text-white">
      <div className="flex w-[50%] flex-wrap justify-evenly py-2">
        <NavLink className={`text-xl font-bold`} to={"/"}>
          Counter
        </NavLink>
        <NavLink className={`text-xl font-bold`} to={"/user-data"}>
          UserForm
        </NavLink>
        <NavLink className={`text-xl font-bold`} to={"/editor"}>
          Editor
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
