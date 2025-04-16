import BidRanking from "~/components/BidRanking";
import DetailsTabs from "~/components/DetailsTabs";
import { mockBids } from "~/utils";


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
      content: <BidRanking bids={mockBids} />
    },
    {
      label: "Ad files",
      content: <p>No offers available at the moment.</p>,
    },
  ];
function GoLiveDetails() {
  return <DetailsTabs tabs={tabItems}/>;
}

export default GoLiveDetails;
