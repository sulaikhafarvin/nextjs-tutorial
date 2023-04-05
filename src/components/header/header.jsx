import Link from "next/link"
import Image from "next/image"
export const Header = () => {
    return (
        <header>
            <div className="div">
                <div className="topNav">
                    <Image
                        alt="logo"
                        src={"/image/logo_black.png"}
                        width={50}
                        height={50}
                    />
                    <nav>
                        <ul className="ul_header">
                            <li className="li_header_home">
                                <Link href="/" passHref>
                                    Home
                                </Link>
                            </li>
                            <li className="li_header_events">
                                <Link href="/events" passHref>
                                    Events
                                </Link>
                            </li>
                            <li className="li_header_about">
                                <Link href="/about-us" passHref>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title"> Events Tracking Website</p>
            </div>
        </header>
    )
}
