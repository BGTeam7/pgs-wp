import { Section, Container, Prose } from "@/components/craft";
import Image from "next/image";
import { Job } from "@/components/jobs/job";
// import glitch from "./public/assets/glitch.svg"

import {
  getPostsPaginated,
  getAllAuthors,
  getAllTags,
  getAllCategories,
  searchAuthors,
  searchTags,
  searchCategories,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { PostCard } from "@/components/posts/post-card";
import { FilterPosts } from "@/components/posts/filter";
import { FilterNews } from "@/components/posts/news_filter";
import { SearchInput } from "@/components/posts/search-input";

import type { Metadata } from "next";

export const dynamic = "auto";
export const revalidate = 3600;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    author?: string;
    tag?: string;
    // category?: string;
    page?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;
  const { author, tag, page: pageParam, search } = params;

  // Handle pagination
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;

  // Fetch data based on search parameters using efficient pagination
  const [postsResponse, authors, tags, categories] = await Promise.all([
    getPostsPaginated(page, postsPerPage, { author, tag, category:"6", search }),
    search ? searchAuthors(search) : getAllAuthors(),
    search ? searchTags(search) : getAllTags(),
    search ? searchCategories(search) : getAllCategories(),
  ]);

  const { data: posts, headers } = postsResponse;
  const { total, totalPages } = headers;

  // Create pagination URL helper
  const createPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (newPage > 1) params.set("page", newPage.toString());
    // params.set("category", "news");
    if (author) params.set("author", author);
    if (tag) params.set("tag", tag);
    if (search) params.set("search", search);
    return `/posts${params.toString() ? `?${params.toString()}` : ""}`;
  };
    return (
        <div>
            <Image
                className="mb-10 w-full"
                src="/assets/glitch.svg"
                alt="header glitch cover"
                width={800}
                height={400}/>
            <Section className="space-y-8">
                    <h2 className="superstar divider text-3xl font-medium text-navy" data-position="left"><span className="min-w-max">join us!</span></h2>
                    
                    <p>We accept applications on a rolling basis, they are volunteer and remote.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</p>
                    <div className="flex justify-center">
                        
                        <h2 className="items-end superstar text-navy text-3xl divider w-1/2"><span className="min-w-max">available positions</span></h2>
                    </div>
                    <hr className="h-1.5 bg-navy"/>
                    {posts.length > 0 ? (
                    <div>
                        {posts.map((post) => (
                        <Job key={post.id} post={post} />
                        ))}
                    </div>
                    ) : (
                    <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
                        <p>No posts found</p>
                    </div>
                    )}
            </Section>
        </div>
        
    );
}