import React from 'react'
import { convertTo12HourFormat, convertToNaira, formatedDate,  } from '../../utils/utils';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function TransactionList({item ,isLoading}) {
    const {
      service,
      amount,
      total,
      status,
      number,
      transactionNo,
      action,
      paymentmethod,
      date,
      time,
    } = item;
    if(isLoading) return <LoadingSpinner/>
  return (
    <li className="grid grid-cols-[180px,100px,150px,100px,150px,240px,200px] py-4">
      <div className="flex gap-x-2 items-center">
        <StatusIcon status={status} />
        <div className="flex flex-col">
          <span className="capitalize text-[#4C689E] font-medium">
            {service}
          </span>
          <span className="text-sm text-[#4C689E]">{number}</span>
        </div>
      </div>
      <span className="text-sm text-[#4C689E] font-medium">
        {convertToNaira(amount)}
      </span>
      <span className="text-sm text-[#4C689E] font-medium">
        {convertToNaira(total)}
      </span>
      <StatusText status={status}/>
      {/* <span className="text-sm text-[#4C689E] font-medium">{status}</span> */}
      <span className="text-sm text-[#4C689E] font-medium">
        {paymentmethod}
      </span>
      <div className="flex flex-col">
        <span className="text-sm text-[#4C689E] font-medium">
          {BigInt(transactionNo).toString()}
        </span>
        <div className="flex gap-x-3">
          <span className="text-sm text-[#4C689E] font-medium">
            {formatedDate(date)}
          </span>
          <span className="text-sm text-[#4C689E] font-medium">
            {convertTo12HourFormat(time)}
          </span>
        </div>
      </div>
      <div>
        <span className="text-sm text-[#4C689E] font-medium rounded-md p-2 capitalize bg-[#EFF3FB]">
          {action}
        </span>
      </div>
    </li>
  );
}





const StatusIcon = ({ status }) => {
  // Declare a variable to hold the icon
  let icon;

  // Use switch or if-else logic to set the icon based on the status
  switch (status) {
    case 'initiated':
      icon = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z"
            stroke="#FFB547"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ); 
      break;
    case 'successful':
      icon = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4 6.39998L6.82022 9.59998L5.59998 8.50918M14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4 1.59998 13.3255 1.59998 12V3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998H12C13.3255 1.59998 14.4 2.67449 14.4 3.99998Z"
            stroke="#2DAE32"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );  // Icon for successful
      break;
    case 'failed':
      icon = (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.99997 8.00005L7.99998 11.2M7.99997 5.62817V5.60005M1.59998 12.0001L1.59998 3.99998C1.59998 2.67449 2.67449 1.59998 3.99998 1.59998L12 1.59998C13.3255 1.59998 14.4 2.67449 14.4 3.99998L14.4 12C14.4 13.3255 13.3255 14.4 12 14.4H3.99998C2.67449 14.4001 1.59998 13.3255 1.59998 12.0001Z"
            stroke="#EE5D50"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );  // Icon for failed
      break;
    default:
      icon = null;  // No icon if status is unknown
  }

  // Render the icon in your JSX
  return (
    <div>
      {icon}  {/* This will render the icon assigned above */}
    </div>
  );
};
const StatusText = ({ status }) => {
  // Declare a variable to hold the icon
  let text;

  // Use switch or if-else logic to set the icon based on the status
  switch (status) {
    case 'initiated':
      text = (
        <span
          className=" capitalize text-[#FFB547]"
        >
          initiated
        </span>
      );
      break;
    case 'successful':
      text = <span className="text-[#2DAE32] capitalize">successful</span>;// Icon for successful
      break;
    case 'failed':
      text = <span className="text-[#EE5D50] capitalize">failed</span>;
      break;
    default:
      text = null;  // No icon if status is unknown
  }

  // Render the icon in your JSX
  return (
    <div>
      {text}  {/* This will render the icon assigned above */}
    </div>
  );
};

// Example usage in your main App component

// export default App;