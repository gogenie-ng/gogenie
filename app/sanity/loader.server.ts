import { createQueryStore } from "@sanity/react-loader";
import { createSanityClient } from "./client";

export const getLoadQuery = (env: Env) => {
	const client = createSanityClient(env);
	const queryStore = createQueryStore({ client });
	return queryStore.loadQuery;
};
