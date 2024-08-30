import React from 'react'
import TransactionList from './TransactionList';
import { useActionData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTransaction } from '../../lib/data';
import LoadingSpinner from '../../components/LoadingSpinner';

export default function TransactionHistory() {
 
    const {data:transaction=[],isLoading}=useQuery({
      queryKey:["trans"],
      queryFn:getTransaction
    })
    console.log(transaction);
  return (
    <div className="px-4">
      
      <div className='flex justify-between'>
        <div className="bg-[#D7E1F4] inline-block rounded-md px-8 py-2 border-[#D7E1F4] ">
          <div className="flex items-center gap-x-2">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.59995 5.99995H14.4M1.19995 1.19995H16.8M7.19995 10.8H10.8"
                stroke="#78A8D9"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="capitalize text-[#6882B6]">filter</span>
          </div>
        </div>
          <select className="hidden ">
            <option></option>
          </select>
      </div>


      <div className="grid mb-5 grid-cols-[180px,100px,150px,100px,150px,240px,200px] w-full">
        <span className="capitalize text-[#6882B6] font-medium">service</span>
        <span className="capitalize text-[#6882B6] font-medium">amount</span>
        <span className="capitalize text-[#6882B6] font-medium">
          total amount
        </span>
        <span className="capitalize text-[#6882B6] font-medium">status</span>
        <span className="capitalize text-[#6882B6] font-medium">
          payment method
        </span>
        <span className="capitalize text-[#6882B6] font-medium">
          transaction no{" "}
        </span>
        <span className="capitalize text-[#6882B6] font-medium">action </span>
      </div>
      <ul className="divide-stone-200 overflow-y-scroll overflow-x-hidden h-[70vh] divide-y">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          transaction?.map((item) => (
            <TransactionList
              item={item}
              key={item.service}
              isLoading={isLoading}
            />
          ))
        )}
      </ul>
    </div>
  );
}
