import React, { Component } from "react";

//импорт font font awesome
import {faPlayCircle} from "../node_modules/@fortawesome/free-regular-svg-icons/faPlayCircle";
import {faPauseCircle} from "../node_modules/@fortawesome/free-regular-svg-icons/faPauseCircle";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome"

class Timer extends Component {
    render() {
        const {clockCount,currentTimer} = this.props;
        return(
            <div className = "taimer-container">
                <h3 id ="timer-label">{currentTimer}</h3>
                <div className = "time_format" id ="time-left">{this.props.fun(clockCount)}</div>
                <div id = "taimer-control">
                    <FontAwesomeIcon className="start" icon ={faPlayCircle} onClick = {this.props.fun2}/>
                    <FontAwesomeIcon className="stop" icon ={faPauseCircle} onClick = {this.props.fun2}/>
                    <button className ="reset">Refresh</button>
                </div>
            </div>
        )
    }
}

export default Timer