import React from "react"

interface GiftItemProps {
  brandLogo: string
  brand: string
  product: string
  impressed: string
  date: string
  duration: string
}

const GiftItem: React.FC<GiftItemProps> = ({
  brandLogo,
  brand,
  product,
  impressed,
  date,
  duration,
}) => {
  return (
    <div className="flex gap-3 items-start">
      <img src={brandLogo} alt={brand} className="w-10 h-10 object-contain" />
      <div>
        <h3 className="font-semibold text-base">{product}</h3>
        <p className="text-sm text-gray-700">{brand}</p>
        <p className="text-sm text-teal-600">{impressed}</p>
        <p className="text-sm text-gray-500">{date} • {duration}</p>
      </div>
    </div>
  )
}

export default GiftItem
