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
  ]),
] satisfies RouteConfig;
