import React, { Component } from "react";

//импорт font font awesome
import {faPlayCircle} from "../node_modules/@fortawesome/free-regular-svg-icons/faPlayCircle";
import {faPauseCircle} from "../node_modules/@fortawesome/free-regular-svg-icons/faPauseCircle";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome"

class Timer extends Component {
    render() {
        const {clockCount,currentTimer, isPlaying} = this.props;
        return(
            <div className = "taimer-container">
                <h3 id ="timer-label">{currentTimer}</h3>
                <div className = "time_format" id ="time-left">{this.props.fun(clockCount)}</div>
                <div id = "taimer-control">

                    {/*Ставим иконку в соответсвии с тем воспроизводится ли таймер или нет (пауза)*/}
                    <FontAwesomeIcon className="start-stop" id = "start_stop" icon = {isPlaying ? faPauseCircle : faPlayCircle } onClick = {this.props.fun2}/>
                    <button className = "refresh" id ="reset" onClick = {this.props.fun3}>Refresh</button>
                </div>
            </div>
        )
    }
}

export default Timer