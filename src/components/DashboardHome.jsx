import React, { useEffect, useState } from 'react'
import Button from '../ui/Button';

export default function DashboardHome() {

  return (
    <div className="grid grid-cols-[468px,500px] gap-x-5 px-8">
      <div className="space-y-8">
        <div className="flex items-center justify-between border p-4  border-stone-200 rounded-[1.5rem]">
          <div className="flex flex-col gap-y-2">
            <span className="text-[#3C517C] font-normal capitalize tracking-wide ">
              wallet balance
            </span>
            <h3 className="text-[#3C517C] font-bold">#3000</h3>
          </div>
          <Button className="px-8 tracking-wide capitalize">fund wallet</Button>
        </div>

        <div className=" border p-4  border-stone-200 rounded-md">
          <div className="flex flex-col gap-y-3">
            <span className="capitalize text-[#3C517C] font-normal">
              referral
            </span>
            <div className="flex items-center">
              <span className="text-[#3C517C] capitalize">referral code:</span>
              <span className="font-semibold">18/52ha089</span>
            </div>
            <div className="flex items-center gap-x-4">
              <button className="flex items-center gap-x-2">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99997 13.4001L2.59997 13.4001C1.93723 13.4001 1.39997 12.8628 1.39997 12.2001L1.39997 3.4001C1.39997 2.29553 2.29541 1.4001 3.39997 1.4001L12.2 1.4001C12.8627 1.4001 13.4 1.93736 13.4 2.6001L13.4 5.0001M11 20.6001L18.2 20.6001C19.5255 20.6001 20.6 19.5256 20.6 18.2001L20.6 11.0001C20.6 9.67462 19.5255 8.6001 18.2 8.6001L11 8.6001C9.67449 8.6001 8.59997 9.67462 8.59997 11.0001L8.59997 18.2001C8.59997 19.5256 9.67449 20.6001 11 20.6001Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
                <span className="capitalize text-btn font-semibold">copy</span>
              </button>
              <button className="flex items-center gap-x-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 16.5514H16.8M1.20007 16.5514L5.56606 15.6717C5.79784 15.625 6.01065 15.5109 6.17779 15.3437L15.9515 5.56461C16.4201 5.09576 16.4197 4.33577 15.9508 3.86731L13.8803 1.79923C13.4115 1.33097 12.6519 1.33129 12.1835 1.79995L2.40884 11.58C2.24202 11.7469 2.12812 11.9593 2.08138 12.1906L1.20007 16.5514Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="capitalize text-btn font-semibold">edit</span>
              </button>
              <button className="flex items-center gap-x-2">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.0001 7.45912L9.40007 1.1001L9.40007 4.7001C0.999878 6.5001 0.999878 14.9001 0.999878 14.9001C0.999878 14.9001 4.59988 10.1001 9.40007 10.7001L9.40007 14.4201L19.0001 7.45912Z"
                    stroke="#4169E1"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="capitalize text-btn font-semibold">share</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border p-4  border-stone-200 rounded-md">
          <div className="flex flex-col gap-y-2">
            <span className="capitalize tracking-wide">
              total referral made
            </span>
            <span>0</span>
            <button className="flex items-center gap-x-1 ">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6 15.5599L20.6 16.3099C21.0142 16.3099 21.35 15.9741 21.35 15.5599H20.6ZM20.6 10.2799H21.35C21.35 9.86568 21.0142 9.52989 20.6 9.52989V10.2799ZM6.27446 5.32901C5.92603 5.553 5.82515 6.01703 6.04914 6.36546C6.27313 6.71389 6.73716 6.81477 7.08559 6.59078L6.27446 5.32901ZM13.4 1.63989L13.992 1.17944C13.7537 0.873029 13.321 0.799099 12.9945 1.00901L13.4 1.63989ZM16.168 6.42035C16.4223 6.74731 16.8935 6.80621 17.2205 6.55191C17.5474 6.29761 17.6063 5.8264 17.352 5.49944L16.168 6.42035ZM20.6 14.8099H17.48L17.48 16.3099H20.6L20.6 14.8099ZM17.48 11.0299H20.6V9.52989L17.48 9.52989V11.0299ZM19.85 10.2799V15.5599H21.35V10.2799H19.85ZM15.59 12.9199C15.59 11.8761 16.4362 11.0299 17.48 11.0299V9.52989C15.6078 9.52989 14.09 11.0476 14.09 12.9199H15.59ZM17.48 14.8099C16.4362 14.8099 15.59 13.9637 15.59 12.9199H14.09C14.09 14.7921 15.6078 16.3099 17.48 16.3099L17.48 14.8099ZM7.08559 6.59078L13.8056 2.27078L12.9945 1.00901L6.27446 5.32901L7.08559 6.59078ZM12.808 2.10035L16.168 6.42035L17.352 5.49944L13.992 1.17944L12.808 2.10035ZM2.36002 6.70989L18.68 6.70989V5.20989L2.36002 5.20989L2.36002 6.70989ZM18.68 19.6099L2.36002 19.6099V21.1099L18.68 21.1099V19.6099ZM2.15002 19.3999L2.15002 6.91989H0.650024L0.650024 19.3999H2.15002ZM2.36002 19.6099C2.24405 19.6099 2.15002 19.5159 2.15002 19.3999H0.650024C0.650024 20.3443 1.41562 21.1099 2.36002 21.1099V19.6099ZM18.89 19.3999C18.89 19.5159 18.796 19.6099 18.68 19.6099V21.1099C19.6244 21.1099 20.39 20.3443 20.39 19.3999H18.89ZM18.68 6.70989C18.796 6.70989 18.89 6.80391 18.89 6.91989L20.39 6.91989C20.39 5.97549 19.6244 5.20989 18.68 5.20989V6.70989ZM2.36002 5.20989C1.41562 5.20989 0.650024 5.97549 0.650024 6.91989H2.15002C2.15002 6.80391 2.24404 6.70989 2.36002 6.70989L2.36002 5.20989ZM18.89 16.2799V19.3999H20.39V16.2799H18.89ZM18.89 6.91989V9.43989L20.39 9.43989V6.91989L18.89 6.91989Z"
                  fill="#4169E1"
                />
              </svg>
              <span className="font-semibold capitalize text-btn">cashout</span>
            </button>
          </div>
          <div className="flex flex-col gap-y-2 ">
            <span className="capitalize tracking-wide">
              current walltet bonus
            </span>
            <span className="font-semibold text-[#3C517C]">#0.00</span>
          </div>
        </div>
      </div>

      <div className="">
        <img src="/images/card.png" alt="card" className="" />
      </div>
    </div>
  );
}
