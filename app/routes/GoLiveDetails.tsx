import DetailsTabs from "~/components/DetailsTabs";

const tabItems = [
    {
      label: "Details",
      content: (
        <p>
          <span className="font-medium text-gray-500">This nonsense must stop</span> is a movement by the two
          controversial artist in the music industry. They both hold opposing view on how stage craft should look
          like...<span className="text-[#805CF7] cursor-pointer">view more</span>
        </p>
      ),
    },
    {
      label: "Offers",
      content: <p>No offers available at the moment.</p>,
    },
    {
      label: "Ad files",
      content: <p>No ad files uploaded yet.</p>,
    },
  ];

function GoLiveDetails() {
  return <DetailsTabs tabs={tabItems}/>;
}

export default GoLiveDetails;
