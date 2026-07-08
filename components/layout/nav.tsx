import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/nav/mobile-nav";
import { mainMenu } from "@/menu.config";
import { siteConfig } from "@/site.config";
import { cn } from "@/lib/utils";
import Logo from "@/public/assets/logo_light.svg";
import Image from "next/image";
import Link from "next/link";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export function Nav({ className, children, id }: NavProps) {
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-foreground text-background superstar", "border-none", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-5xl mx-auto py-4 px-6 sm:px-8 uppercase flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-4 items-center"
          href="/"
        >
          <Image
            src={Logo}
            alt="Logo"
            loading="eager"
            // className="dark:invert"
            width={42}
            height={26.44}
            className="w-36"
          />
          {/* <h2 className="text-lg">{siteConfig.site_name}</h2> */}
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <div className="mx-2 hidden md:flex">
            {Object.entries(mainMenu).map(([key, href]) => (
              <Button key={href} asChild variant="ghost" size="lg">
                <Link href={href} className="text-lg">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </Link>
              </Button>
            ))}
          </div>
          <Button asChild className="hidden px-button text-lg sm:flex">
            <Link href="https://www.paypal.com/donate/?hosted_button_id=RUGEY8J38GKU4&fbclid=IwZXh0bgNhZW0CMTEAAR3zgSZcImCLTqA2kp7k-JkWzn2axuD_yuD6vpf0awLrN42leFUIDYroIhM_aem_DlQq1v5p6fbh7QZeFX5VwA">donate</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
