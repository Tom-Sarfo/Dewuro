import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

type BidModalProps = {
  isOpen: boolean;
  onClose: () => void;
  highestBid: number;
  onBidSubmit: (amount: number) => void;
};

const PlaceBidModal: React.FC<BidModalProps> = ({
  isOpen,
  onClose,
  highestBid,
  onBidSubmit,
}) => {
  const [bidAmount, setBidAmount] = useState<number>(0);

  const handleSubmit = () => {
    if (bidAmount > highestBid) {
      onBidSubmit(bidAmount);
      setBidAmount(0);
      onClose();
    } else {
      alert('Your bid must be higher than the current bid!');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Place Your Bid</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-1">Current highest bid</p>
        <p className="text-2xl font-bold text-[#7655FA] mb-4">${highestBid}</p>

        <label htmlFor="bidAmount" className="block font-medium mb-1">Your Bid Amount</label>
        <Input
          id="bidAmount"
          type="number"
          value={bidAmount}
          onChange={(e) => setBidAmount(Number(e.target.value))}
          placeholder="Enter your bid"
          className="mb-4"
        />

        <Button className="w-full bg-[#7655FA] text-white" onClick={handleSubmit}>
          Confirm Bid
        </Button>
      </div>
    </div>
  );
};

export default PlaceBidModal;
