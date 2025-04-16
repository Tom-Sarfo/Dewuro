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
      index("./routes/AdTypeUploadSection.tsx"),
      route("details", "./routes/TabbedContent.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
