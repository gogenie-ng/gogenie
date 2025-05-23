import { PortableText } from "@portabletext/react";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Skeleton } from "../ui/skeleton";

export default function Post({ post }: { post: SanityDocument }) {
	const projectId =
		typeof window !== "undefined" ? window.ENV.PUBLIC_SANITY_PROJECT_ID : "";
	const dataset =
		typeof window !== "undefined" ? window.ENV.PUBLIC_SANITY_DATASET : "";
	const builder = imageUrlBuilder({ projectId, dataset });
	const { title, coverImage, body } = post;

	return (
		<main className="container mx-auto prose prose-lg dark:prose-invert p-4">
			{title ? <h1>{title}</h1> : null}
			{typeof window !== "undefined" ? (
				coverImage ? (
					<img
						className="float-left m-0 w-1/3 mr-4 rounded-lg"
						src={builder
							.image(coverImage)
							.width(300)
							.height(300)
							.quality(80)
							.url()}
						width={300}
						height={300}
						alt={title}
						loading="lazy"
					/>
				) : null
			) : (
				<Skeleton className="float-left m-0 w-1/3 mr-4 rounded-lg size-60" />
			)}
			{body ? <PortableText value={body} /> : null}
		</main>
	);
}
