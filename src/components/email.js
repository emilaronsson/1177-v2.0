import React from "react";
import PropTypes from "prop-types"
import { buttonTheme } from "../theme/buttontheme";
import { ThemeProvider } from "@mui/material";

export class Email extends React.Component {
    render() {
        return (
            <div className="email">
                <dl className="meta dl-horizontal">
                    <dt>From</dt>
                    <dd>{this.props.from}</dd>

                    <dt>To</dt>
                    <dd>{this.props.to}</dd>

                    <dt>Subject</dt>
                    <dd>{this.props.subject}</dd>
                </dl>
                <div className="body" dangerouslySetInnerHTML={{ __html: this.props.body }}>
                </div>
                <ThemeProvider theme={buttonTheme}>
                {this.props.deleteButton}
                </ThemeProvider>
            </div>
        )
    }
}

Email.propTypes = {
    deleteButton: PropTypes.object
}