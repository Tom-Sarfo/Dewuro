interface AdFormatRowProps {
  format: string;
  description: string;
  price: number;
  count: number;
}

const AdFormatRow = ({
  format,
  description,
  price,
  count,
}: AdFormatRowProps) => (
  <tr className="border-b border-gray-100">
    <td className="py-6">
      <span className="bg-[#7655FA]/10 text-[#7655FA] px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap inline-block">
        {format}
      </span>
    </td>
    <td className="py-6 px-4 text-gray-600">{description}</td>
    <td className="py-6 text-right whitespace-nowrap font-semibold">
      ${price} ({count})
    </td>
  </tr>
);

const AdFormats = () => {
  const formats = [
    {
      format: "Mentions",
      description: "Talk about product in content",
      price: 72,
      count: 5,
    },
    {
      format: "Banner display",
      description: "Subtle product banner placement within daily content",
      price: 54,
      count: 3,
    },
    {
      format: "Hybrid",
      description: "Both Mentions and banner placement of product in content",
      price: 120,
      count: 10,
    },
  ];

  return (
    <div className="p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b border-gray-200">
            <th className="pb-4 font-semibold">Ad format</th>
            <th className="pb-4 font-semibold">Description</th>
            <th className="pb-4 text-right font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {formats.map((format, index) => (
            <AdFormatRow key={index} {...format} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdFormats;
