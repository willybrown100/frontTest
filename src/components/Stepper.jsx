import React, { useState } from 'react'

// export default function Stepper() {
//     const steps = ["fill info","make payment","view receipt"]
//   return (
//     <div>
//         {steps.map((step,i)=><div>
//             <p className="text-black">{step}</p>
//         </div>)}
//     </div>

// import React, { useState } from 'react';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ['fill info', 'make payment', 'view receipt'];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Stepper Navigation */}
      <div className="grid gap-x-2 grid-cols-3 ">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center w-auto relative mx-12"> {/* Added mx-4 for space */}
            {/* Step Text */}
            <div
              className={`text-lg mb-1 ${
                currentStep > index ? 'text-btn font-bold' : 'text-gray-400'
              }`}
            >
              {step}
            </div>
            {/* Line Under Text */}
            <div
              className={`absolute w-40 h-[0.2rem] transition-all duration-300 ${
                currentStep > index ? 'bg-btn' : 'bg-gray-300'
              }`}
              style={{ bottom: '-2px' }}
            ></div>
          </div>
        ))}
      </div>

      {/* Stepper Actions */}
      <div className="flex mt-8 space-x-4">
        {/* <button
          onClick={handlePrevious}
          disabled={currentStep === 1}
          className="px-4 py-2 text-white bg-gray-500 rounded disabled:opacity-50"
        >
          Previous
        </button> */}
        <button
          onClick={handleNext}
          disabled={currentStep === steps.length}
          className="px-4 py-2 text-white bg-blue-500 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

// export default Stepper;


export default Stepper;











