import React from "react";

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