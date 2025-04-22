const FeaturedCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => (
  <div className="flex-1">
    <div className="aspect-[4/3] bg-gray-200 rounded-lg mb-4"></div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Featured = () => {
  const awards = [
    {
      title: "Gh media influencer of the year award winner",
      description: "scanty was crowned the new media influencer of the year",
      image: "",
    },
    {
      title: "Media Excellence award winner",
      description: "scanty was crowned the new media influencer of the year",
      image: "",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Featured</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <FeaturedCard key={index} {...award} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
