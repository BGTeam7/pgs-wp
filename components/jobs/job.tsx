import { Section, Container } from "@/components/craft";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { mainMenu, contentMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

import { Post } from "@/lib/wordpress.d";
import { cn } from "@/lib/utils";
import { truncateHtml } from "@/lib/metadata";
import { Button } from "../ui/button";

export function Job({ post }: { post: Post }) {
  const category = post._embedded?.["wp:term"]?.[0]?.[0] ?? null;
  // const tag = post._embedded?.["wp:term"]?.[0]?.[0] ?? null;
  return (
    <div>
        <div
          dangerouslySetInnerHTML={{
            __html: post.title?.rendered || "Untitled Post",
          }}
          className="superstar text-navy text-2xl"
        ></div>
        {/* <h3 className="superstar text-navy text-2xl">Animation Specialist</h3> */}
        <div className="flex justify-between align-bottom p-8">
            <div className="text-sm">
              {post.excerpt?.rendered
                ? truncateHtml(post.excerpt.rendered, 12)
                : "No excerpt available"}
            </div>
            <Link href={`/posts/${post.slug}`}>
              <Button className="px-button">Apply</Button>
            </Link>
            
        </div>
        <hr className="h-1.5 bg-navy"/>
    </div>
  )
}