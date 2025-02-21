import { useLiveMode } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/remix";
import { useContext } from "react";
import { SanityContext } from "~/sanity/provider";

export default function LiveVisualEditing() {
	// Client-side only - window.ENV is guaranteed to exist
	const client = useContext(SanityContext);

	useLiveMode({ client });

	return <VisualEditing />;
}
