import React from "react";
import { MailBox } from "./mailbox.js";
import { NoneSelected } from "./noneselected.js";
import { MailboxList } from "./mailboxlist.js";
import { getMailboxes } from "../api/apiservice.js";
import { ErrorBoundary } from "./errorboundary";

export class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mailbox_id: null,
            mailboxes: [],
            error: null,
            errorMessage: ''
        }
        this.handleSelectMailbox = this.handleSelectMailbox.bind(this);
    }

    handleSelectMailbox(id) {
        this.setState({ mailbox_id: id })
    }

    componentDidMount() {
        getMailboxes()
            .then(
                (result => {
                    this.setState({
                        mailboxes: result.data

                    });
                })
                
            ).catch(err => {
                console.log(err);
                this.setState({
                    error: err,
                    errorMessage: err.message
                });
            });
    }

    render() {
        let err = this.state.error
        if(err) {
            return <h3>{this.state.errorMessage}</h3>
        }

        let selectedMailbox;
        let mailbox_id = this.state.mailbox_id;
        if (mailbox_id) {
            let mailbox = this.state.mailboxes.find((mailbox) => {
                return mailbox.id == mailbox_id;
            })
            console.log(mailbox);
            selectedMailbox = <MailBox key={mailbox.id} name={mailbox.name} emails={mailbox.emails} inboxid={mailbox.id} />;
        }
        else {
            selectedMailbox = <NoneSelected text="mailbox" />
        }
        return (
            <div className="app row">
                <ErrorBoundary>
                    <MailboxList mailboxes={this.state.mailboxes} onSelectedMailbox={this.handleSelectMailbox} />
                </ErrorBoundary>
                <div className="mailbox col-md-10">
                    <div className="panel panel-default">
                        <div className="panel-body"><ErrorBoundary>{selectedMailbox}</ErrorBoundary></div>
                    </div>
                </div>
            </div>
        )
    }
}