import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export function BlogSection({ posts }: { posts: SanityDocument[] }) {
	const projectId =
		typeof window !== "undefined" ? window.ENV.PUBLIC_SANITY_PROJECT_ID : "";
	const dataset =
		typeof window !== "undefined" ? window.ENV.PUBLIC_SANITY_DATASET : "";
	const builder = imageUrlBuilder({ projectId, dataset });
	return (
		<section className="container px-4 md:px-6 py-12 md:py-24">
			<div className="flex flex-col items-center space-y-8 md:space-y-12">
				<div className="flex flex-col items-center justify-center gap-4 text-center max-w-2xl">
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight">
						Latest from <span className="text-primary">GoGenie</span>
					</h2>
					<p className="text-lg text-muted-foreground">
						Tips, insight, updates and stories from the GoGenie team to help you
						live smarter, connect better and work smarter.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
					{posts?.length > 0 ? (
						posts.map((post) => (
							<Link key={post._id} to={`/blog/${post.slug.current}`}>
								<Card className="relative flex flex-col h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
									<div className="relative aspect-[4/3]">
										{typeof window !== "undefined" ? (
											post.coverImage ? (
												<img
													className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
													src={builder
														.image(post.coverImage)
														.width(400)
														.height(300)
														.quality(90)
														.url()}
													width={400}
													height={300}
													alt={post.title}
													loading="lazy"
												/>
											) : null
										) : (
											<Skeleton className="absolute inset-0 w-full h-full rounded-t-lg" />
										)}
									</div>
									<CardHeader className="flex-1">
										<CardTitle className="line-clamp-2 text-xl mb-2">
											{post.title}
										</CardTitle>
										<CardDescription className="line-clamp-3">
											{post.description}
										</CardDescription>
									</CardHeader>
								</Card>
							</Link>
						))
					) : (
						<div className="col-span-full p-8 text-center rounded-lg bg-muted">
							<p className="text-muted-foreground">No posts found</p>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
