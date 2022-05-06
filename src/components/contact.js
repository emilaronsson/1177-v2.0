import React from "react";
import { getContacts } from "../api/getdata.js"
import { SearchBar } from "./searchbar.js";

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        getContacts()
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        else if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <>
                <h1>Work in progress!</h1>
                    <SearchBar />
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                {item.email}
                            </li>
                        ))}
                    </ul>
                    <textfield>
                        Exempeldata!
                    </textfield>
                </>
            );
        }
    }
}