import React from "react";

// Importing ions
import { FaChild } from "react-icons/fa";
import { IoFitness, IoBarChart, IoBarbell } from "react-icons/io5";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu/SidebarMenu";

const Sidebar = () => {
  return (
    <nav className="h-full w-full rounded-l-xl  bg-white p-4 pr-0 pt-2">
      {/* Logo */}
      <div className="mt-4 flex items-center pl-4">
        <div className="bg-messo mr-2 flex h-9 w-9 items-center justify-center rounded-xl rounded-br">
          <FaChild className="text-2xl text-white" />
        </div>
        <h1 className="hidden text-xl font-bold xl:inline-block">MessO</h1>
      </div>

      {/* Main menu */}
      <h3 className="mt-10 hidden pl-4 text-sm font-semibold xl:block">
        Main Menu
      </h3>
      <div className="child:whitespace-nowrap xl:child:pr-8 mt-12 flex flex-col gap-2 text-gray-500 transition xl:mt-4">
        {/* Navigation menu*/}
        <SidebarMenu icon={<IoBarChart />} name="Dashboard" href="/dashboard" />
        {/* <Menu icon={<FaUserCircle />} name="My Profile" to="/profile" /> */}
        <SidebarMenu icon={<IoBarbell />} name="Exercise" href="/exercise" />
        <SidebarMenu
          icon={<IoFitness />}
          name="Diet and Nutrition"
          href="/diet"
        />
        <SidebarMenu
          icon={<MdFaceRetouchingNatural />}
          name="Beauty Care"
          href="/beautycare"
        />
        {/* <Menu
            icon={<GiHealthNormal />}
            name="Test Your Health"
            to="/testhealth"
          /> */}
      </div>

      <div className="hidden pr-4 xl:inline-block">
        <div className="mx-auto mt-16 flex w-44 cursor-pointer items-center rounded-xl bg-messo-600 px-3 py-2 shadow-lg shadow-blue-200 drop-shadow transition hover:scale-105 hover:shadow-xl hover:shadow-blue-200">
          <FcCalendar className="mr-2 text-5xl" />
          <p className="text-xs text-[#edfcf7]">Create Workout Plan Now</p>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
