import React from "react";
import { createRoot } from "react-dom/cjs/react-dom.production.min";
import { NavBar } from "./components/navbar.js";
import { Chat } from "./components/chatwidget.js";
import { Toggle } from "./components/toggle"
import { ErrorBoundary } from "./components/errorboundary"


class Home extends React.Component {

    render() {


        return (
            <div>
                <ErrorBoundary>
                    <NavBar />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Toggle toggleComponent={<Chat />} ></Toggle>
                </ErrorBoundary>
            </div>
        );


    }
}

const root = createRoot(document.getElementById('root'));
root.render(<Home />);