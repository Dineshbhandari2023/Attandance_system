import React from "react";
import { BsVectorPen, BsGrid1X2Fill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

function Sidebar() {
  return (
    <aside className="absolute z-12 h-full bg-[#6a1464] overflow-y-auto transition-all duration-500">
      <div className="flex flex-col justify-between items-center mt-4 px-8 pt-4 mb-8">
        <h1 className="text-4xl text-white font-bold font-serif">
          Hajiri Manager
        </h1>
        <p className="text-white text-lg p-2 tracking-tighter font-serif">
          Your Very Own Attendance System.
        </p>
      </div>

      <ul className="flex flex-col">
        <li className="py-4 px-5 text-lg hover:bg-[#FFFFFF33]">
          <a href="" className="flex p-4 text-xl font-bold text-white">
            <BsGrid1X2Fill className="size-6 mx-3" /> Dashboard
          </a>
        </li>
        <li className="py-4 px-5 text-lg hover:bg-[#FFFFFF33]">
          <a href="" className="flex p-4 text-xl font-bold text-white">
            <BsVectorPen className="size-6 mx-3" /> Attandance
          </a>
        </li>
        <li className="py-4 px-5 text-lg hover:bg-[#FFFFFF33]">
          <a href="" className="flex p-4 text-xl font-bold text-white">
            <IoIosPeople className="size-6 mx-3" /> Employee
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
