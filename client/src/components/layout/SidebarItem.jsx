import React from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ title, path, Icon }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-4
        rounded-xl
        px-4
        py-3
        transition-all
        duration-300

        ${
          isActive
            ? "bg-white/15 text-white shadow"
            : "text-blue-100 hover:bg-white/10 hover:text-white"
        }
      `
      }
    >
      <Icon size={20} />

      <span className="font-medium">
        {title}
      </span>
    </NavLink>
  );
}

export default SidebarItem;