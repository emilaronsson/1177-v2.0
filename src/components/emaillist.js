import React from "react";
import axios from "axios";
import { EmailListItem } from "./emaillistitem.js";

export class EmailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mails: []
    }
  }

  componentDidMount() {
    axios.get("../data/emaildata.json")
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
    const mails = this.props.emails;
    console.log(mails);
    let emailList = mails.map((mail) => {
      return (
        <EmailListItem
          key={mail.id}
          id={mail.id}
          from={mail.from}
          to={mail.to}
          subject={mail.subject}
          on_click={this.props.onSelectEmail}
        />
      );
    })

    return (
      <table className="email-list table table-striped table-condensed">
        <thead>
          <tr>
            <th>Subject</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>{emailList}</tbody>
      </table>
    )
  }
}