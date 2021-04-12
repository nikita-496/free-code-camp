import React, { Component } from "react";

class Timer extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {session} = this.props;
        return(
            <div className = "taimer-container">
                <span id ="timer-label">Session</span>
                <div id ="time-left">{session}</div>
            </div>
        )
    }
}

export default Timer