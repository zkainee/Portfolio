import React from 'react';
import Image from 'next/image';
import profilePicture from '../../public/images/profile.png';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <div className="bg-gray-50 text-gray-800">
                {/* Hero sectie */}
                <header className="bg-gradient-to-r from-blue-500 to-teal-400 text-white">
                    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8">
                        <div className="lg:flex lg:items-center">
                            <div className="h-32 w-32 rounded-full overflow-hidden mx-auto lg:mx-0 lg:mr-6">
                                <Image src={profilePicture} alt="picture" layout="responsive" width={128} height={128}/>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold">Kaine van Ommeren</h1>
                                <p className="mt-2 text-xl">Software Engineer</p>
                            </div>
                            {/* Additional content */}
                        </div>
                    </div>
                </header>
            </div>
            {/* Over mij sectie */}
            <section id="about" className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Over mij</h2>
                    <p className="mt-4 text-gray-600 text-lg text-center">
                        Ik ben een gepassioneerde software engineer met een focus op het creëren van efficiënte, schaalbare applicaties. Met een achtergrond in het beheren, creëren & ervaring in development breng ik oplossingen voor probleemstellingen.</p>
                </div>
            </section>

            {/* Skills sectie */}
            <section id="skills" className="bg-gray-100 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {/* Skill items */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="font-semibold text-xl">Frontend Development</h3>
                            <p className="text-gray-600 mt-2">React, TailwindCSS</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="font-semibold text-xl">Backend Development</h3>
                            <p className="text-gray-600 mt-2">Java, C#</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Projecten sectie */}
            <section id="projects" className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Projecten</h2>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project items */}
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                            <h3 className="font-semibold text-xl"></h3>
                            <p className="text-gray-600 mt-2 flex-grow">A brief description of the project, the
                                challenges faced, and the technologies used.</p>
                            <a href="#" className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2">View
                                Project</a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                            <h3 className="font-semibold text-xl">Game | Minecraft</h3>
                            <p className="text-gray-600 mt-2 flex-grow">In het verleden heb ik me bezig gehouden als zowel Java als Bedrock minecraft development. Dit schreef ik in <strong>Java</strong>, <strong>JSON</strong></p>
                            <a href="#" className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2">View
                                Project</a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col">
                            <h3 className="font-semibold text-xl">Game | FiveM</h3>
                            <p className="text-gray-600 mt-2 flex-grow">Hier werk ik vrijwillig aan een FiveM framework GTA V server als
                                Full Stack Developer in <strong>Lua</strong>, <strong>React</strong> & <strong>SQL</strong>.</p>
                            <a href="https://discord.gg/lotusnl" target={'_blank'}
                               className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2">View
                                Project</a>
                        </div>
                    </div>
                </div>
            </section>
            { /* Contact sectie */}
            <section id="contact" className="bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center">Neem contact op</h2>
                    <form className="mt-8 grid grid-cols-1 gap-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="sr-only">Naam</label>
                            <input type="text" name="name" id="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Email" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Bericht</label>
                            <textarea id="message" name="message" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md" placeholder="Plaats hier uw bericht"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Verstuur
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
