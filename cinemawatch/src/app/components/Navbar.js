import React, {useState} from "react";
import Link from "next/link";

const Navbar = () => {
     return(
        <nav className="navbar" style={{ "backgroundColor": "#183B4E" }}>
            <div className="container">
                <Link href="/" passHref>
                <div className="navbar-brand" 
                style={{ textDecoration: 'none', color: 'white' }}>
                    Cinemawatch
                </div>
                </Link>
            </div>
        </nav>
     )
}

export default Navbar;