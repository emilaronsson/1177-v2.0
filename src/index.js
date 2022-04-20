import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import { useState } from "react/cjs/react.production.min";
import { App } from "./components/appcomponent.js";
import { Button } from "./components/button.js";
import {TabsWrappedLabel} from "./components/tabs.js";
//import { ColorTabs } from "./components/tabs.js";

class Home extends React.Component {
    render() {
        return (
            <div>
                <TabsWrappedLabel />
                <App />
                <Button />
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