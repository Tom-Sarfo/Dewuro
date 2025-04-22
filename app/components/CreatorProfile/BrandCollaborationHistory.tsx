import CollaborationStepper from "./CollaborationStepper";
const BrandCollaborationHistory = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="font-bold text-xl mb-4">Brand Collaboration History</h2>

      <CollaborationStepper
        brand="Taptap send"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeVdsvELOFki1dcywiYrEFOLa5RAOPFKUsA&s"
        impressedText="Impressed by Taptap send"
        duration="2 yrs 5 mons"
        steps={[
          {
            role: "Brand Ambassador",
            period: "Jan 2025 - Present",
            duration: "3 mons",
            description: "detail",
            impact:
              "Modeled in Ad for commercials, started the taptap challenge on Tiktok",
          },
          {
            role: "YouTube Video mention",
            period: "July 2024 - Nov 2024",
            duration: "5 mons",
            description: "detail",
            impact:
              "Impacted the number of users on the platform from 80k to about 1.5m",
          },
          {
            role: "Sponsored Instagram Post",
            period: "July 2023 - Nov 2023",
            duration: "5 mons",
            description: "detail",
          },
        ]}
      />

      <CollaborationStepper
        brand="Caveman Watches"
        logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU-3sgmIVsAMcln0VKsrACNUZpXtpekkLOmw&s"
        impressedText="Impressed by Caveman"
        duration="Jan 2023 • 3 days"
        steps={[
          {
            role: "Product Gifting",
            period: "Jan 2023",
            duration: "3 days",
          },
        ]}
      />
    </div>
  );
};

export default BrandCollaborationHistory;
