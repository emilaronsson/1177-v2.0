import React from "react";
import { Toggle } from "./toggle";
import { SelectForm } from "./selectform";
import { Tabs } from "./tabs";

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <h1>Work in progress!</h1>
            <Toggle toggleComponent={<Tabs />} />
            <SelectForm />
            </>
        )
    }
}