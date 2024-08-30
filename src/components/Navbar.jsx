import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
        const [user, setUser] = useState({});
      
    const {pathname}=useLocation()
    console.log(pathname)
  return (
    <div>
      <div className="flex justify-between p-4 px-4 items-center">
        <h4 className="mb-0 capitalize font-medium text-[#2B3B5A]">
         <Text pathn={pathname}/>
        </h4>
        <div className="flex items-center gap-x-2">
          <h4 className="font-semibold mb-0 text-btn capitalize">
            upgrade to merchant
          </h4>

          <button className="bg-[#D7E1F4] rounded-full p-2 border border-[#98b5eb]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.29309 12.5233C5.80262 12.9092 6.47547 13.1439 7.21309 13.1439C7.9507 13.1439 8.62355 12.9092 9.13308 12.5233M1.8186 10.5373C1.51504 10.5373 1.3455 10.0852 1.52912 9.83397C1.95521 9.25104 2.36646 8.39607 2.36646 7.36651L2.38404 5.87467C2.38404 3.10291 4.54608 0.855957 7.21309 0.855957C9.91938 0.855957 12.1133 3.13601 12.1133 5.94859L12.0957 7.36651C12.0957 8.40315 12.4928 9.26278 12.9015 9.84595C13.078 10.0978 12.9081 10.5373 12.6083 10.5373H1.8186Z"
                stroke="#4169E1"
                stroke-width="1.27999"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <Link
            to="/rootlayout/dashboard/settings"
            className="bg-[#D7E1F4] rounded-full p-2 border border-[#98b5eb]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              // className="
            >
              <path
                d="M9.58918 3.98783C9.58918 5.71752 8.49072 6.98051 7.1357 6.98051C5.78068 6.98051 4.68222 5.71752 4.68222 3.98783C4.68222 2.25814 5.78068 0.855957 7.1357 0.855957C8.49072 0.855957 9.58918 2.25814 9.58918 3.98783Z"
                stroke="#4169E1"
                stroke-width="1.27999"
                stroke-linejoin="round"
              />
              <path
                d="M2.13622 9.48601C2.31209 9.16529 2.63487 8.96807 2.98392 8.96807H11.0162C11.3653 8.96807 11.688 9.16529 11.8639 9.48601L13.0089 11.5739C13.3905 12.2699 12.9186 13.1439 12.1612 13.1439H1.83896C1.08153 13.1439 0.609612 12.2699 0.991259 11.5739L2.13622 9.48601Z"
                stroke="#4169E1"
                stroke-width="1.27999"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
const Text = ({ pathn }) => {
 
  // Declare a variable to hold the icon
  let text;

  // Use switch or if-else logic to set the icon based on the status
  switch (pathn) {
    case "/rootlayout/transaction":
      text = <span className=" capitalize ">transaction history</span>;
      break;
    case "/rootlayout/dashboard/dashhome":
      text = <span className=" capitalize">welcom lawal wahab</span>; // Icon for successful
      break;
    case "/rootlayout/dashboard/settings":
      text = <span className=" capitalize">welcom lawal wahab</span>;
      break;
    case "/rootlayout/airtimetocash":
      text = <span className=" capitalize">airtime to cash</span>;
      break;
    case "/rootlayout/airtime":
      text = <span className=" capitalize"> buy airtime </span>;
      break;
    default:
      text = null; // No icon if status is unknown
  }

  // Render the icon in your JSX
  return (
    <div>
      {text} {/* This will render the icon assigned above */}
    </div>
  );
};