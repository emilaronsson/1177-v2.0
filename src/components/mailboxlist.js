import React from "react";

export class MailboxList extends React.Component {
    render () {
        const itemStyle = {
            cursor: "pointer",
        };
        let mailbox_list = this.props.mailboxes.map((mailbox) => {
            return(
                <li style={itemStyle} className="list-group-item" key={mailbox.id} onClick={this.props.onSelectedMailbox.bind(null, mailbox.id)}> 
                    
                    {mailbox.name}
                </li>
            )
        })

        return (
            <div className="col-md-2">
                <ul className="mailboxes list-group">{mailbox_list}</ul>
            </div>
        )
    }
}