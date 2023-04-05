import React from "react"
import Image from "next/image"
import Link from "next/link"

const AllEvents = ({ data }) => {
    return (
        <div className="events_page">
            {data.map((ev) => (
                <Link
                    className="card_AllEvents"
                    key={ev.id}
                    href={`/events/${ev.id}`}
                    passHref
                >
                    <Image
                        src={ev.image}
                        alt={ev.title}
                        width={400}
                        height={400}
                        priority={true}
                    />
                    <h2 className="h2_AllEvents">{ev.title}</h2>
                </Link>
            ))}
        </div>
    )
}

export default AllEvents
