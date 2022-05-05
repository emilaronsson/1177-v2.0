import React from "react";
import { Email } from "./email.js";
import { EmailList } from "./emaillist";
import { NoneSelected } from "./noneselected.js";
import { caller2 } from "../api/getdata.js";

export class MailBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: null,
            mails: []
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(id) {
        this.setState({ emailid: id })
    }

    componentDidMount() {
        caller2.get("../Emails")
          .then(
            (result) => {
              this.setState({
                mails: result.data
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
        let selectedEmail;
        let emailid = this.state.emailid
        console.log(emailid);
        if (emailid) {
            let mail = this.state.mails.find((m) => {
                return m.id == emailid;
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
                <EmailList emails={this.state.mails} onSelectEmail={this.handleSelect} />
                <div className="email-viewer">{selectedEmail}</div>
            </div>
        );
    }
}