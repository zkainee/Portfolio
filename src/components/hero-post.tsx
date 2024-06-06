import { Author } from "@/interface/author";
import DateFormatter from "./date-formatter";
import Avatar from "./avatar";
import Image from "next/image";

type Props = {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    author: Author;
    slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, author }: Props) {
    return (
        <section className="mb-8 flex flex-col md:flex-row items-center">
            <div className="md:mr-8 md:w-2/3">
                <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">{title}</h3>
                <div className="mb-4 text-lg">
                    <DateFormatter dateString={date} />
                </div>
                <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
                <Avatar name={author.name} picture={author.picture} />
            </div>
            <Image
                src={coverImage}
                alt={`Cover Image for ${title}`}
                width={400}
                height={300}
                className="md:w-1/3"
            />
        </section>
    );
}
