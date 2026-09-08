import {useState, useRef} from "react";
import { FaLinkedin, FaGithub, FaSuitcase } from "react-icons/fa6";



function TeamCard(props) {

    //Using useToggle Hook
    // const useToggle = (initialState) => {
    // const [toggleValue, setToggleValue] = useState(initialState);
    // const toggler = () => { setToggleValue(!toggleValue) };
    // return [toggleValue, toggler]
    // };
    // const [toggle, setToggle] = useToggle();

    var color;

    function Github() {
        if (props.github !== "") {
            return <a href={props.github}><FaGithub/></a>
        }
    }

    function Portfolio() {
        if (props.portfolio !== "") {
            return <a href={props.portfolio}><FaSuitcase/></a>
        }
    }

    function Linkedin() {
        if (props.linkedin !== "") {
            return <a href={props.linkedin}><FaLinkedin/></a>
        }
    }

    console.log(props.img + "&sz=w1000")
    var img_link = props.img + "&sz=w1000"

    return (
        <div>
            <div className="teamcard">
                <div className="w-52 sm:w-64 p-1 bg-white space-y-1">
                    <div>
                        <img referrerPolicy="no-referrer" loading="lazy" className="w-full aspect-square object-cover" src={img_link}/>
                    </div>
                    <div className="info p-2 min-h-full">
                        <h1 className="text-center text-sm ">{props.name}</h1>
                        
                        <div className="details space-y-2 p-2 text-left">
                            <p className="text-center text-xs md:text-base uppercase font-semibold">{props.role}</p>
                            <p>{props.fact}</p>
                            <div className="flex justify-center gap-2">
                                <Linkedin/>
                                <Github/>
                                <Portfolio/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default TeamCard;