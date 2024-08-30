import React, { useState } from 'react'
import Stepper from '../components/Stepper'
import Button from '../ui/Button';

export default function AirtimeToCash() {
  const [currentStep, setCurrentStep] = useState(1);
  const [select,setSelect]=useState("etisalat")
  console.log(select)
  return (
    <div className="w-[500px ]  mx-auto">
      <Stepper currentStep={currentStep} setCurrentStep={setCurrentStep}/>
      <form className="border  flex flex-col gap-y-3 py-4 border-[#c5d3ec] w-[500px] mx-auto px-4 bg-[#f2f4f7] rounded-lg">
        <h4 className="text-center font-semibold text-[#6882B6]">
          airtime to cash
        </h4>
        <div className="grid grid-cols-2 gap-x-1">
          <div className="flex flex-col gap-y-2">
            <label className="text-[#6882B6]">select network</label>
            <div className="border border-stone-300 bg-white  p-2 rounded-md flex justify-between items-center">
              <div className="flex gap-x-2">
                <StatusIcon statusicon={select} />
                <select
                  className=" outline-none text-[#214386] select capitalize font-semibold"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option value="etisalat" className="font-semibold capitalize">
                    etisalat
                  </option>
                  <option value=" mtn" className="font-semibold capitalize">
                    mtn
                  </option>
                  <option value=" airtel" className="font-semibold capitalize">
                    airtel
                  </option>
                </select>
              </div>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 1.5999L5.99999 6.3999L1.19999 1.5999"
                  stroke="#0040F7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="capitalize text-[#6882B6]">phone number</label>
            <input
              type="number"
              placeholder="08094562627"
              className="border border-[#C7DBEF] p-2 rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="capitalize text-[#6882B6]">amount</label>
          <input
            type="text"
            placeholder="#5000"
            className="border border-[#C7DBEF] p-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label className="capitalize text-[#6882B6]">airtime share pin</label>
          <input
            type="text"
            placeholder="#5000"
            className="border  border-[#C7DBEF] p-2 rounded-md"
          />
        </div>
        <div className="flex justify-center">
          <Button className="text-center w-full"> proceed</Button>
        </div>
      </form>
    </div>
  );
}


const StatusIcon = ({ statusicon }) => {
  // Declare a variable to hold the icon
  let icon;

  // Use switch or if-else logic to set the icon based on the statusicon
  switch (statusicon) {
    case "etisalat":
      icon = (
        <svg
          width="18"
          height="30"
          viewBox="0 0 18 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.80039 26.8266C4.18519 26.8266 4.46639 26.9081 4.64399 27.0711C4.82159 27.2341 4.91049 27.4876 4.9107 27.8316V29.6754H4.3335V27.9096C4.3335 27.5208 4.11549 27.3264 3.67949 27.3264C3.49117 27.3248 3.30627 27.3769 3.14639 27.4764C3.17406 27.5927 3.18706 27.712 3.1851 27.8316V29.6754H2.60789V27.9096C2.60789 27.5208 2.38989 27.3264 1.95389 27.3264C1.75495 27.3266 1.55765 27.3623 1.37129 27.432V29.6754H0.794395V27.1155C0.985394 27.0205 1.18758 26.95 1.39619 26.9055C1.61871 26.8536 1.84631 26.8267 2.07479 26.8251C2.43479 26.8251 2.70229 26.8951 2.87729 27.0351C3.16552 26.8974 3.48097 26.8262 3.80039 26.8266ZM6.88829 29.76C6.44829 29.76 6.1176 29.6341 5.89619 29.3823C5.6748 29.1305 5.56399 28.764 5.56379 28.2828C5.56379 27.309 6.00379 26.8222 6.88379 26.8224C7.32719 26.8224 7.66059 26.9473 7.88399 27.1971C8.10739 27.4469 8.2192 27.8088 8.2194 28.2828C8.2194 28.7564 8.10399 29.121 7.8732 29.3766C7.6424 29.6322 7.31409 29.76 6.88829 29.76ZM6.8826 29.2656C7.3884 29.2656 7.6412 28.938 7.641 28.2828C7.641 27.957 7.581 27.7136 7.461 27.5526C7.341 27.3916 7.14859 27.311 6.88379 27.3108C6.61639 27.3108 6.42499 27.3932 6.3096 27.558C6.1942 27.7228 6.13649 27.9644 6.13649 28.2828C6.13649 28.601 6.19599 28.8444 6.31499 29.013C6.43399 29.1816 6.6232 29.2654 6.8826 29.2644V29.2656ZM10.1463 26.8278C10.5567 26.8278 10.8681 26.9518 11.0805 27.1998C11.2929 27.4478 11.3994 27.7991 11.4 28.2537C11.4 28.8017 11.2727 29.1895 11.0181 29.4171C10.7635 29.6447 10.4399 29.759 10.0473 29.76C9.25949 29.76 8.86559 29.549 8.86559 29.127V25.7715H9.4374V27C9.55238 26.9451 9.67312 26.9031 9.7974 26.8749C9.91149 26.8456 10.0285 26.8294 10.1463 26.8266V26.8278ZM10.0032 29.2545C10.3032 29.2545 10.5132 29.1675 10.6332 28.9935C10.7532 28.8195 10.8132 28.5807 10.8132 28.2771C10.8132 27.9663 10.75 27.7294 10.6236 27.5664C10.4972 27.4034 10.3095 27.322 10.0605 27.3222C9.95201 27.3229 9.84402 27.3368 9.7389 27.3636C9.63366 27.389 9.53263 27.4294 9.4389 27.4836V28.9836C9.4379 29.1636 9.626 29.2535 10.0032 29.2533V29.2545ZM12.0522 25.917H12.6678V26.4447H12.0522V25.917ZM12.0687 26.9055H12.6459L12.6513 29.6766H12.0687V26.9055ZM13.4637 29.6766V25.8327H14.0355V29.6754L13.4637 29.6766ZM15.969 26.82C16.3978 26.82 16.712 26.96 16.9116 27.24C17.1112 27.52 17.2092 27.9115 17.2056 28.4145H15.27C15.2886 28.6885 15.3686 28.8968 15.51 29.0394C15.6514 29.182 15.852 29.2532 16.1118 29.253C16.423 29.2533 16.7293 29.175 17.0022 29.0253V29.5695C16.7164 29.6965 16.389 29.76 16.02 29.76C15.606 29.76 15.2808 29.6332 15.0444 29.3796C14.808 29.126 14.6899 28.766 14.6901 28.2996C14.6901 27.822 14.8018 27.4565 15.0252 27.2031C15.2486 26.9497 15.5632 26.822 15.969 26.82ZM15.9525 27.3C15.7583 27.3 15.6063 27.3519 15.4965 27.4557C15.3867 27.5595 15.3152 27.7353 15.282 27.9831H16.6176C16.5918 27.7461 16.5258 27.5731 16.4196 27.4641C16.3134 27.3551 16.1577 27.3004 15.9525 27.3ZM10.44 4.4538C9.8034 4.2964 9.3134 4.2176 8.97 4.2174C6.4083 4.2174 4.33139 6.2874 4.33139 8.8401C4.33139 11.3928 6.4092 13.4631 8.97 13.4631C11.5308 13.4631 13.6089 11.3931 13.6089 8.8401C13.6091 8.46715 13.5641 8.09555 13.4751 7.7334L17.163 6.7401C17.4617 7.87581 17.5182 9.06167 17.3288 10.2206C17.1394 11.3796 16.7083 12.4858 16.0635 13.4673L9.9567 24.789H4.29929L8.3193 17.379C8.3412 17.3382 8.27669 17.2482 8.22269 17.2434C3.92699 16.8534 0.562195 13.2534 0.562195 8.8707C0.562195 4.227 4.33919 0.462896 8.99879 0.462896C9.85177 0.461958 10.7 0.590109 11.5146 0.842996L10.44 4.4538Z"
            fill="#006E53"
          />
        </svg>
      );
      break;
    case "mtn":
      icon = (
        <svg
          width="34"
          height="18"
          viewBox="0 0 34 18"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1946 6.0376V11.5166H12.696V8.44345L11.6951 9.92443H10.9107L9.81019 8.44345V11.5166H8.44043V6.0376H9.82189L11.4024 8.18589L12.819 6.0376H14.1946ZM14.6277 7.27857V6.0376H19.7438V7.27857H17.9526V11.5166H16.4248V7.27857H14.6277ZM25.3809 6.0376V11.5166H24.1224L21.5468 8.38492V11.5166H20.177V6.0376H21.5409L24.0053 9.05809V6.0376H25.3809Z"
            fill="black"
          />
          <path
            d="M16.8585 17.2415C12.4332 17.2415 8.25951 16.4161 5.11024 14.9117C1.81463 13.3371 0 11.1946 0 8.87073C0 6.54683 1.81463 4.40439 5.11024 2.82976C8.25951 1.32537 12.4332 0.5 16.8585 0.5C21.2839 0.5 25.4576 1.32537 28.6068 2.82976C31.9024 4.40439 33.7171 6.54683 33.7171 8.87073C33.7171 11.1946 31.9024 13.3371 28.6068 14.9117C25.4576 16.4161 21.2839 17.2415 16.8585 17.2415ZM16.8585 1.73512C12.6088 1.73512 8.62829 2.51951 5.64293 3.9478C2.8039 5.30585 1.23512 7.0561 1.23512 8.87659C1.23512 10.6971 2.79805 12.4473 5.64293 13.7995C8.62829 15.2278 12.6146 16.0122 16.8585 16.0122C21.1024 16.0122 25.0888 15.2278 28.0741 13.7995C30.9132 12.4473 32.4819 10.6912 32.4819 8.87659C32.4819 7.06195 30.919 5.30585 28.0741 3.95366C25.0888 2.51951 21.1083 1.73512 16.8585 1.73512Z"
            fill="black"
          />
        </svg>
      ); // Icon for successful
      break;
    case "airtel":
      icon = <span className=" capitalize"></span>;
      break;
    default:
      icon = null; // No icon if status is unknown
  }

  // Render the icon in your JSX
  return (
    <div>
      {icon} {/* This will render the icon assigned above */}
    </div>
  );
};

