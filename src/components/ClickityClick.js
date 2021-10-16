// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasBeenClicked: false,
            currentTheme: 'blue'
        };
    }

    handleClicked = () => {
        this.setState({hasBeenClicked: true});
    }
     render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClicked}>Click me!</button>
            </div>
        );
    }
}

export default ClickityClick;