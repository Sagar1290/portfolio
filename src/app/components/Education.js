import React from 'react'

const Education = () => {

    const myObj = [
        {
            'id': 1,
            'name': 'Bachelors of Technology',
            'institute': 'Sardar Vallabhbhai National Institute of Technology',
            'link': 'svnit.ac.in',
            'major': 'Electronics and Communication Engineering',
            'year': '2020-2024'
        },
        {
            'id': 2,
            'name': 'Higher Secondary ',
            'institute': 'Jawahar Navodaya Vidyalaya, Rewa MP',
            'link': 'jnv.in',
            'major': 'Science',
            'year': '2017-2019'
        }
    ]

    return (
        <section className='flex flex-col lg:flex-row m-auto pb-20 lg:w-4/5'>
            {myObj.map((currElem) => (
                < div className='p-1 lg:px-10 m-1 flex flex-col basis-1/2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 ' >
                    <div className='lg:px-8 text-2xl flex items-center font-bold text-gray-900 dark:text-white'>
                        {currElem.name}
                    </div>
                    <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <div className='tracking-wide  flex items-center' key={currElem.id}>
                            <a href={currElem.link}>{currElem.institute}</a>
                        </div>
                        <div className='tracking-wider text-sm flex items-center'>
                            {currElem.major}
                        </div>
                        <div className='text-sm flex items-center'>{currElem.year}</div>
                    </ul>
                </div>
            )
            )}

        </section >
    )
}

export default Education