import React from 'react'

const MainDiv = () => {
  return (
    <section id='Main' className='overflow-hidden h-screen'>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:items-center">
        <p className="z-10 text-center fixed left-0 bottom-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:align-center lg:w-screen  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Developed by love and Passion &#10084;
        </p>
      </div>
      <div className="lg:pt-10 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className='pl-4 text-5xl md:text-8xl font-bold py-6 text-left md:text-left lg:py-10'>SAGAR PRAJAPATI</h1>
        <text className='text-sm pb-10 lg:text-xl'>Web Developer | Problem Solver | Tech Enthusiast</text>
      </div>
      <div className='text-center space-y-2 text-sm lg:text-lg'>
        <p>🚀 Welcome to My Digital Playground 🌐</p>
        <p>🔍 "I don't just code, I solve digital puzzles." 💡</p>
      </div>

      {/* <div className="mt-10 mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left"> */}
      <div className='mt-10 mb-32 flex flex-col lg:flex-row lg:flex-auto lg:w-4/5 lg:m-auto lg:mt-10 lg:mb-32'>
        <a
          href="#About"
          className="basis-1/3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About Me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </a>
        <a
          href="#Projects"
          className="basis-1/3 group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            My Works{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

        </a>
        <a
          href="#Contact"
          className="basis-1/3  rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Contact Me{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

        </a>

      </div>
    </section>
  )
}

export default MainDiv