import React, { Component } from "react";
import Control from "./Control";
import Timer from "./Timer"
const audio = document.querySelector("#beep")

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
        }
        this.transformToTime = this.transformToTime.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this)
    }

    //Прекращение работы тайимера - время вышло
componentWillUnmount() {
    clearInterval(this.interval);
}

//Запауск таймера 
handlePlayPause = () => {
    const { isPlaying } = this.state;

    if ( isPlaying) { //если таймер приостановлен
        clearInterval(this.interval);
        this.setState({
            isPlaying: false  
        }) 
    }
    else { // если запущен
        this.setState({
            isPlaying: true  
        });
        
         this.interval = setInterval(()=> { 
            const {clockCount, currentTimer, countBreak, countSession} = this.state;
            if (clockCount === 0) { //если время истекло (минуты коничлись)
                this.setState({
                    //Установка соответсвующего заголовка для таймера
                    currentTimer: (currentTimer ==="Session") ? 'Break' : 'Session',
                    //Действия соответсвующего заголовка для таймера
                    clockCount: (currentTimer ==="Session") ? (countBreak * 60) : (countSession * 60)
                })

                audio.play()
            }else {
                this.setState({ //время еще идет
                    clockCount: clockCount - 1
                });
            }
        }, 1000);
    } 
}

//Сброс таймера 
handleRefresh = () => {
    this.setState({
        countBreak: 5,
        countSession: 25,
        clockCount: 25 * 60,
        currentTimer: "Session",
        isPlaying: false,
    });
    clearInterval(this.interval);

    //Отключения звукового сигнала при клике на кнупку сброс 
    audio.pause();
    audio.currentTimer = 0;
}

//Перевод к формату мм::cc (время)
transformToTime = (count) => {
    const minutes = Math.floor(count / 60);
    let seconds = count % 60; 

    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${minutes}:${seconds}`
}

increase (e) {
        const {countBreak, countSession, isPlaying} = this.state;
        if (e.target.id === "break-increment") { 
        
            //для увеличения break
        if (countBreak < 60){ //увеличиваем до 60 мин.
            if (!isPlaying) {
                this.setState({
                    countBreak: countBreak + 1,
                    clockCount: (countBreak + 1) * 60
                })
            }
        }else {
            this.setState({
                countBreak: 60,
                })  
            }
        }
        
         //для увеличения Session
    else {
      
        if (countSession < 60){ //увеличиваем до 60 мин.
            if (!isPlaying) {
                this.setState({
                    countSession: countSession + 1,
                    clockCount: (countSession + 1) * 60
                })
            }
         }else {
            this.setState({
                countSession: 60
            })
         } 
     }
}

decrease (e) {
    const {countBreak, countSession, isPlaying, } = this.state;
    if (e.target.id === "break-decrement") { 
       
        //для уменьшения break
        if (countBreak > 1){ //уменьшаем до 1
            if (!isPlaying) {
                this.setState({
                    countBreak: countBreak - 1,
                    clockCount: (countBreak - 1) * 60
                })
            }
        }else { //1 предел уменьшения
            this.setState({
                countBreak: 1,
                })  
            }
        }
        
         //для уменьшения Session
    else {
        if (countSession > 1){ //уменьшаем до 1
            if (!isPlaying) {
                this.setState({
                    countSession: countSession - 1,
                    clockCount: (countSession - 1) * 60
                })
            }
         }else {
            this.setState({
                countSession: 1
            })
         } 
     }  
}

    render() {
        const {countBreak,countSession,clockCount,currentTimer,isPlaying } = this.state 
        return(
            <div className = "app-container" id = "app">
                <h2 className = "main-title">25 + 5 Clock</h2>
                <Control decrease = {this.decrease} increase = {this.increase} countBreak = {countBreak} countSession = {countSession}/>
                <Timer clockCount = {clockCount} currentTimer = {currentTimer} isPlaying = {isPlaying} fun = {this.transformToTime} fun2 = {this.handlePlayPause} fun3 = {this.handleRefresh}/> 
            </div>
        )
    }
}

export default App


