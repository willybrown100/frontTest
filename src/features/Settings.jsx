import React, { useRef } from 'react'

export default function Settings() {
      const fileRef = useRef(null); ;
    const handleButtonClick = function (
      e
    ) {
      e.preventDefault();
      if (fileRef.current) {
        fileRef.current.click();
      }
    };
  const handleFileChange = (event) => {
    // we take the file the user select and store it in "file" and converted it to base64 string
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      localStorage.setItem("fileName", file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          const base64 = reader.result.split(",")[1];
          // localStorage.setItem("pdf",base)
          updatePdfFile(base64);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="grid grid-cols-[400px,405px] px-8 gap-x-3">
      <div className="space-y-6">
        <div className="border border-[#D7E1F4]  flex flex-col gap-y-3 place-items-center rounded-xl p-3">
          <div className="rounded-full">
            <img
              src="/images/useravatar (2).png"
              alt="avatar"
              className="rounded-full"
            />
          </div>
          <input
            type="file"
            ref={fileRef}
            accept="image"
            onChange={handleFileChange}
            className="hidden"
          />
          <button onClick={handleButtonClick} className="text-btn flex gap-x-2 items-center">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 4.09922V4.84922C5.26675 4.84922 5.51343 4.70754 5.64783 4.47712L5 4.09922ZM6.4 1.69922V0.949219C6.13325 0.949219 5.88657 1.0909 5.75216 1.32132L6.4 1.69922ZM11.6 1.69922L12.2478 1.32132C12.1134 1.0909 11.8667 0.949219 11.6 0.949219V1.69922ZM13 4.09922L12.3522 4.47712C12.4866 4.70754 12.7332 4.84922 13 4.84922V4.09922ZM1.75 14.2992V6.09922H0.25V14.2992H1.75ZM3 4.84922H5V3.34922H3V4.84922ZM5.64783 4.47712L7.04783 2.07712L5.75216 1.32132L4.35217 3.72132L5.64783 4.47712ZM6.4 2.44922H11.6V0.949219H6.4V2.44922ZM10.9522 2.07712L12.3522 4.47712L13.6478 3.72132L12.2478 1.32132L10.9522 2.07712ZM13 4.84922H15V3.34922H13V4.84922ZM16.25 6.09922V14.2992H17.75V6.09922H16.25ZM16.25 14.2992C16.25 14.9896 15.6904 15.5492 15 15.5492V17.0492C16.5188 17.0492 17.75 15.818 17.75 14.2992H16.25ZM15 4.84922C15.6904 4.84922 16.25 5.40886 16.25 6.09922H17.75C17.75 4.58044 16.5188 3.34922 15 3.34922V4.84922ZM1.75 6.09922C1.75 5.40886 2.30964 4.84922 3 4.84922V3.34922C1.48122 3.34922 0.25 4.58043 0.25 6.09922H1.75ZM3 15.5492C2.30964 15.5492 1.75 14.9896 1.75 14.2992H0.25C0.25 15.818 1.48122 17.0492 3 17.0492V15.5492ZM11.25 9.69922C11.25 10.9419 10.2426 11.9492 9 11.9492V13.4492C11.0711 13.4492 12.75 11.7703 12.75 9.69922H11.25ZM9 11.9492C7.75736 11.9492 6.75 10.9419 6.75 9.69922H5.25C5.25 11.7703 6.92893 13.4492 9 13.4492V11.9492ZM6.75 9.69922C6.75 8.45658 7.75736 7.44922 9 7.44922V5.94922C6.92893 5.94922 5.25 7.62815 5.25 9.69922H6.75ZM9 7.44922C10.2426 7.44922 11.25 8.45658 11.25 9.69922H12.75C12.75 7.62815 11.0711 5.94922 9 5.94922V7.44922ZM15 15.5492H3V17.0492H15V15.5492Z"
                fill="#4169E1"
              />
            </svg>
            <span className="font-semibold capitalize">upload images</span>
          </button>
        </div>

        <div className="border border-[#D7E1F4] p-3 rounded-xl flex flex-col gap-y-3">
          <div className="flex justify-between items-center">
            <span className="capitalize text-[#4C689E]">name</span>
            <span className="text-[#4C689E] capitalize font-semibold">
              Lawal Wahab Babatunde
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4C689E] capitalize">email</span>
            <span className="text-[#4C689E]  capitalize font-semibold">
              wabdotmail@gmail.com
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4C689E] capitalize">phone number</span>
            <span className="text-[#4C689E]  capitalize font-semibold">
              0906 856 2949
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4C689E] capitalize">account status</span>
            <span className="text-[#2DAE32]  capitalize font-semibold">
              Active
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#4C689E] capitalize">referral link</span>
            <span className="text-[#4C689E]  capitalize font-semibold">
              www.subsum.com/tre/wd...
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span></span>
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
          </div>
          <div className="flex justify-start">
            <button className="capitalize text-btn font-semibold">
              edit details
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 gap-x-2 p-1 mb-3 border border-[#D7E1F4]  rounded-full ">
          <button className="capitalize p-2 font-semibold border-[#D7E1F4] rounded-full">
            change password
          </button>
          <button className="capitalize p-2 font-semibold border border-[#D7E1F4] rounded-full">
            change pin
          </button>
        </div>
        <form className="border p-2 flex flex-col gap-y-4 py-4 rounded-xl border-[#D7E1F4]">
          <div className="flex flex-col gap-y-1">
            <label className="text-[#4C689E] capitalize">
              current password
            </label>
            <input
              type="password"
              placeholder="enter current password"
              className="border border-[#D7E1F4]  bg-transparent rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-[#4C689E] capitalize">new password</label>
            <input
              type="password"
              placeholder="enter new password"
              className="border border-[#D7E1F4] bg-transparent rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-[#4C689E] capitalize">
              {" "}
              confirm new password
            </label>
            <input
              type="password"
              placeholder="enter new password"
              className="border border-[#D7E1F4] bg-transparent rounded-md p-2"
            />
          </div>
          <button className="bg-[#4169E1] p-2 rounded-lg text-center text-white capitalize font-semibold">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
