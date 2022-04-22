import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import { LifeCycle } from "./components/lifecycle.js";
import { SelectForm } from "./components/selectform.js"
import { NavBar } from "./components/navbar.js"

//let signedIn = false;
class Home extends React.Component {
    render() {


        return (
            <div>
                <NavBar />
                <LifeCycle />
                <SelectForm />
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