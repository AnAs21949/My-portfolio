import './about.css'
// import AnimatedLetters from '../AnimatedLetters/Animate';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngular, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
// import { useEffect, useState } from 'react';
import myPic from '../../assets/imgs/me.jpeg'
import Slider from '../slider/Slider'
import Projects from '../Projects'

export default function About() {

//   const [letterClass, setLetterClass] = useState('text-animate')

//   useEffect(() => {
//     setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 3000)
//   }, [])


  return (
    <div className=''>
    
        <section id='about-section'  className=" flex items-center flex-col bg-slate-950 lg:flex-row min-h-screen relative w-full z-10">
            
            <div className="">
                <img src={myPic}
                className='w-full lg:absolute inset-0 lg:h-full lg:w-1/2 max-h-screen object-center object-cover'
                alt="" />
            </div>
            <div className=' lg:basis-1/2 lg:ml-auto lg:pl-10 xl:pl-20'>
                <h1 className=' mb-5 uppercase font-semibold text-lg text-blue-700 tracking-wider text- '>About</h1>
                <p className=' leading-relaxed max-w-prose text-gray-400 pr-11 font-mono text-lg'>
                    I'm Anas Abid, a frontend developer based in Casablanca, Morocco, with a background in aeronautical engineering.
                    I specialize in crafting next-level websites and web applications, combining design and development to create exceptional user experiences.
                    and in my free time, I play video games (especially COD)
                </p>
            </div>
            

            {/* <div className="text-zone">
            <h1 className='text-white text-5xl font-thin'>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
            <p>
                I'm a very ambitious front-end developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p >
                I'm quiet confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
            </p>
            <p>
                If I need to define myself in one sentence that would be a family
                person, father of a beautiful daughter, a sports fanatic,
                photography enthusiast, and tech-obsessed!!!
            </p>
            </div>

            <div className="absolute right-[20%] ">
            <div className="cubespinner">
                <div className="face1">
                <FontAwesomeIcon icon={faGithub} color="#333" />
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
            </div> */}
        </section>
    </div>
  )
}
