import React from "react"
import Link from "next/link"
import Image from "next/image"

const CatEvent = ({ data, pageName }) => {
    return (
        <div className="cat_events">
            <h1>Events in {pageName}</h1>
            <div className="content_cat_events">
                {data.map((ev) => (
                    <Link
                        className="card_cat_events"
                        key={ev.id}
                        href={`/events/${ev.city}/${ev.id}`}
                        passHref
                    >
                        <Image
                            src={ev.image}
                            alt={ev.title}
                            width={300}
                            height={300}
                            priority={true}
                        />
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CatEvent
