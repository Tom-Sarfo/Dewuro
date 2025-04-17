import { useState } from "react";
import { Outlet } from "react-router";
import BookingFooter from "~/components/Booking/BookingFooter";
import { useStepNavigation } from "~/hooks/useStepNavigation";
import XIcon from "~/svg/XIcon";

const adTypes = ["Sponsored post", "Shoutout", "Product review"];

const AdSpaceBooking = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const progressPercent = (step / totalSteps) * 100;

  const { handleStepChange } = useStepNavigation({
    currentStep: step,
    setStep,
    totalSteps,
    stepRoutes: {
      1: "/adspace-booking",
      2: "/adspace-booking/step-two",
      //   3: "/ad-booking/step-three",
    },
  });

  return (
    <div className="mx-auto bg-white h-screen flex flex-col pb-[70px]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3 pt-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7R2IsNY2NU1M5J4sPIqcglnj_dE0Dvung0w&s"
            alt="KJ"
            className="w-10 h-10"
          />
          <div>
            <p className="font-semibold">KalyJay (KJ)</p>
            <p className="text-sm text-gray-400">
              I cook politician for living
            </p>
          </div>
        </div>
        <XIcon className="h-7 w-7" />
      </div>

      {/* Step info */}
      <div className="px-4 py-3 border-b">
        <div className="flex justify-between items-center">
          <p className="font-semibold">Ad booking</p>
          <p className="text-sm">Step 1 of 3</p>
        </div>
        <div className="h-1 mt-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="bg-[#7655FA] h-1 transition-all duration-300 ease-in-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
      {/* Content */}
      <Outlet />
      {/* Footer buttons */}
      <BookingFooter
        onChat={() => console.log("Chat now")}
        onNext={() => handleStepChange("next")}
        onPrev={() => handleStepChange("back")}
        currentStep={step}
      />
    </div>
  );
};
export default AdSpaceBooking;
