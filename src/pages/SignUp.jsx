import React from 'react'
import Button from '../ui/Button';
import Login from '../components/Login';

export default function SignUp() {
  return (
    <div className="grid grid-cols-[16rem,1fr] min-h-screen  grid-rows-[1fr] ">
      <div className="row-span-full   bg-gradient-to-b from-blue-900 to-blue-600 text-white shadow-lg  p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-center">subsumm</h2>
        </div>

        <nav className="">
          <ul className="space-y-6">
            <li className="flex items-center space-x-4 cursor-pointer hover:bg-blue-800 hover:rounded-lg p-3">
              <span>📊</span>
              <span>Dashboard</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:bg-blue-800 hover:rounded-lg p-3">
              <span>💸</span>
              <span>Buy Airtime</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:bg-blue-800 hover:rounded-lg p-3">
              <span>📶</span>
              <span>Buy Data</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:bg-blue-800 hover:rounded-lg p-3">
              <span>📺</span>
              <span>TV Subscription</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:bg-blue-800 hover:rounded-lg p-3">
              <span>💡</span>
              <span>Pay Electric Bill</span>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:bg-blue-800 hover:rounded-lg p-3">
              <span>🕒</span>
              <span>Transaction History</span>
            </li>
          </ul>
        </nav>

        <div className="text-center">
          <p>The BEST place to subscribe / buy</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between p-6">
          <button className="font-semibold text-btn capitalize gap-x-2 flex items-center">
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.39998 10.7998L1.59998 5.9998L6.39998 1.19981"
                stroke="#4169E1"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>home</span>
          </button>
          <Button className="px-8">sign up</Button>
        </div>
    <Login/>
      </div>
    </div>
  );
}



// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-500 text-white flex flex-col justify-between p-4">
//       <div>
//         <div className="mb-6 text-center">
//           <h2 className="text-2xl font-bold">subsumm</h2>
//         </div>
//         <nav>
//           <ul>
//             <li className="mb-4 flex items-center">
//               <span className="mr-3">📊</span> 
//               <span>Dashboard</span>
//             </li>
//             <li className="mb-4 flex items-center">
//               <span className="mr-3">💸</span> 
//               <span>Buy Airtime</span>
//             </li>
//             <li className="mb-4 flex items-center">
//               <span className="mr-3">📶</span> 
//               <span>Buy Data</span>
//             </li>
//             <li className="mb-4 flex items-center">
//               <span className="mr-3">📺</span> 
//               <span>TV Subscription</span>
//             </li>
//             <li className="mb-4 flex items-center">
//               <span className="mr-3">💡</span> 
//               <span>Pay Electric Bill</span>
//             </li>
//             <li className="mb-4 flex items-center">
//               <span className="mr-3">🕒</span> 
//               <span>Transaction History</span>
//             </li>
//           </ul>
//         </nav>
//       </div>
//       <div>
//         <p className="text-center">The BEST place to subscribe / buy</p>
//       </div>
//     </div>
//   );
// };

;


