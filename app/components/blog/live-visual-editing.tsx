import { VisualEditing } from "@sanity/visual-editing/react-router";
import { DisablePreviewMode } from "./disable-preview";

export function SanityVisualEditing() {
	return (
		<>
			<VisualEditing />
			<DisablePreviewMode />
		</>
	);
}
