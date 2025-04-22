import AdSpaceCard from "../Common/AdSpaceCard";

const AvailableAdSpace = () => {
  const adSpaces = [
    {
      name: "Scanty Explore",
      price: 50,
      logoUrl:
      "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj",
      tag: "SE",
      adType: "Mention",
    },
    {
      name: "Scanty Explore",
      price: 85,
      logoUrl:
      "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj",
      tag: "SE",
      adType: "Sponsored post",
    },
    {
      name: "Scanty Explore",
      price: 50,
      logoUrl:
      "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj",
      tag: "SE",
      adType: "Banner display",
    },
    {
      name: "Scanty Explore",
      price: 50,
      logoUrl:
      "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj",
      tag: "SE",
      adType: "Hybrid",
    },
  ];

  return (
    <div className="space-y-3 p-4">
      {adSpaces.map((adSpace, index) => (
        <AdSpaceCard key={index} {...adSpace} />
      ))}
    </div>
  );
};

export default AvailableAdSpace;
