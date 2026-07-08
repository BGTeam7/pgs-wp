import { Section, Container, Prose } from "@/components/craft";
import Image from "next/image";
import { Job } from "@/components/jobs/job";
// import glitch from "./public/assets/glitch.svg"

export default async function Page(){
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
                    <Job/>
                    <Job/>
                    <Job/>
                    <Job/>
                    <Job/>
                    
            </Section>
        </div>
        
    );
}