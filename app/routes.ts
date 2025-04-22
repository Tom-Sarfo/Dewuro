import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  layout("./routes/home.tsx", [
    index("./routes/dashboard.tsx"),
    route("goinglive", "./routes/AdDetailScreen.tsx", [
      index("./components/AdTypeUploadSection.tsx"),
      route("details", "./routes/GoLiveDetails.tsx"),
    ]),
    route("adspace-booking", "./routes/AdSpaceBooking.tsx", [
      index("./components/Booking/AdBookingStepOne.tsx"),
      route("step-two", "./components/Booking/AdBookingStepTwo.tsx"),
    ]),
    route("creator-profile", "./routes/creatorProfile.tsx"),
  ]),
] satisfies RouteConfig;
