import React from "react";
import { PropTypes } from "prop-types";

export class EmailListItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const itemStyle = {
            cursor: "pointer",
        };
        return (
            <tr style={itemStyle} key={this.props.id} onClick={() => {this.props.on_click(this.props.id)}}>
                <td>{this.props.subject}</td>
                <td>{this.props.from}</td>
                <td>{this.props.to}</td>
            </tr>
        )
    }
}

EmailListItem.propTypes = {
    on_click: PropTypes.func,
    id: PropTypes.number,
    subject: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string
}