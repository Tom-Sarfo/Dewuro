import {
  type RouteConfig,
  route,
  layout,
  index,
} from "@react-router/dev/routes";

export default [
  layout("./routes/home.tsx", [index("./routes/dashboard.tsx")]),
] satisfies RouteConfig;
