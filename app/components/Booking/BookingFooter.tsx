import type { FC } from "react";
import NextIcon from "~/svg/NextIcon";
import PrevIcon from "~/svg/PrevIcon";

interface BookingFooterProps {
  onNext: () => void;
  onPrev: () => void;
  onChat: () => void;
  currentStep: number;
}

const BookingFooter: FC<BookingFooterProps> = ({
  onNext,
  onPrev,
  onChat,
  currentStep,
}) => (
  <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 flex justify-between items-center px-4 py-3 bg-[#f9f9f9]">
    {/* Chat Button */}
    <button
      className="text-[#805CF7] font-medium px-4 py-2 bg-white border rounded-md"
      onClick={onChat}
    >
      Chat now
    </button>

    {/* Nav Buttons */}
    <div className="flex items-center gap-2">
      {currentStep > 1 && (
        <button
          className={`p-2 rounded-full transition ${
            currentStep === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-[#805CF7] text-white hover:bg-[#6e4de1]"
          }`}
          onClick={onPrev}
          disabled={currentStep === 1}
          aria-label="Previous Step"
        >
          <PrevIcon className="w-5 h-5" />
        </button>
      )}

      <button
        className="text-white p-2 rounded-full bg-[#805CF7] hover:bg-[#6e4de1] transition"
        onClick={onNext}
        aria-label="Next Step"
      >
        <NextIcon className="w-5 h-5" />
      </button>
    </div>
  </div>
);

export default BookingFooter;
