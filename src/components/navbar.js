import { useState } from "react";
import { Hamburger } from "./hamburger";
import { AjaxTest } from "./ajaxtest";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import { MailBox } from "./mailbox";

export function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <>
            <Router>
                <div>
                    <nav className="navigation">
                        <ul>
                            <li>
                                <Link to="/list">Axios lista</Link>
                            </li>
                            <li>
                                <Link to="/inbox">Inbox</Link>
                            </li>

                        </ul>
                        
                        <div className="hamburger" onClick={toggleHamburger}>
                            <Hamburger isOpen={hamburgerOpen} />
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/list" element={<AjaxTest />} />
                        <Route path="/inbox" element={<MailBox />} />
                    </Routes>
                </div>
            </Router>

            <style jsx>{`
               .navigation{
                 width: 100%;
                 height: 50px;
                 background-color: darkgrey;
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
                }
          `}</style>
        </>
    )
}