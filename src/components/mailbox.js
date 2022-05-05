import React from "react";
import { Email } from "./email.js";
import { EmailList } from "./emaillist";
import { NoneSelected } from "./noneselected.js";

export class MailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: null
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(id) {
        this.setState({ emailid: id })
    }

    render() {
        let selectedEmail;
        let emailid = this.state.emailid
        console.log(emailid);
        if (emailid) {
            let mail = this.props.emails.find((mail) => {
                return mail.id == emailid;
            })

            selectedEmail = (
                <Email
                    key={mail.id}
                    from={mail.from}
                    to={mail.to}
                    subject={mail.subject}
                    body={mail.body}
                />
            );
        }
        else {
            selectedEmail = <NoneSelected text="email" />
        }

        return(
            <div>
                <EmailList emails={this.props.emails} onSelectEmail={this.handleSelect} />
                <div className="email-viewer">{selectedEmail}</div>
            </div>
        );
    }
}