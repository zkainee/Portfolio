import Image from "next/image";
import Header from "@/components/header";
import { HeroPost } from "@/components/hero-post";
import { Author } from "@/interface/author";

export default function Home() {
    const author: Author = {
        name: "Kaine van Ommeren",
        picture: "/images/port.JPG",
    };

    const projects = [
        {
            title: "Realtime chat application",
            coverImage: "/images/app-chat.png",
            date: "2024-06-06",
            excerpt: "I made a chat in Flutter/Dart using Firebase. You can send messages, receive messages and see when the other user read your messages. When sending a message a chat document is created with those users. Each message contains metadata such as sendTime. ",
            author: author,
            slug: "chat-functionality-flutter-firebase",
        }
    ];

    return (
        <main className="flex flex-col items-center justify-between p-24 bg-portfolio">
            <section className="mb-16 text-center">
                <Image
                    src="/images/port.JPG"
                    alt="Kaine van Ommeren"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                />
                <h1 className="text-4xl font-bold mt-4">Kaine van Ommeren</h1>
                <p className="text-lg mt-2">Software Engineer | Tech Enthusiast | Student</p>
            </section>

            <section className="mb-12 w-full max-w-5xl">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                {projects.map((project) => (
                    <HeroPost
                        key={project.slug}
                        title={project.title}
                        coverImage={project.coverImage}
                        date={project.date}
                        excerpt={project.excerpt}
                        author={project.author}
                        slug={project.slug}
                    />
                ))}
            </section>

            <section className="text-center w-full max-w-5xl mb-32">
                <h2 className="text-3xl font-bold mb-8">Contact</h2>
                <p className="text-lg">Feel free to reach out to me via email or social media!</p>
                <p className="text-lg mt-2">
                    LinkedIn: <a href="https://linkedin.com/in/kaine-van-ommeren-8300baa8" target="_blank" rel="noopener noreferrer" className="underline">linkedin.com/in/kaine</a>
                </p>
                <p className="text-lg mt-2">
                    GitHub: <a href="https://github.com/zkainee" target="_blank" rel="noopener noreferrer" className="underline">github.com/kaine</a>
                </p>
                <p className="text-lg mt-2">
                    Instagram: <a href="https://www.instagram.com/kaine.vo/" target="_blank" rel="noopener noreferrer" className="underline">instagram.com/kaine.vo</a>
                </p>
            </section>
        </main>
    );
}
