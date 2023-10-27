import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Skills from './Skills';

const AboutContent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className='w-screen lg:w-4/5 lg:m-auto'>
            <div className='about-content p-5 text-justify'>
                <div className='py-2'>
                    <h1 className='text-xl p-2'>🖥️ Who am I? 🤖</h1>
                    <p className='py-4 indent-8 lg:indent-0 font-normal text-gray-500 dark:text-gray-400'>I'm not just a web developer; I'm a passionate tech enthusiast with a knack for solving digital puzzles. My playground is the internet, and I'm here to share my journey of innovation and creativity with you.</p>
                    <p className='py-4 indent-8 lg:indent-0 font-normal text-gray-500 dark:text-gray-400'>I'm passionate about creating user-centered experiences that are both visually appealing and easy to use. I'm also a strong problem solver and I'm always looking for new ways to improve the user experience</p>
                </div>
                <div>
                    <h1 className='text-xl p-2'>💡 What Sets Me Apart? 💼</h1>
                    <p className='font-serif text-center '>"Code is not just a tool; it's a canvas for digital art."</p>
                    <p className='py-4 indent-8 lg:indent-0 font-normal text-gray-500 dark:text-gray-400'>I see web development as more than just lines of code; it's a medium to express ideas and create extraordinary digital experiences. When you explore my portfolio, you'll discover a collection of my creative endeavors that reflect my unique perspective.</p>
                </div>
                <div>
                    <h1 className='text-xl p-2'>🔧 My Expertise 🔨 </h1>
                    <p className='font-serif text-center'> "Every challenge is an opportunity to learn, grow, and create." </p>
                    <p className='py-4 indent-8 lg:indent-0 font-normal text-gray-500 dark:text-gray-400'>From tackling intricate coding challenges to designing intuitive user interfaces, my journey is marked by a passion for continuous improvement. My portfolio is a testament to the endless possibilities within the digital realm.</p>
                </div>
            </div>
            <Skills />
        </section>
    );
};

export default AboutContent;
