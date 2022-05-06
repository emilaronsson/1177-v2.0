import React from "react";
import { LifeCycle } from "./lifecycle";
import { SelectForm } from "./selectform";

export class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <h1>Work in progress!</h1>
            <LifeCycle />
            <SelectForm />
            </>
        )
    }
}