import ArtIcon from "./svg/Art";
import FoodIcon from "./svg/FoodIcon";
import OthersIcon from "./svg/OthersIcon";
import ShirtIcon from "./svg/ShirtIcon";
import SnapchatIcon from "./svg/SnapchatIcon";
import TechnologyIcon from "./svg/TechnologyIcon";
import TelevisionIcon from "./svg/TelevisionIcon";
import TiktokIcon from "./svg/TiktokIcon";
import XtwitterIcon from "./svg/XtwitterIcon";
import YouTubeIcon from "./svg/YouTubeIcon";

export const filters = ["All", "Top Creators", "Niche", "Platform", "Ad type"];
export const adData = [
  {
    title: "Bants, Rants and conffessions",
    thumbnail:
      "https://afripods-data.s3.amazonaws.com/podcast/cover_image/c0511a3c9b98015ef7bd429c82709004aecab7a4209e935985ab894cf8b63252.jpeg",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "Yawa of the day",
    thumbnail:
      "https://www.kwadwosheldonstudios.com/img/use/logos/shows/YOD-08.png",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "The Break Down - Where them boys dey",
    thumbnail:
      "https://yt3.googleusercontent.com/dXI1qoj7N0LialqRmWvDy0YawrrkMy20CIIEuyHpINvSCHCgGstVnSPBNIzw8vj_y8hqWhLWzEs=s900-c-k-c0x00ffffff-no-rj",
    price: 65,
    goLiveDate: "20/12/2024",
  },
  {
    title: "Evo - Pilot premier",
    thumbnail: "https://sparkmag.live/wp-content/uploads/2024/04/evor.jpg",
    price: 80,
    goLiveDate: "25/12/2024",
  },
];

export const creators = [
  {
    name: "Scanty Explore",
    logoUrl:
      "https://yt3.googleusercontent.com/nCxYgQWiq1wcN90FH14BgS066q_dNdWwhuM0oCLliNAV8XARlNcMXbi8qAZciwywkdCCsJfyMg=s900-c-k-c0x00ffffff-no-rj",
    price: 50,
    tag: "SE",
  },
  {
    name: "Abby’s Kitchen",
    logoUrl:
      "https://static.wixstatic.com/media/b1059f_6c0bb4a21e524c25a3f39c72d57b9d3a~mv2.jpg/v1/fit/w_2500,h_1330,al_c/b1059f_6c0bb4a21e524c25a3f39c72d57b9d3a~mv2.jpg",
    price: 42,
    tag: "AK",
  },
];

export const nicheFilters = [
  { label: "Food", icon: FoodIcon },
  { label: "Fashion", icon: ShirtIcon },
  { label: "Technology", icon: TechnologyIcon },
  { label: "Entertainment", icon: TelevisionIcon },
  { label: "Art", icon: ArtIcon },
  { label: "Others", icon: OthersIcon },
];

export const platformFilters = [
  { label: "YouTube", icon: YouTubeIcon },
  { label: "TikTok", icon: TiktokIcon },
  { label: "SnapChat", icon: SnapchatIcon },
  { label: "X (twitter)", icon: XtwitterIcon },
];

export const creatorFilters = [
  "Mega/Celebrity - score (96-100)",
  "Macro  -  score (81 - 95)",
  "Mid-Tier  - score (61 - 80)",
  "Micro  -  score (31 - 60)",
  "Nano  -  score (0 - 30)",
];
