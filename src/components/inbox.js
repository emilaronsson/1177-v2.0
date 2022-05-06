import React from "react";
import { MailBox } from "./mailbox.js";
import { NoneSelected } from "./noneselected.js";
import { MailboxList } from "./mailboxlist.js";
import { getEmails } from "../api/getdata.js";

export class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mailbox_id: null,
            mailboxes: []
        }
        this.handleSelectMailbox = this.handleSelectMailbox.bind(this);
    }

    handleSelectMailbox(id) {
        this.setState({ mailbox_id: id })
    }

    componentDidMount() {
        getEmails()
            .then(
                (result) => {
                    this.setState({
                        mailboxes: result.data

                    });
                },
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    render() {
        let selectedMailbox;
        let mailbox_id = this.state.mailbox_id;
        if (mailbox_id) {
            let mailbox = this.state.mailboxes.find((mailbox) => {
                return mailbox.id == mailbox_id;
            })
            selectedMailbox = <MailBox key={mailbox.id} name={mailbox.name} emails={mailbox.emails} />;
        }
        else {
            selectedMailbox = <NoneSelected text="mailbox" />
        }

        return (
            <div className="app row">
                <MailboxList mailboxes={this.state.mailboxes} onSelectedMailbox={this.handleSelectMailbox} />
                <div className="mailbox col-md-10">
                    <div className="panel panel-default">
                        <div className="panel-body">{selectedMailbox}</div>
                    </div>
                </div>
            </div>
        )
    }
}