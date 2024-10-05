import React from 'react'

const Experience = () => {
    const myExp = [
        {
            id: 1,
            position: "Full Stack Developer Intern",
            company: "Futures First",
            duration: "April 2024 - Present",
            responsibilities: [
                "Developed a full scenario analysis portal for traders.",
                "Handled large datasets, made queries, processed and displayed data in an optimized form.",
                "Utilized Python Flask for backend development, SQL for database management.",
                "Performed metrics calculation for in-house applications, optimizing performance and enhancing user experience.",
                "Worked with various real-time data to display in a React app."
            ],
            logo: "/images/logo/ff.png",
        },
        {
            id: 2,
            position: "NextJs Intern",
            company: "Achintya Solutions",
            duration: "Feb 2024 - April 2024",
            responsibilities: [
                "Developed and implemented reusable UI components using Next.js and Tailwind CSS.",
                "Collaborated with the team to design consistent and interactive page layouts.",
                "Enhanced website SEO by implementing Next.js features for optimal search engine crawling and indexing."
            ],
            logo: "/images/logo/achintyasolutions.jpg",
        },
    ];
    return (
        <section id="Experience" className="overflow-hidden bg-white dark:bg-gray-800 md:w-screen">
            <div className="max-w-6xl md:mx-auto h-24 md:h-36 bg-white dark:bg-gray-800">
                <h1 className="py-10 text-5xl md:text-9xl font-bold md:py-10 text-center md:text-left">
                    Experience
                </h1>
            </div>
            <div className="grid gap-8 w-full mx-auto px-4 py-8 bg-[#F1F1F1] dark:bg-gray-900">
                {myExp.map((exp) => (
                    <div key={exp.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="p-4 md:col-span-1 flex items-center justify-center">
                            <img src={exp.logo} alt={exp.company} className="h-24" />
                        </div>
                        <div className="md:col-span-2 p-4">
                            <div className="flex items-center mb-2">
                                <h3 className="text-lg text-black font-semibold">{exp.position}</h3>
                            </div>
                            <div className="flex items-center mb-2">
                                <p className="text-sm text-gray-600">{exp.duration}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-base text-gray-700 leading-relaxed">
                                    {exp.responsibilities.map((responsibility, index) => (
                                        <span key={index} className="block mb-2">{responsibility}</span>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience