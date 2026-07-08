// Craft Imports
import { Section, Container, Prose } from "@/components/craft";
import Image from "next/image";

// Next.js Imports
import Link from "next/link";

// Icons
import { File, Pen, Tag, Diamond, User, Folder } from "lucide-react";
import { WordPressIcon } from "@/components/icons/wordpress";
import { NextJsIcon } from "@/components/icons/nextjs";

// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <main>
      <div className="bg-[#111111] space-y-24 md:grid grid-cols-2 gap-20 p-8 md:p-24">
            <Image 
              src="/assets/logo_main_light.svg" 
              className="w-full self-center"
              alt = "logo main light"
              width = {800}
              height = {800}
              />
            <h1 className="text-white self-center text-center md:text-left text-2xl md:text-6xl">
                creating games for good
            </h1>
        </div>
        <div>
            <Image 
              src="/assets/hero_divider.svg" 
              className="w-full self-center"
              alt = "logo main light"
              width = {800}
              height = {800}
              />
        </div>
        <section>
            <div className="flex justify-center gap-5">
                <div className="block bg-pink-300 my-5 w-32">
                </div>
                <h1 className="text-center text-2xl md:text-6xl sm:ml-0 w-max">IT'S A CONSPIRACY!</h1>
                <div className="block bg-pink-300 my-5 w-32">
                </div>
            </div>
            <div className="mx-10 sm:mx-48 flex">
                <Link href="/">
                    <Image 
                      src="/assets/conspiracy_placeholder.png" 
                      className="w-full self-center"
                      alt = "logo main light"
                      width = {800}
                      height = {800}
                      />
                </Link>
                
            </div>
            <h2 className="text-center mt-8 textgradient">COMING SOON...</h2>
            <h2 className="text-center text-2xl">Stay tuned for more!</h2>
        </section>
    </main>
  );
}

const HomePage = () => {
  return (
    <main>
      <div className="bg-[#111111] space-y-24 md:grid grid-cols-2 gap-20 p-8 md:p-24">
            <Image 
              src="/assets/logo_main_light.svg" 
              className="w-full self-center"
              alt = "logo main light"
              width = {800}
              height = {800}
              />
            <h1 className="text-white self-center text-center md:text-left text-2xl md:text-6xl">
                creating games for good
            </h1>
        </div>
        <div>
            <Image 
              src="/assets/logo_main_light.svg" 
              className="w-full self-center"
              alt = "logo main light"
              width = {800}
              height = {800}
              />
        </div>
        <section>
            <div className="flex justify-center gap-5">
                <div className="block bg-pink-300 my-5 w-32">
                </div>
                <h1 className="text-center text-2xl md:text-6xl sm:ml-0 w-max">IT'S A CONSPIRACY!</h1>
                <div className="block bg-pink-300 my-5 w-32">
                </div>
            </div>
            <div className="mx-10 sm:mx-48 flex">
                <Link href="/">
                    <Image 
                      src="/assets/conspiracy_placeholder.png" 
                      className="w-full self-center"
                      alt = "logo main light"
                      width = {800}
                      height = {800}
                      />
                </Link>
                
            </div>
            <h2 className="text-center mt-8 textgradient">COMING SOON...</h2>
            <h2 className="text-center text-2xl">Stay tuned for more!</h2>
        </section>
    </main>
  )
}

// This is just some example TSX
const ToDelete = () => {
  return (
    <main className="space-y-6">
      <Prose>
        <h1>Headless WordPress built with the Next.js</h1>

        <p>
          This is <a href="https://github.com/9d8dev/next-wp">next-wp</a>,
          created as a way to build WordPress sites with Next.js at rapid speed.
          This starter is designed with{" "}
          <a href="https://ui.shadcn.com">shadcn/ui</a>,{" "}
          <a href="https://craft-ds.com">craft-ds</a>, and Tailwind CSS. Use{" "}
          <a href="https://components.work">brijr/components</a> to build your
          site with prebuilt components. The data fetching and typesafety is
          handled in <code>lib/wordpress.ts</code> and{" "}
          <code>lib/wordpress.d.ts</code>.
        </p>
      </Prose>

      <div className="flex justify-between items-center gap-4">
        {/* Vercel Clone Starter */}
        <div className="flex items-center gap-3">
          <a
            className="h-auto block"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Fnext-wp&env=WORDPRESS_URL,WORDPRESS_HOSTNAME&envDescription=Add%20WordPress%20URL%20with%20Rest%20API%20enabled%20(ie.%20https%3A%2F%2Fwp.example.com)%20abd%20the%20hostname%20for%20Image%20rendering%20in%20Next%20JS%20(ie.%20wp.example.com)&project-name=next-wp&repository-name=next-wp&demo-title=Next%20JS%20and%20WordPress%20Starter&demo-url=https%3A%2F%2Fwp.9d8.dev"
          >
            {/* eslint-disable-next-line */}
            <img
              className="not-prose my-4"
              src="https://vercel.com/button"
              alt="Deploy with Vercel"
              width={105}
              height={32.62}
            />
          </a>
          <p className="text-sm! sr-only sm:not-sr-only text-muted-foreground">
            Deploy with Vercel in seconds.
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <WordPressIcon className="text-foreground" width={32} height={32} />
          <NextJsIcon className="text-foreground" width={32} height={32} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            Posts{" "}
            <span className="block text-sm text-muted-foreground">
              All posts from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            Authors{" "}
            <span className="block text-sm text-muted-foreground">
              List of the authors from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Content by tags from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <Diamond size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://github.com/9d8dev/next-wp/blob/main/README.md"
        >
          <Folder size={32} />
          <span>
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `next-wp`
            </span>
          </span>
        </a>
      </div>
    </main>
  );
};
