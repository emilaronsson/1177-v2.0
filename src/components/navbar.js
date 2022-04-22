import { useState } from "react";
import { Hamburger } from "./hamburger";

export function NavBar() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <>

            <div className="navigation">
                <ul>
                    <li>Nav Item 1</li>
                    <li>Nav Item 2</li>
                    <li>Nav Item 3</li>
                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>
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