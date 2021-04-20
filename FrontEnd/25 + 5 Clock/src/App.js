import React, { Component } from "react";
import Control from "./Control";
import Timer from "./Timer"

//Импорт функций 
import  start from  './function/start_timer';
import refresh from './function/refresh';
import transform from './function/transform';
import decrease from './function/decrement';
import increase from './function/increment';



class App extends Component {
    constructor(props) {
        super (props);
        this.state = {
            countBreak: 5,
            countSession: 25,
            clockCount: 25 * 60,
            currentTimer: "Session",
            interval: undefined,
            isPlaying: false,
            viewTimer: true,
        }
    }

    //Прекращение работы тайимера - время вышло
componentWillUnmount() {
    clearInterval(this.interval);
}

//Установка времени должна отображаться только для Session 
/*setTimer = (time) => {
    const view = this.state.viewTimer
    console.log(view)
    console.log(time)
    let a = this.transformToTime(time);
     return (view) ? a = this.transformToTime(time) : 1
    
}*/


render() {
    const {countBreak,countSession,clockCount,currentTimer,isPlaying, viewTimer } = this.state;
    return(
        <div className = "app-container" id = "app">
            <h2 className = "main-title">25 + 5 Clock</h2>
                <Control 
                    decrease = {decrease} 
                    increase = {increase} 
                    countBreak = {countBreak} 
                    countSession = {countSession}
                />
                <Timer 
                    clockCount = {clockCount} 
                    currentTimer = {currentTimer} 
                    isPlaying = {isPlaying} 
                    viewTimer = {viewTimer} 
                    setTimer = {this.setTimer} 
                    transform = {transform} 
                    start = {start} 
                    refresh = {refresh}
                /> 
        </div>
        )
    }
}

export default App


