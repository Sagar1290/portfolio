import React from 'react'
import Social from './Social'
import Contact from './Contact'

const Footer = () => {
    return (
        <section id="Contact" className="overflow-hidden bg-white dark:bg-gray-800 md:w-screen pb-12">
            <div className="max-w-6xl md:mx-auto h-24 md:h-36 bg-white dark:bg-gray-800">
                <h1 className="py-10 text-5xl md:text-9xl font-bold md:py-10 text-center md:text-left">
                    Contact
                </h1>
            </div>
            <div className="bg-[#F1F1F1] dark:bg-gray-900 md:pt-4">
                <div className='md:flex md:flex-row'>
                    <Social />
                    <Contact />
                </div>
            </div>
        </section>
    )
}

export default Footer