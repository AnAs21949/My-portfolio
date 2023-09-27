import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card({title, imageSrc, description, webLink}) {
  return (
    
    <div className="rounded-2xl bg-white ">
        <img src={imageSrc} alt=""  className="rounded-2xl w-full h-[20rem]"/>
        <div className="justify-start p-4">
            <h1 className="  text-lg font-semibold">{title}</h1>
            <p className="py-2 text-gray-500">{description}</p>
            <div className="flex items-center gap-2">
                <a href={webLink} className="text-black ">See more</a>
                <FontAwesomeIcon className="mt-1" icon={faArrowRight} size="1x" color="black"/>
            </div>
        </div>
    </div>
    
  )
}
