import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const SubMenu = ({ data }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <li
        onClick={() => setSubMenuOpen((prev) => !prev)}
        className={`hover:bg-blue-100 hover:text-blue-600 cursor-pointer p-2 flex font-medium duration-100 rounded-sm ${
          true ? "gap-4" : "gap-0"
        }`}
      >
        <data.icon size={23} className="min-w-max" />
        <span className={`${true ? "w-32" : "w-0"} overflow-hidden`}>
          {data.name}
        </span>
        <BiChevronRight
          size={23}
          className={`${
            subMenuOpen ? "rotate-90" : "rotate-0"
          } ml-auto duration-100`}
        />
      </li>
      <ul
        className={`${
          subMenuOpen ? "max-h-fit" : "max-h-0"
        } duration-100 overflow-hidden flex flex-col gap-1`}
      >
        {data?.menus.map((menu) => (
          <li
            className="hover:text-blue-600 cursor-pointer capitalize px-14 my-1"
            key={menu}
          >
            {menu}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubMenu;
