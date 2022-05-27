import React from "react";
import { EmailListItem } from "./emaillistitem.js";
import PropTypes from "prop-types"


export class EmailList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const mails = this.props.emails;
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

EmailList.propTypes = {
  onSelectEmail: PropTypes.func,
  emails: PropTypes.array
}

