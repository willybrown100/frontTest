import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function LinkItem({item}) {
    const {pathname}=useLocation()
    const pathz = pathname.split("/").at(2)
    console.log(pathname,pathz)
    const {name,icon,path,dropDown}=item
    const p = String(path).split("/").at(2)
    console.log(p,pathz)
  
  return (
    <li
      className={`${
        pathz === p  ? "bg-btn text-white" : ""
      } rounded-md p-2`}
    >
      <NavLink to={path} className={` flex items-center gap-x-4`}>
        <div className="flex items-center gap-x-3">
          <span >{icon}</span>
          <div
            className={`${
              pathz === p
                ? "bg-btn text-white"
                : "text-[#6882B6] capitalize mb-0"
            }  `}
          >
            {name}
          </div>
        </div>
      </NavLink>
    </li>
  );
}

  