import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => (
    <div className="home_body">
        {data.map((ev) => (
            <Link
                className="card"
                key={ev.id}
                href={`/events/${ev.id}`}
                passHref
            >
                <div className="image">
                    <Image
                        src={ev.image}
                        alt={ev.title}
                        width={300}
                        height={300}
                        priority={true}
                    />
                </div>
                <div className="content">
                    <h2>{ev.title}</h2>
                    <p>{ev.description}</p>
                </div>
            </Link>
        ))}
    </div>
)
