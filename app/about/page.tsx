import { Section, Container, Prose } from "@/components/craft";
import Image from "next/image";
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
        <Section>
            
            <p>this is the abou sgst page</p>
        </Section>
        </div>
        
    );
}