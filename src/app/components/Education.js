import Image from "next/image";
import React from "react";

const Education = () => {
    const myObj = [
        {
            id: 1,
            name: "Bachelors of Technology",
            institute: "Sardar Vallabhbhai National Institute of Technology",
            link: "https://svnit.ac.in/",
            major: "Electronics and Communication Engineering",
            year: "2020-2024",
            logo: "/images/logo/svnit-logo.png",
        },
        {
            id: 2,
            name: "Higher Secondary ",
            institute: "Jawahar Navodaya Vidyalaya, Rewa MP",
            link: "https://navodaya.gov.in/",
            major: "Science",
            year: "2017-2019",
            logo: "/images/logo/nvs-logo.png",
        },
    ];

    return (
        <section className="flex flex-col lg:flex-row m-auto pb-20 lg:w-4/5">
            {myObj.map((currElem, id) => (
                <div
                    key={id}
                    className="p-4 lg:px-10 m-1 flex flex-col md:flex-row gap-2 basis-1/2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
                    data-aos="fade-up"
                    data-aos-duration="300"
                >
                    <div className="flex items-center justify-center ">
                        <Image
                            src={currElem.logo}
                            height={400}
                            width={300}
                            alt="logo"
                            className="h-24 w-24 object-contain"
                        />
                    </div>
                    <div>
                        <div className="text-xl flex items-center justify-center font-semibold text-gray-900 dark:text-white">
                            {currElem.name}
                        </div>
                        <ul>
                            <div className="text-sm flex items-center text-gray-700 dark:text-gray-300" key={currElem.id}>
                                <a href={currElem.link} target="blank">{currElem.institute}</a>
                            </div>
                            <div className="text-sm flex items-center text-gray-600 dark:text-gray-400">
                                {currElem.major}
                            </div>
                            <div className="text-sm flex items-center text-gray-400 dark:text-gray-400">{currElem.year}</div>
                        </ul>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Education;
