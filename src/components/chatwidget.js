import React from "react";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

export class Chat extends React.Component {

    componentDidMount() {
        addResponseMessage('Välkommen 1177-chatten! skriv din fråga här så svarar vi så fort vi kan.')
    }

    handleNewUserMessage = newMessage => {
        console.log(`Nytt chattmeddelande: ${newMessage}`);
    };

    render() {
        return (
            <div className="chat">
                <Widget
                    handleNewUserMessage={this.handleNewUserMessage}
                    title="1177"
                    subtitle="Här kan du chatta med dina vårdgivare"
                />
            </div>
        );
    }
}