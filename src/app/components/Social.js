import React from 'react'

const Social = () => {
    return (
        <section className='md:w-2/3'>
            <div className='p-4 flex flex-row text-xl text-center '>
                <a href='#Main' className='basis-1/2 md:p-6 rounded-lg hover:text-blue-600 hover:bg-gray-200'>Home</a>
                <a href='#About' className='basis-1/2 md:p-6 rounded-lg hover:text-blue-600 hover:bg-gray-200 '>About Me</a>
                <a href='#Projects' className='basis-1/2 md:p-6 rounded-lg hover:text-blue-600 hover:bg-gray-200'>Projects</a>
            </div>
            <div className='md:flex md:flex-row md:px-6 md:space-x-4 text-gray-700 dark:text-gray-400'>
                <div className='flex flex-row p-2 basis-1/3'>
                    <svg className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h2 className='h-8 px-2 text-normal'>Dehradun</h2>
                </div>
                <div className='flex flex-row p-2'>
                    <svg className="h-6 w-6 " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />  <polyline points="22,6 12,13 2,6" /></svg>
                    <h2 className='px-2 text-normal'>dev.sagar1290@gmail.com</h2>
                </div>
            </div>
            <div>
                <h2 className="px-2 text-normal text-2xl font-bold md:w-2/3 md:pb-4 md:m-auto">Get in Touch</h2>
            </div>
            <div className='md:m-auto md:w-2/3 text-gray-700 dark:text-gray-400'>
                <div className='p-2 flex flex-row'>
                    <div className='basis-1/2 '>
                        <a href="https://github.com/Sagar1290" className="p-2 font-gray-500  inline-flex items-center space-x-2 rounded">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            <name className="text-sm-cost">sagar1290</name>
                        </a>
                    </div>
                    <div className='basis-1/2'>
                        <a href='https://www.linkedin.com/in/sagar-prajapati-22a969202/' className="p-2 font-gray-500  inline-flex items-center space-x-2 rounded">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" /></svg>
                            <name className="text-sm-cost">Sagar Prajapati</name>
                        </a>
                    </div>
                </div>
                <div className='p-2 flex flex-row '>
                    <div className='basis-1/2'>
                        <a href='https://x.com/Sagar__prajapat?t=Ny95uAw0cRh3das0FP2PHA&s=08' className=" p-2 font-gray-500  inline-flex items-center space-x-2 rounded">
                            <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            <name className="text-sm-cost">@Sagar__prajapat</name>
                        </a>
                    </div>
                    <div className='basis-1/2'>
                        <a href='https://instagram.com/sagarprajapati3224?igshid=OGQ5ZDc2ODk2ZA==' className="p-2 font-gray-500  inline-flex items-center space-x-2 rounded">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            <name className="text-sm-cost">Sagar Prajapati</name>
                        </a>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Social