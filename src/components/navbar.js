import { useState } from "react";
import { Hamburger } from "./hamburger";
import { Contact } from "./contact";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { Content } from "./content";
import { Inbox } from "./inbox";

export function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white',
        fontFamily: 'sans-serif'
    };

    return (
        <>
            <Router>
                <div>
                    <nav className="navigation">
                        <ul>
                            <li>
                                <Link to="/contact" style={linkStyle}>Contact</Link>
                            </li>
                            <li>
                                <Link to="/" style={linkStyle}>Inbox</Link>
                            </li>
                            <li>
                                <Link to="/content" style={linkStyle}>Content</Link>
                            </li>

                        </ul>

                        <div className="hamburger" onClick={toggleHamburger}>
                            <Hamburger isOpen={hamburgerOpen} />
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/contact" element={
                                <Contact />
                        } />
                        <Route index element={
                                <Inbox />
                        } />
                        <Route path="content" element={
                                <Content />
                        } />
                    </Routes>

                </div>
            </Router>



            <style jsx>{`
               .navigation{
                 width: 100%;
                 height: 75px;
                 background-color: #35cce6;
                }

               .navigation ul{
                 display: ${hamburgerOpen ? 'flex' : 'none'};
                 flex-wrap: wrap;
                 float: right;
                 margin-top: 20 0px;
                 padding: 0 25px;
                }

               .navigation ul li{
                 list-style-type: none;
                 padding-right: 10px;
                 padding-top: 10px;
                 font-size: 2rem;
                }
          `}</style>
        </>
    )
}