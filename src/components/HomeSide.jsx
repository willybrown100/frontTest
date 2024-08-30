import React from 'react'
import { FaArrowsRotate } from 'react-icons/fa6';
import { FiLogOut, FiZap } from 'react-icons/fi';
import { HiMiniWifi } from 'react-icons/hi2';
import { useLocation } from 'react-router-dom';
import LinkItem from './LinkItem';
import Logo from './Logo';
import HomeLink from './HomeLink';

export default function HomeSide() {

    const { pathname } = useLocation();
    const path = pathname.split("/").at(2)
    console.log(pathname, path);


   const links = [
     {
       name: " Dashboard",
       icon: (
         <svg
           width="18"
           height="18"
           viewBox="0 0 18 18"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z"
             fill={`${pathname === "/" ? "white" : "#6882B6"} `}
           />
         </svg>
       ),
       path: "/",
     },
     {
       name: "buy artime",
       icon: (
         <svg
           width="18"
           height="18"
           viewBox="0 0 18 18"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path
             d="M17.6638 15.771C17.6638 15.771 16.5052 16.909 16.2212 17.2427C15.7587 17.7363 15.2137 17.9693 14.4992 17.9693C14.4305 17.9693 14.3573 17.9693 14.2886 17.9648C12.9284 17.8779 11.6644 17.3478 10.7164 16.8953C8.12431 15.643 5.8482 13.8652 3.95678 11.612C2.3951 9.73359 1.35093 7.99687 0.659397 6.13217C0.233485 4.99415 0.0777753 4.1075 0.146471 3.27113C0.192268 2.7364 0.398354 2.29308 0.778469 1.91374L2.34015 0.355256C2.56455 0.14502 2.8027 0.0307617 3.03626 0.0307617C3.32478 0.0307617 3.55835 0.204435 3.7049 0.350686C3.70948 0.355256 3.71406 0.359827 3.71864 0.364397C3.998 0.624906 4.26362 0.894556 4.54298 1.18249C4.68495 1.32874 4.8315 1.47499 4.97805 1.62581L6.22831 2.87351C6.71376 3.35797 6.71376 3.80586 6.22831 4.29032C6.0955 4.42286 5.96727 4.5554 5.83446 4.68337C5.44976 5.07642 5.75196 4.77483 5.35353 5.13132C5.34437 5.14046 5.33521 5.14503 5.33063 5.15417C4.93677 5.54722 5.01005 5.93113 5.09248 6.19164C5.09706 6.20535 5.10164 6.21906 5.10622 6.23277C5.43138 7.01887 5.88935 7.75926 6.58547 8.64134L6.59005 8.64591C7.85404 10.1998 9.18673 11.411 10.6568 12.3387C10.8446 12.4576 11.0369 12.5536 11.2201 12.645C11.385 12.7272 11.5407 12.8049 11.6735 12.8872C11.6918 12.8963 11.7101 12.91 11.7285 12.9192C11.8842 12.9969 12.0307 13.0334 12.1819 13.0334C12.562 13.0334 12.8001 12.7958 12.878 12.7181L13.7757 11.8222C13.9314 11.6668 14.1787 11.4795 14.4672 11.4795C14.7511 11.4795 14.9847 11.6577 15.1267 11.8131C15.1312 11.8177 15.1312 11.8177 15.1358 11.8222L17.6592 14.3405C18.1309 14.8067 17.6638 15.771 17.6638 15.771Z"
             fill={`${
               pathname === "/rootlayout/airtime" ? "white" : "#6882B6"
             } `}
           />
         </svg>
       ),
       name: (
         <div className="flex items-center gap-x-4">
           <span className="capitalize"> buy airtime</span>
           <select className="bg-transparent" value="airtime">
             <option></option>
           </select>
         </div>
       ),
       path: "/rootlayout/airtime",
     },
     {
       name: (
         <div className="flex items-center gap-x-4">
           <span className="capitalize"> buy data</span>
           <select className="bg-transparent" value="airtime">
             <option></option>
           </select>
         </div>
       ),
       icon: (
         <HiMiniWifi
           className={
             pathname === "/rootlayout/data"
               ? "text-white"
               : "text-[#6882B6] text-lg"
           }
         />
       ),
       path: "/rootlayout/data",
     },
     {
       name: (
         <div className="flex items-center gap-x-4">
           <span className="capitalize"> tv subscription</span>
           <select className="bg-transparent" value="airtime">
             <option></option>
           </select>
         </div>
       ),
       icon: (
         <svg
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           className="opacity-0"
         >
           <path
             d="M8.40002 20.4001L12 16.8001L15.6 20.4001M4.80002 16.8001H19.2C20.5255 16.8001 21.6 15.7256 21.6 14.4001V6.0001C21.6 4.67461 20.5255 3.6001 19.2 3.6001H4.80002C3.47454 3.6001 2.40002 4.67461 2.40002 6.0001V14.4001C2.40002 15.7256 3.47454 16.8001 4.80002 16.8001Z"
             stroke={`${pathname === "/rootlayout/tv" ? "white" : "#6882B6"} `}
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
             className="opacity-0"
           />
         </svg>
       ),
       path: "/rootlayout/tv",
     },
     {
       name: (
         <div className="flex items-center gap-x-2 opacity-0">
           <span className="capitalize"> pay Electricity bills</span>
           <select className="bg-transparent" value="airtime">
             <option></option>
           </select>
         </div>
       ),
       icon: (
         <FiZap
           className={` text-2xl ${
             pathname === "/rootlayout/bills" ? "white" : "text-[#6882B6] "
           } `}
         />
       ),
       path: "/rootlayout/bills",
     },
     {
       name: <span className="opacity-0">airtime to cash</span>,
       icon: (
         <div className="opacity-0">
           {pathname === "/rootlayout/airtimetocash" ? (
             <FiLogOut />
           ) : (
             <FaArrowsRotate
               className={
                 pathname === "/rootlayout/airtimetocash"
                   ? "text-white"
                   : "text-[#6882B6] text-lg"
               }
             />
           )}
         </div>
       ),
       path: "/rootlayout/airtimetocash",
     },
   ];
 
  return (
    <div className="row-span-full homeside z-20   pl-4 pt-4  grid grid-rows-[auto,auto] min-h-screen">
      <div className="bg-white z-[-1] rounded-tl-[3rem] sidebar w-full p-5">
        <Logo />
        <ul className="flex flex-col gap-y-7 mt-9">
          {links.map((item) => (
            <HomeLink item={item} key={item.name} />
          ))}
        </ul>
        {/* <button className="flex items-center gap-x-2">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.78019 1.6001H4.07431C3.51268 1.6001 2.97405 1.82135 2.57691 2.21517C2.17977 2.609 1.95667 3.14314 1.95667 3.7001V16.3001C1.95667 16.8571 2.17977 17.3912 2.57691 17.785C2.97405 18.1788 3.51268 18.4001 4.07431 18.4001H7.78019M8.04338 10.0001H20.0434M20.0434 10.0001L15.4582 5.2001M20.0434 10.0001L15.4582 14.8001"
              stroke="#6882B6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          logout
        </button> */}
      <h3 className="z-20 text-white  font-semibold">
        <span className='text-2xl'> the</span> BEST <span className="text-2xl">place to</span> <br />{" "}
        <span className="text-2xl">subscribe / buy</span>
      </h3>
      </div>
    </div>
  );
}
