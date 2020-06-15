import React from 'react';

export default class Contact extends React.Component {
    state = {
        isSubmitted: false
    }

    handleSubmit = (e) => {
            alert('Thank you! Your request has been submitted.');
            this.setState({ isSubmitted: true })
            this.props.history.push(`/`);
    }

    render() {
        return (
            <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Contact Us</h1>
            <br></br>
            <p><input placeholder="First name"></input></p>
            <p><input placeholder="Last name"></input></p>
            <p><input placeholder="Email"></input></p>
            <p><textarea placeholder="Message"></textarea></p>
            <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}