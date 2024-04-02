export default function Projects() {

    const projectObj = [
        {
            'id': 1,
            'gitLink': 'https://github.com/Sagar1290/Restaurant',
            'liveLink': 'https://sagar1290.github.io/Restaurant/',
            'name': 'RESTAURANT',
            'techStacks': 'HTML | CSS | JAVASCRIPT | REACTJS',
            'desc': '🍽️ Crafted an elegant, responsive restaurant website offering a seamless experience for customers. Features include a mouthwatering menu display, services showcase, location information, and convenient online reservation functionality. Embrace the future of dining with this digital delight.',
            'image': 'images/project/restaurant.jpg'
        },
        {
            'id': 2,
            'gitLink': 'https://github.com/Sagar1290/ping-pong-1',
            'liveLink': 'https://sagar1290.github.io/ping-pong-1/',
            'name': 'PING-PONG GAME',
            'techStacks': 'JAVASCRIPT',
            'desc': `🏓 Experience the thrill of a classic game with a modern twist. Ping Pong is not just a game; it's an interactive masterpiece. Challenge yourself in single-player mode or test your skills against friends in multiplayer mode. All packed into a captivating web-based game, optimized for efficiency using the Parcel bundler.`,
            'image': 'images/project/ping-pong.png'
        },
        {
            'id': 3,
            'gitLink': 'https://github.com/Sagar1290/todo-list',
            'liveLink': 'https://sagar1290.github.io/todo-list/',
            'name': 'TODO LIST',
            'techStacks': 'HTML | CSS | REACTJS',
            'desc': `🗒️ Simplify your life with our feature-rich Todo List application. Built with React.js, it's a versatile task manager that enables you to effortlessly create, read, update, and delete tasks. With automatic task saving to local storage, your to-do list is always within reach.`,
            'image': 'images/project/todo-list.jpg'
        }
    ]

    return (
        <section id="Projects" className="overflow-hidden bg-white dark:bg-gray-800 md:w-screen">
            <div className="max-w-6xl md:mx-auto h-24 md:h-36 bg-white dark:bg-gray-800">
                <h1 className="py-10 text-5xl md:text-9xl font-bold md:py-10 text-center md:text-left">
                    Projects
                </h1>
            </div>
            <div className="md:pt-8 md:px-6 bg-[#F1F1F1] dark:bg-gray-900">
                {
                    projectObj.map((currElem, index) => (
                        <div
                            key={currElem.id}
                            className={`py-8 max-w-6xl md:basis-1/2 ${index % 2 === 0 ? 'md:flex md:flex-row' : 'md:flex md:flex-row-reverse'
                                }`}
                        >
                            <div className="max-w-6xl md:basis-1/2" data-aos={index % 2 == 0 ? "fade-up-right" : "fade-up-left"} data-aos-duration="1000">
                                <a href={currElem.gitLink} className="relative block z-0">
                                    <div className="p-2 md:p-0 rounded-lg relative group">
                                        <img
                                            src={currElem.image}
                                            alt={currElem.name}
                                            className="w-full h-auto rounded-xl transition-transform transform group-hover:scale-105"
                                        />
                                        <h1 className="text-sm font-bold relative bottom-10 left-8 md:left-10 md:bottom-10 text-gray-50 lg:font-bold lg:text-xl">
                                            0<span>{currElem.id}</span>. <span>{currElem.name}</span>
                                        </h1>
                                    </div>
                                </a>
                            </div>

                            <div className="p-4 md:space-y-10 text-gray-800 dark:text-gray-300 md:basis-1/2" data-aos={index % 2 == 0 ? "fade-up-left" : "fade-up-right"} data-aos-duration="1000">
                                <a href={currElem.liveLink} className="text-lg md:text-xl text-blue-500 dark:text-blue-300 hover:underline">LIVE</a>
                                <span className="text-lg md:text-xl text-gray-600 dark:text-gray-400"> | </span>
                                <a href={currElem.gitLink} className="text-lg md:text-xl text-blue-500 dark:text-blue-300 hover:underline">CODE</a>

                                <div className="text-base md:text-lg text-gray-700 dark:text-gray-400 mt-2">
                                    Technologies: {currElem.techStacks}
                                </div>

                                <p className="text-base md:text-lg text-gray-800 dark:text-gray-300 mt-4">
                                    {currElem.desc}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div >
        </section >
    )
}