import React, { useState } from 'react'
import Logo from './Logo';
import LinkItem from './LinkItem';
import { useLocation } from 'react-router-dom';
import { FaArrowsRotate } from 'react-icons/fa6';
import { HiMiniWifi } from 'react-icons/hi2';
import { FiLogOut, FiZap } from 'react-icons/fi';

export default function Sidebar() {
  const [open,setOpen]=useState(false)
     const { pathname } = useLocation();
     const path = pathname.split("/").at(2)
     console.log(pathname, path);

     const handleClick=function(){
setOpen(!open)
     }
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
              fill={`${
                pathname === "/rootlayout/dashboard/dashhome"
                  ? "white"
                  : pathname === "/rootlayout/dashboard/settings"
                  ? "white"
                  : "#6882B6"
              } `}
            />
          </svg>
        ),
        path: "/rootlayout/dashboard/dashhome",
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
          >
            <path
              d="M8.40002 20.4001L12 16.8001L15.6 20.4001M4.80002 16.8001H19.2C20.5255 16.8001 21.6 15.7256 21.6 14.4001V6.0001C21.6 4.67461 20.5255 3.6001 19.2 3.6001H4.80002C3.47454 3.6001 2.40002 4.67461 2.40002 6.0001V14.4001C2.40002 15.7256 3.47454 16.8001 4.80002 16.8001Z"
              stroke={`${pathname === "/rootlayout/tv" ? "white" : "#6882B6"} `}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        path: "/rootlayout/tv",
      },
      {
        name: (
          <div className="flex items-center gap-x-2">
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
        name: "airtime to cash",
        icon: (
          <div>
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
      {
        name: "transaction history",
        icon: (
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.79995 5.8H13.2M4.79995 10.6H13.2M2.75995 1H15.24C16.1015 1 16.8 1.80589 16.8 2.8V19L14.2 17.2L11.6 19L8.99995 17.2L6.39995 19L3.79995 17.2L1.19995 19V2.8C1.19995 1.80589 1.89839 1 2.75995 1Z"
              stroke={`${
                pathname === "/rootlayout/transaction" ? "white" : "#6882B6"
              } `}
              strokeWidth="2"
              stroke-Linecap="round"
              strokeLinejoin="round"
              className="stroke"
            />
          </svg>
        ),
        path: "/rootlayout/transaction",
      },
      {
        name: "help and support",
        icon: (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.84615 11.0005V6.95453C4.85817 6.15923 5.027 5.37412 5.34298 4.64418C5.65896 3.91424 6.11587 3.25383 6.68754 2.70077C7.2592 2.14771 7.93438 1.71288 8.67439 1.4212C9.4144 1.12952 10.2047 0.986714 11 1.00097C11.7953 0.986714 12.5856 1.12952 13.3256 1.4212C14.0656 1.71288 14.7408 2.14771 15.3125 2.70077C15.8841 3.25383 16.341 3.91424 16.657 4.64418C16.973 5.37412 17.1418 6.15923 17.1538 6.95453V11.0005M14.0769 19.077C14.893 19.077 15.6756 18.7529 16.2526 18.1758C16.8297 17.5988 17.1538 16.8163 17.1538 16.0002V12.5389M14.0769 19.077C14.0769 19.587 13.8743 20.0761 13.5137 20.4368C13.153 20.7974 12.6639 21 12.1538 21H9.84615C9.33612 21 8.84698 20.7974 8.48633 20.4368C8.12569 20.0761 7.92308 19.587 7.92308 19.077C7.92308 18.567 8.12569 18.0779 8.48633 17.7173C8.84698 17.3566 9.33612 17.154 9.84615 17.154H12.1538C12.6639 17.154 13.153 17.3566 13.5137 17.7173C13.8743 18.0779 14.0769 18.567 14.0769 19.077ZM2.53846 8.69291H4.07692C4.28094 8.69291 4.47659 8.77395 4.62085 8.9182C4.76511 9.06245 4.84615 9.2581 4.84615 9.4621V14.0773C4.84615 14.2813 4.76511 14.4769 4.62085 14.6212C4.47659 14.7654 4.28094 14.8465 4.07692 14.8465H2.53846C2.13044 14.8465 1.73912 14.6844 1.4506 14.3959C1.16209 14.1074 1 13.7161 1 13.3081V10.2313C1 9.82329 1.16209 9.43199 1.4506 9.14349C1.73912 8.85499 2.13044 8.69291 2.53846 8.69291ZM19.4615 14.8465H17.9231C17.7191 14.8465 17.5234 14.7654 17.3791 14.6212C17.2349 14.4769 17.1538 14.2813 17.1538 14.0773V9.4621C17.1538 9.2581 17.2349 9.06245 17.3791 8.9182C17.5234 8.77395 17.7191 8.69291 17.9231 8.69291H19.4615C19.8696 8.69291 20.2609 8.85499 20.5494 9.14349C20.8379 9.43199 21 9.82329 21 10.2313V13.3081C21 13.7161 20.8379 14.1074 20.5494 14.3959C20.2609 14.6844 19.8696 14.8465 19.4615 14.8465Z"
              stroke={`${
                pathname === "/rootlayout/help" ? "white" : "#6882B6"
              } `}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        path: "/rootlayout/help",
      },
    ];
  return (
    <div className="row-span-full bg-[#EFF3FB] h-screen p-4 grid grid-rows-[auto,1fr] gap-y-7">
      <Logo />

      <div className="h-[87vh] grid grid-rows-[auto,150px] overflow-y-scroll">
        <ul className="flex flex-col gap-y-7 mt-9">
          {links.map((item) => (
            <LinkItem item={item} key={item.name} />
          ))}
        </ul>
      <button className="flex items-center gap-x-2 ml-2">
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
        <span className="text-[#6882B6] capitalize font-smibold">logout</span>
      </button>
            </div>
    </div>
  );
}
