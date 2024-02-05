import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-white shadow">
                <nav className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Portfolio</h1>
                    <div>
                        {/* Navigation Links */}
                        <a href="#about" className="px-4">Over mij</a>
                        <a href="#projects" className="px-4">Projecten</a>
                        <a href="#skills" className="px-4">Skills</a>
                        <a href="#contact" className="px-4">Contact</a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="about" className="py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold">Over mij</h2>
                        <p className="mt-4 text-gray-600">
                            Lorem ipsum dolor sit amet
                        </p>
                    </div>
                </section>
                <section id="projects" className="bg-white shadow mt-8 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold">Projecten</h2>
                        {/* Project Items */}
                        <div className="mt-8">
                            {/* Repeat this block for each project */}
                            <div className="mt-4">
                                <h3 className="text-lg font-bold">Project 1</h3>
                                <p className="mt-1">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            {/* Repeat this block for each project */}
                            <div className="mt-4">
                                <h3 className="text-lg font-bold">Project 2</h3>
                                <p className="mt-1">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                        <div className="mt-8">
                            {/* Repeat this block for each project */}
                            <div className="mt-4">
                                <h3 className="text-lg font-bold">Project 3</h3>
                                <p className="mt-1">Lorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="skills" className="py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold">Skills</h2>
                        <p className="mt-4 text-gray-600">
                            Een lijst met skills die ik beheers
                        </p>
                        {/* Skills list */}
                        <div className="flex flex-wrap mt-4">
                            {/* Repeat for each skill */}
                            <span
                                className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Skill Name</span>
                        </div>
                        <div className="flex flex-wrap mt-4">
                            {/* Repeat for each skill */}
                            <span
                                className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Skill Name</span>
                        </div>

                    </div>
                </section>
                <section id="contact" className="bg-white shadow mt-8 py-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold">Neem contact met mij op</h2>
                        <form className="mt-8">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Naam</label>
                                <input type="text" id="name" className="mt-1 p-2 w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 p-2 w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Bericht</label>
                                <textarea id="message" className="mt-1 p-2 w-full border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border-gray-300 rounded-md"></textarea>
                            </div>
                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Send
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}
