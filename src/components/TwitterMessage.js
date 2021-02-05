import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = event => {
    this.setState({
      message: event.target.value

    })
  }

  render() {
    let charsRemaining = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        value={this.state.message} onChange={event => this.handleMessage(event)}/>
        <p>Characters Remaining: {charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
