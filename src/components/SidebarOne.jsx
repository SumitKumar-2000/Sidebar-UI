"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BiBarChartAlt,
  BiArrowBack,
  BiBraille,
  BiGridAlt,
  BiData,
  BiUser,
} from "react-icons/bi";
import { AiOutlineSetting, AiOutlinePoweroff } from "react-icons/ai";
import SubMenu from "./SubMenus";

export default function SidebarOne() {
  const [expand, setExpand] = useState(true);
  const subMenusList = [
    {
      name: "Build",
      icon: BiBraille,
      menus: ["auth", "app payroll", "storage", "hosting"],
    },
    {
      name: "Analytics",
      icon: BiBarChartAlt,
      menus: ["realtime", "events", "custom"],
    },
  ];

  return (
    <aside className="h-[92vh]">
      <div
        className={`h-full border-t border-r shadow-md p-2 gap-2 flex flex-col duration-100 md:relative fixed bg-white z-10`}
      >
        {/* LOGO */}
        <section className="w-full border-b rounded-md flex justify-between items-center py-2 relative">
          <div
            className={`flex items-center ${
              expand ? "gap-1" : "gap-0"
            } duration-100`}
          >
            <Image
              height={40}
              width={40}
              src="https://img.icons8.com/color/512/firebase.png"
              alt="Firebase img"
            />
            <h1
              className={`${
                expand ? "w-32" : "w-0"
              } overflow-hidden duration-100 text-2xl`}
            >
              Firebase
            </h1>
          </div>
          <BiArrowBack
            onClick={() => setExpand((prev) => !prev)}
            size={25}
            className={`absolute -right-5 cursor-pointer text-gray-600 p-1 rounded-full bg-white border ${
              !expand && "rotate-[180deg]"
            }`}
          />
        </section>

        {/* ROUTES */}
        <section className="flex-1 py-2 rounded-md">
          {/* first link menu */}
          <ul>
            <li
              className={`hover:bg-blue-100 hover:text-blue-600 cursor-pointer p-2 flex font-medium duration-100 rounded-sm ${
                expand ? "gap-4" : "gap-0"
              }`}
            >
              <BiGridAlt size={23} className="min-w-max" />
              <span className={`${expand ? "w-32" : "w-0"} overflow-hidden`}>
                Dashboard
              </span>
            </li>
            <li
              className={`hover:bg-blue-100 hover:text-blue-600 cursor-pointer p-2 flex font-medium duration-100 rounded-sm ${
                expand ? "gap-4" : "gap-0"
              }`}
            >
              <BiUser size={23} className="min-w-max" />
              <span className={`${expand ? "w-32" : "w-0"} overflow-hidden`}>
                Authentication
              </span>
            </li>
            <li
              className={`hover:bg-blue-100 hover:text-blue-600 cursor-pointer p-2 flex font-medium duration-100 rounded-sm ${
                expand ? "gap-4" : "gap-0"
              }`}
            >
              <BiData size={23} className="min-w-max" />
              <span className={`${expand ? "w-32" : "w-0"} overflow-hidden`}>
                Storage
              </span>
            </li>

            {expand && (
              <div className={`py-2 border-y my-2`}>
                {/* Submenus */}
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product category
                </small>
                {subMenusList?.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu key={menu.name} data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li
              className={`hover:bg-blue-100 hover:text-blue-600 cursor-pointer p-2 flex font-medium duration-100 rounded-sm ${
                expand ? "gap-4" : "gap-0"
              }`}
            >
              <AiOutlineSetting size={23} className="min-w-max" />
              <span className={`${expand ? "w-32" : "w-0"} overflow-hidden`}>
                Settings
              </span>
            </li>
          </ul>
        </section>

        {/* LOGOUT SECTION */}
        <section
          className={`hover:bg-gray-100 hover:gray-red-600 cursor-pointer p-2 flex font-medium duration-100 rounded-sm border-t ${
            expand ? "gap-4" : "gap-0"
          }`}
        >
          <AiOutlinePoweroff size={23} className="min-w-max" />
          <h1 className={`${expand ? "w-32" : "w-0"} overflow-hidden`}>
            Logout
          </h1>
        </section>
      </div>
    </aside>
  );
}
