import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import { NavBar } from "./components/navbar.js";
import {Chat} from "./components/chatwidget.js";


class Home extends React.Component {
    
    render() {
          

        return (
            <div>
                <NavBar />
                <Chat />
            </div>
        );


    }
}

const root = createRoot(document.getElementById('root'));
root.render(<Home />);





// const App = () => {
//     return (
//         <h1>App Component</h1>
//     )
// }

// const root = createRoot(document.getElementById('root'));
// root.render(<App />);

// const Button = () => {
//     return (
//         <>
//             <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
//                 <i class="material-icons">add</i>
//             </button>
//         </>
//     )
// }

// root.render(<Button />)