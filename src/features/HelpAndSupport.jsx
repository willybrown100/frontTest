import React from 'react'
import { Link } from 'react-router-dom';

function Support({icon,title,link,linkIcon, color}){
    return (
      <div>
        <div
          className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]"
        >
          <span className={`bg-[${color}] p-6 rounded-[1.4rem]`}>{icon}</span>
          <div className=" gap-y-2 flex flex-col">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
              {title}
            </h4>
            <Link className="flex gap-x-2 items-center font-semibold text-[#4169E1] capitalize">
              {link}
              <span>{linkIcon}</span>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default function HelpAndSupport() {
  return (
    <div className="px-8 grid grid-cols-[331px,331px] gap-x-3">
      <div className="space-y-5">
        <div className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]">
          <span className="p-6 rounded-[1.4rem] bg-[#EE5D50]">
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.59983 20.6H3.59982C2.27433 20.6 1.19982 19.5254 1.19983 18.2L1.19992 3.80001C1.19993 2.47453 2.27444 1.40002 3.59992 1.40002H14.4002C15.7257 1.40002 16.8002 2.47454 16.8002 3.80002V8.00002M12.0002 14.5479C12.0002 13.2512 13.0747 12.2 14.4002 12.2C15.7257 12.2 16.8002 13.2512 16.8002 14.5479C16.8002 15.8446 15.7257 16.8958 14.4002 16.8958M14.4002 20.0903V20"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-2">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
              frequently asked questions
            </h4>
            <Link className="capitalize flex gap-x-2 items-center font-semibold text-[#4169E1]">
              <span>see FAQ </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                  stroke="#4169E1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]">
          <span className="p-6 rounded-[1.4rem] bg-[#2DAE32]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 2.91005C16.0832 1.98398 14.9911 1.24972 13.7876 0.750108C12.5841 0.250493 11.2931 -0.0044801 9.98997 5.95695e-05C4.52999 5.95695e-05 0.0799999 4.45005 0.0799999 9.91003C0.0799999 11.66 0.539998 13.36 1.4 14.86L0 20L5.24998 18.62C6.69998 19.41 8.32998 19.83 9.98997 19.83C15.45 19.83 19.8999 15.38 19.8999 9.92003C19.8999 7.27004 18.8699 4.78005 16.9999 2.91005ZM9.98997 18.15C8.50997 18.15 7.05998 17.75 5.78998 17L5.48998 16.82L2.36999 17.64L3.19999 14.6L2.99999 14.29C2.17774 12.977 1.74113 11.4593 1.73999 9.91003C1.73999 5.37004 5.43998 1.67005 9.97997 1.67005C12.18 1.67005 14.25 2.53005 15.8 4.09005C16.5674 4.85401 17.1756 5.7627 17.5893 6.76346C18.003 7.76422 18.214 8.83714 18.2099 9.92003C18.2299 14.46 14.53 18.15 9.98997 18.15ZM14.51 11.99C14.26 11.87 13.04 11.27 12.82 11.18C12.59 11.1 12.43 11.06 12.26 11.3C12.09 11.55 11.62 12.11 11.48 12.27C11.34 12.44 11.19 12.46 10.94 12.33C10.69 12.21 9.88997 11.94 8.94997 11.1C8.20998 10.44 7.71998 9.63003 7.56998 9.38003C7.42998 9.13003 7.54998 9.00003 7.67998 8.87003C7.78998 8.76003 7.92998 8.58003 8.04998 8.44003C8.16998 8.30003 8.21998 8.19003 8.29998 8.03004C8.37998 7.86004 8.33997 7.72004 8.27997 7.60004C8.21998 7.48004 7.71998 6.26004 7.51998 5.76004C7.31998 5.28004 7.10998 5.34004 6.95998 5.33004H6.47998C6.30998 5.33004 6.04998 5.39004 5.81998 5.64004C5.59998 5.89004 4.95999 6.49004 4.95999 7.71004C4.95999 8.93003 5.84998 10.11 5.96998 10.27C6.08998 10.44 7.71998 12.94 10.2 14.01C10.79 14.27 11.25 14.42 11.61 14.53C12.2 14.72 12.74 14.69 13.17 14.63C13.65 14.56 14.64 14.03 14.84 13.45C15.05 12.87 15.05 12.38 14.98 12.27C14.91 12.16 14.76 12.11 14.51 11.99Z"
                fill="white"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-2">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
          whatsapp
            </h4>
            <Link className="capitalize flex gap-x-2 items-center font-semibold text-[#4169E1]">
              <span>drop a message </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                  stroke="#4169E1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]">
          <span className="p-6 rounded-[1.4rem] bg-[#EE5D50]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 11L11 15.8M11 7.44221V7.40002M1.40002 11C1.40002 5.69809 5.69809 1.40002 11 1.40002C16.302 1.40002 20.6 5.69809 20.6 11C20.6 16.302 16.302 20.6 11 20.6C5.69809 20.6 1.40002 16.302 1.40002 11Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-2">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
              report our support
            </h4>
            <Link className="capitalize flex gap-x-2 items-center font-semibold text-[#4169E1]">
              <span> not satisfied </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                  stroke="#4169E1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="space-y-5">
        <div className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]">
          <span className="p-6 rounded-[1.4rem] bg-[#FFB547]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5325 9.93336C3.5325 5.22053 7.35301 1.40002 12.0658 1.40002C16.7787 1.40002 20.5992 5.22053 20.5992 9.93336C20.5992 11.16 20.3403 12.3263 19.8743 13.3804L20.6008 18.4659L16.2426 17.3763C15.008 18.0707 13.5832 18.4667 12.0658 18.4667M1.40018 15.2667C1.40018 16.0334 1.56194 16.7623 1.85319 17.4211L1.39917 20.5995L4.12276 19.9186C4.89432 20.3525 5.78476 20.6 6.73301 20.6C9.67825 20.6 12.0658 18.2122 12.0658 15.2667C12.0658 12.3212 9.67825 9.93336 6.73301 9.93336C3.78777 9.93336 1.40018 12.3212 1.40018 15.2667Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-2">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
              live chat
            </h4>
            <Link className="capitalize flex gap-x-2 items-center font-semibold text-[#4169E1]">
              <span>chat now </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                  stroke="#4169E1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]">
          <span className="p-6 rounded-[1.4rem] bg-[#4169E1]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.8711 5.32596C13.071 5.52705 14.1609 6.09377 15.0311 6.96214C15.9012 7.8305 16.4645 8.91824 16.6706 10.1157M12.0543 1.40002C14.1884 1.76108 16.1348 2.77113 17.6828 4.31133C19.2307 5.85611 20.2382 7.7985 20.6 9.92828M18.933 18.4017C18.933 18.4017 17.7743 19.5397 17.4904 19.8733C17.0278 20.3669 16.4828 20.6 15.7684 20.6C15.6997 20.6 15.6264 20.6 15.5577 20.5954C14.1976 20.5086 12.9336 19.9785 11.9856 19.526C9.39347 18.2737 7.11736 16.4959 5.22594 14.2427C3.66427 12.3643 2.6201 10.6275 1.92856 8.76284C1.50265 7.62482 1.34694 6.73818 1.41564 5.90181C1.46143 5.36708 1.66752 4.92375 2.04763 4.54442L3.60931 2.98593C3.83372 2.77569 4.07186 2.66144 4.30542 2.66144C4.59395 2.66144 4.82751 2.83511 4.97406 2.98136C4.97864 2.98593 4.98322 2.9905 4.9878 2.99507C5.26716 3.25558 5.53278 3.52523 5.81214 3.81316C5.95412 3.95941 6.10067 4.10566 6.24722 4.25648L7.49747 5.50419C7.98292 5.98864 7.98292 6.43654 7.49747 6.92099C7.36466 7.05353 7.23643 7.18607 7.10362 7.31404C6.71892 7.70709 7.02112 7.40551 6.62269 7.76199C6.61353 7.77113 6.60437 7.7757 6.59979 7.78485C6.20594 8.17789 6.27921 8.5618 6.36165 8.82231C6.36623 8.83602 6.37081 8.84973 6.37539 8.86345C6.70055 9.64954 7.15852 10.3899 7.85463 11.272L7.85921 11.2766C9.12321 12.8305 10.4559 14.0416 11.926 14.9694C12.1137 15.0882 12.3061 15.1842 12.4893 15.2756C12.6542 15.3579 12.8099 15.4356 12.9427 15.5179C12.961 15.527 12.9793 15.5407 12.9976 15.5499C13.1533 15.6275 13.2999 15.6641 13.451 15.6641C13.8311 15.6641 14.0693 15.4265 14.1471 15.3488L15.0448 14.4529C15.2005 14.2975 15.4478 14.1101 15.7363 14.1101C16.0203 14.1101 16.2539 14.2884 16.3958 14.4438C16.4004 14.4483 16.4004 14.4483 16.405 14.4529L18.9284 16.9712C19.4001 17.4373 18.933 18.4017 18.933 18.4017Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-2">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
              phone call
            </h4>
            <Link className="capitalize flex gap-x-2 items-center font-semibold text-[#4169E1]">
              <span>call us </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                  stroke="#4169E1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="p-2 rounded-3xl flex items-center gap-x-3 border border-[#D7E1F4]">
          <span
            className="p-6 rounded-[1.4rem] bg-[#2DAE32]"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.495 1.71393C10.7016 1.29539 11.2984 1.29539 11.505 1.71393L14.179 7.13206C14.261 7.29826 14.4196 7.41346 14.603 7.44012L20.5823 8.30895C21.0441 8.37607 21.2286 8.94369 20.8944 9.26948L16.5677 13.4869C16.435 13.6163 16.3744 13.8027 16.4058 13.9854L17.4271 19.9404C17.506 20.4005 17.0232 20.7513 16.6101 20.5341L11.2621 17.7225C11.098 17.6362 10.902 17.6362 10.738 17.7225L5.38995 20.5341C4.97683 20.7513 4.49398 20.4005 4.57288 19.9404L5.59426 13.9854C5.62559 13.8027 5.56502 13.6163 5.4323 13.4869L1.10567 9.26948C0.771444 8.94369 0.955875 8.37607 1.41777 8.30895L7.39702 7.44012C7.58044 7.41346 7.739 7.29826 7.82103 7.13206L10.495 1.71393Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <div className="flex flex-col gap-y-2">
            <h4 className="mb-0 text-[#6882B6] font-semibold capitalize">
          review our app
            </h4>
            <Link className="capitalize flex gap-x-2 items-center font-semibold text-[#4169E1]">
              <span>coming soon </span>
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.83333 1.125L11 5.5M11 5.5L6.83333 9.875M11 5.5L1 5.5"
                  stroke="#4169E1"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
