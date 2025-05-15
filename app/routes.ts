import { type RouteConfig, route } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
	route("api/preview/enable", "routes/api/preview/enable.ts"),
	route("api/preview/disable", "routes/api/preview/disable.ts"),
	// route("api/set-theme", "routes/api/set-theme.ts"),
	...(await flatRoutes({})),
] satisfies RouteConfig;
