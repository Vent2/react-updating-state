import React, { Component } from 'react';

export default class LightSwitch extends Component {
    constructor(){
        super();
        this.state = {
            toggle: false,
        };
    }

        handleClick = () => {
            this.setState({
                toggle: !this.state.toggle,
            });
        }

        render(){
            return(
                <div>
                    <button onClick={this.handleClick}>
                        {this.state.toggle ? 'ON' : 'OFF'}
                    </button>
                </div>
            );
        }
}
