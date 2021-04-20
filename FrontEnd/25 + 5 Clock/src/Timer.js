import React, { Component } from "react";

//импорт font font awesome
import {faPlayCircle} from "../node_modules/@fortawesome/free-regular-svg-icons/faPlayCircle";
import {faPauseCircle} from "../node_modules/@fortawesome/free-regular-svg-icons/faPauseCircle";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome"

class Timer extends Component {
    render() {
        const {clockCount, countSession, currentTimer,isPlaying,transform, view} = this.props;
        return(
            <div className = "taimer-container">
                <h3 id ="timer-label">{currentTimer}</h3>
                <div className = "time_format" id ="time-left">{(view) ? (transform(clockCount, view)) : (transform(countSession, view)) }</div>
                <div id = "taimer-control">
                    {/*Ставим иконку в соответсвии с тем воспроизводится ли таймер или нет (пауза)*/}
                    <FontAwesomeIcon className="start-stop" id = "start_stop" icon = {isPlaying ? faPauseCircle : faPlayCircle } onClick = {this.props.start}/>
                    <button className = "refresh" id ="reset" onClick = {this.props.refresh}>Refresh</button>
                </div>
            </div>
        )
    }
}

export default Timer