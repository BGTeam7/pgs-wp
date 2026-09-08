"use client"

import { Section, Container, Prose } from "@/components/craft";
import Image from "next/image";
import React, {useState} from "react";
import Team from "./members"
import TeamCard from "@/components/teamcard/teamcard"
import { FaCode, FaPalette, FaPen, FaMusic } from "react-icons/fa";
// import glitch from "./public/assets/glitch.svg"

export default function TeamPage(){

    const [
        activeRole,
        setActiveRole,
    ] = useState("Production");

    const handleRadioChange = (value: string) => {
        setActiveRole(value);
        console.log(value);
    };

    const role = Team.filter(member => 
        member.team.includes(activeRole)
    );

    var color;

    switch(activeRole) {
        case "Production":
            color = "bg-purple-300";
            break;
        case "Development":
            color = "bg-blue-300";
            break;
        case "Art":
            color = "bg-red-300";
            break;
        case "Audio":
            color = "bg-yellow-200";
            break;
        case "Writing":
            color = "bg-green-300";
            break;
    }

    return (
        <div>
            <Image
                className="mb-10 w-full"
                src="/assets/glitch.svg"
                alt="header glitch cover"
                width={800}
                height={400}/>
        <section>
            <div className="sm:ml-10 mb-4 sm:flex gap-5">
                <h1 className="text-2xl md:text-4xl text-center sm:text-left">WHO ARE WE?</h1>
                <div className="block blockgradient my-3 flex-auto"></div>
            </div>
            <div className="mx-4 md:mx-24 items-center flex flex-col md:flex-row gap-8">
                <img src="/assets/logo_main_light.svg" className="w-40 h-full justify-center"/>
                <p className="text-lg">Pixel Games Studios is our game development branch at Boundless Gamers.
                    As a nonprofit initiative, the game will financially support Extra Life, Gamers Outreach, and Stack Up.
The team is comprised of a unique blend of talent, including students, seasoned professionals, and veteran developers from the gaming industry.
                </p>
            </div>
        </section>

        <section>
            <div className="flex justify-center gap-5 m-8">
                <div className="block blockgradient rotate-180 my-4 w-32">
                </div>
                <h1 className="text-center text-2xl md:text-5xl sm:ml-0 w-max">OUR TEAM</h1>
                <div className="block blockgradient my-4 w-32">
                </div>
            </div>
            <div className="hidden md:block">
                <div className="md:grid grid-cols-3 md:grid-cols-5 mx-4 md:mx-24 md:bg-navy rounded-r-2xl border-l-4 border-solid border-navy text-sm md:text-xl text-navy">
                    <div className="radioButton bg-purple-300">
                        <input
                            type="radio"
                            id="Production"
                            value="Production"
                            checked={activeRole === "Production"}
                            onChange={()=>handleRadioChange("Production")}
                        />
                        <label htmlFor="Production">production</label>
                    </div>
                    <div className="radioButton bg-blue-300">
                        <input
                            type="radio"
                            id="Development"
                            value="Development"
                            checked={activeRole === "Development"}
                            onChange={()=>handleRadioChange("Development")}
                        />
                        <label htmlFor="Development">Development</label>
                    </div>
                    <div className="radioButton bg-red-300">
                        <input
                            type="radio"
                            id="Art"
                            value="Art"
                            checked={activeRole === "Art"}
                            onChange={()=>handleRadioChange("Art")}
                        />
                        <label htmlFor="Art">Art</label>
                    </div>
                    <div className="radioButton bg-yellow-200">
                        <input
                            type="radio"
                            id="Audio"
                            value="Audio"
                            checked={activeRole === "Audio"}
                            onChange={()=>handleRadioChange("Audio")}
                        />
                        <label htmlFor="Audio">Audio</label>
                    </div>
                    <div className="radioButton bg-green-300">
                        <input
                            type="radio"
                            id="Writing"
                            value="Writing"
                            checked={activeRole === "Writing"}
                            onChange={()=>handleRadioChange("Writing")}
                        />
                        <label htmlFor="Writing">Writing</label>
                    </div>
                </div>
                <div className={"mb-12 flex flex-wrap justify-center gap-3 md:gap-6 mx-4 md:mx-24 bundle border-navy border-solid border-4 border-r-0 md:border-r-4 md:border-t-0 p-10 " + color}>
                    {role.map((e) => {
                        return (
                            <TeamCard r={e.team} name={e.name} pronouns={e.pronouns} role={e.role} github={e.github} linkedin={e.linkedin} portfolio={e.portfolio} img={e.photo} fact={e.fact}/>
                        );
                    })}
                </div>
            </div>
            <div className="flex md:hidden">
                <div className={"h-96 overflow-scroll mb-12 w-full flex flex-wrap justify-center gap-3 ml-4 md:mx-24 border-navy border-solid border-4 border-r-0 md:border-r-4 md:border-t-0 p-10 max-h-min " + color}>
                    {role.map((e) => {
                        return (
                            <TeamCard r={e.team} name={e.name} pronouns={e.pronouns} role={e.role} github={e.github} linkedin={e.linkedin} portfolio={e.portfolio} img={e.photo} fact={e.fact}/>
                        );
                    })}
                </div>
                <div className="mr-4 h-96 flex flex-col justify-between text-navy">
                    <div className="mradioButton bg-purple-300 h-full">
                        <input
                            type="radio"
                            id="Production"
                            value="Production"
                            checked={activeRole === "Production"}
                            onChange={()=>handleRadioChange("Production")}
                        />
                        <label htmlFor="Production">
                            <img src="/assets/logo_main_light.svg" className="w-5"/>
                        </label>
                    </div>
                    <div className="mradioButton bg-blue-300 h-full">
                        <input
                            type="radio"
                            id="Development"
                            value="Development"
                            checked={activeRole === "Development"}
                            onChange={()=>handleRadioChange("Development")}
                        />
                        <label htmlFor="Development"><FaCode/></label>
                    </div>
                    <div className="mradioButton bg-red-300 h-full">
                        <input
                            type="radio"
                            id="Art"
                            value="Art"
                            checked={activeRole === "Art"}
                            onChange={()=>handleRadioChange("Art")}
                        />
                        <label htmlFor="Art"><FaPalette/></label>
                    </div>
                    <div className="mradioButton bg-yellow-200 h-full">
                        <input
                            type="radio"
                            id="Audio"
                            value="Audio"
                            checked={activeRole === "Audio"}
                            onChange={()=>handleRadioChange("Audio")}
                        />
                        <label htmlFor="Audio"><FaMusic/></label>
                    </div>
                    <div className="mradioButton bg-green-300 h-full">
                        <input
                            type="radio"
                            id="Writing"
                            value="Writing"
                            checked={activeRole === "Writing"}
                            onChange={()=>handleRadioChange("Writing")}
                        />
                        <label htmlFor="Writing"><FaPen/></label>
                    </div>
                </div>

            </div>
            

            
            <p className="text-center">More Coming Soon!</p>
        </section>
        </div>
        
    );
}