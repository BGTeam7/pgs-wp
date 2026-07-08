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
  return (
    <div>
        <h3 className="superstar text-navy text-2xl">Animation Specialist</h3>
        <div className="flex justify-between align-bottom p-8">
            <ul className="list-disc">
                <li>aldksfja</li>
                <li>aldksfja</li>
            </ul>
            <Button className="px-button">Apply</Button>
        </div>
        <hr className="h-1.5 bg-navy"/>
    </div>
  )
}