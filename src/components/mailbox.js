import React from "react";
import { Email } from "./email.js";
import { EmailList } from "./emaillist";
import { NoneSelected } from "./noneselected.js";
import { getEmails } from "../api/apiservice.js";
import { deleteEmail } from "../api/apiservice";
import Button from '@mui/material/Button';
import { ErrorBoundary } from "./errorboundary";

export class MailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: null,
            emails: [],
            error: null,
            errorMessage: ''
        }

        this.handleSelect = this.handleSelect.bind(this);
        this.onEmailWasDeleted = this.onEmailWasDeleted.bind(this);
    }

    handleSelect(id) {
        this.setState({ emailid: id })
    }

    onEmailWasDeleted = async () => {
        let email = this.state.emailid;
        let confirmation = confirm('Är du säker på att du vill radera mailet?');
        if(confirmation){
        deleteEmail(email);
        const updatedEmails = await getEmails(this.props.inboxid);
        this.setState({emails: updatedEmails.data, emailid: null});
        }
    }

    componentDidMount() {
        getEmails(this.props.inboxid)
        .then(
            result => {
                this.setState({
                    emails: result.data
                })
            }
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

        let selectedEmail;
        let emailid = this.state.emailid
        if (emailid) {
            console.log(this.state.emails);
            let mail = this.state.emails.find((m) => {
                return m.id == emailid;
            })
            console.log(mail);
            selectedEmail = (
                <ErrorBoundary>
                <Email
                    id={mail.id}
                    key={mail.id}
                    from={mail.from}
                    to={mail.to}
                    subject={mail.subject}
                    body={mail.body}
                    deleteButton={<Button color="neutral" variant="contained" onClick={() => this.onEmailWasDeleted(this.emailid)}>Radera</Button>}
                />
                </ErrorBoundary>
            );
        }
        else {
            selectedEmail = <NoneSelected text="email" />
        }

        return (
            <div>
                <EmailList emails={this.state.emails} onSelectEmail={this.handleSelect} />
                <div className="email-viewer"><ErrorBoundary>{selectedEmail}</ErrorBoundary></div>
            </div>
        );
    }
}