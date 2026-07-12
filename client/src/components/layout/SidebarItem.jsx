import React from "react";
import { NavLink } from "react-router-dom";

function SidebarItem({ title, path, Icon }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        group
        relative
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
            ? "bg-white/15 text-white shadow-lg"
            : "text-blue-100 hover:bg-white/10 hover:text-white"
        }
      `
      }
    >
      {({ isActive }) => (
        <>
          {/* Active Indicator */}

          {isActive && (
            <span
              className="
                absolute
                left-0
                top-2
                bottom-2
                w-1
                rounded-r-full
                bg-white
              "
            />
          )}

          {/* Icon */}

          <Icon
            size={20}
            className={`
              transition-all
              duration-300

              ${
                isActive
                  ? "scale-110"
                  : "group-hover:scale-105"
              }
            `}
          />

          {/* Title */}

          <span
            className={`
              text-sm
              font-medium
              tracking-wide

              ${
                isActive
                  ? "font-semibold"
                  : ""
              }
            `}
          >
            {title}
          </span>
        </>
      )}
    </NavLink>
  );
}

export default SidebarItem;