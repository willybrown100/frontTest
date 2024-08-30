import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function HomeLink({item}) {
    const {icon,name,path}=item
    const {pathname}=useLocation()

 return (
   <li className={`${pathname === path ? "bg-btn text-white" : ""} rounded-md p-2`}>
     <Link to="" className={` flex items-center gap-x-4`}>
       <div className="flex items-center gap-x-3">
         <span>{icon}</span>
         <div
           className={`${
             pathname === path
               ? "bg-btn text-white"
               : "text-[#6882B6] capitalize mb-0"
           }  `}
         >
           {name}
         </div>
       </div>
     </Link>
   </li>
 );
}
