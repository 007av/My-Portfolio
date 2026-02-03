import { useState } from "react";
import OverLayMenu from "./OverLayMenu";
import MyLogo from "../assets/MyLogo.png";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className=" flex items-center space-x-2">
          <img src={MyLogo} alt="" className=" w-8 h-8" />
          <div className=" text-2xl font-bold text-white">Avdhut</div>
        </div>

        <div className=" block lg:absolute lg:left-1/2 lg:transform lg:translate-x-1/2">
          <button onClick={()=> setmenuOpen(true)}
            className=" text-3xl text-white focus:outline-none"
            >
            <FiMenu />
          </button>
        </div>

        <div className=" hidden lg:block">
          <a href="#contact" className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-5 py-2 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity duration-300">Reach Out</a>
        </div>
      </nav>

      <OverLayMenu isOpen = {menuOpen} onClose ={()=> setmenuOpen(false)}/>
    </>
  );
};

export default NavBar;
