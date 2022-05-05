import React from "react";

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
                <div className="body"
                    dangerouslySetInnerHTML={{ __html: this.props.body }} />
            </div>
        )
    }
}