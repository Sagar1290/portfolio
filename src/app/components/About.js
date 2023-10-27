"use client"
import React, { useEffect, useState } from 'react'
import AboutContent from './AboutContent'
import Education from './Education';

const About = () => {

    const [w, setW] = useState();
    useEffect(() => {
        setW(window.innerWidth)
    }, [])

    return (
        <section id='About' className="overflow-hidden bg-white dark:bg-gray-800 md:w-screen">
            <div className="max-w-6xl md:mx-auto h-24 md:h-36 bg-white dark:bg-gray-800">
                <h1 className="py-10 text-5xl md:text-9xl font-bold md:py-10 text-center md:text-left">
                    AboutMe
                </h1>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 md:w-full">
                {
                    (w > 640) ?
                        <pre className="text-sm md:text-2xl pt-10 md:text-center">
                            {
                                `while(alive) { Eat(); Sleep(); Code(); Repeat(); }`
                            }
                        </pre> : null

                }

                <AboutContent />
                <h1 className="mx-1 mb-4 md:mb-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl md:w-4/5 md:m-auto lg:text-6xl dark:text-white">My Education</h1>
                <Education />
            </div>
        </section >
    )
}

export default About