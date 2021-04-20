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
            currentTimer: 'Session',
            interval: undefined,
            isPlaying: false,
            viewTimer: true,
        }
        this.transformToTime = this.transformToTime.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this)
    }

    //Прекращение работы тайимера - время вышло
componentWillUnmount() {
    clearInterval(this.interval);
}
//Запауск таймера (Проверено)
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
    });//Зачем это писать, влияет ли это на работу приложения ?
    clearInterval(this.interval);

    //Отключения звукового сигнала при клике на кнупку сброс 
    audio.pause();
    audio.currentTimer = 0;
}

//Перевод к формату мм::cc (время)
transformToTime = (count, flag) => {
    if (!flag) {count *= 60}  //чтоюбы при установки времени breack не отображался на дисплее
    console.log(flag)
    let minutes = Math.floor(count / 60);
    let seconds = count % 60; 

    minutes = minutes < 10 ? ('0' + minutes) : minutes;
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
                    clockCount: (countBreak + 1) * 60,
                    viewTimer: false
                })
            }
        }else {
            this.setState({
                countBreak: 60,
                viewTimer: false
                })  
            }
        }
        
         //для увеличения Session
    else {
      
        if (countSession < 60){ //увеличиваем до 60 мин.
            if (!isPlaying) {
                this.setState({
                    countSession: countSession + 1,
                    clockCount: (countSession + 1) * 60,
                    viewTimer: true
                })
            }
         }else {
            this.setState({
                countSession: 60,
                viewTimer: true
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
                    clockCount: (countBreak - 1) * 60,
                    viewTimer: false
                })
            }
        }else { //1 предел уменьшения
            this.setState({
                countBreak: 1,
                viewTimer: false
                })  
            }
        }
        
         //для уменьшения Session
    else {
        if (countSession > 1){ //уменьшаем до 1
            if (!isPlaying) {
                this.setState({
                    countSession: countSession - 1,
                    clockCount: (countSession - 1) * 60,
                    viewTimer: true
                })
            }
         }else {
            this.setState({
                countSession: 1,
                viewTimer: true
            })
         } 
     }  
}
//Установка времени должна отображаться только для Session 
/*setTimer = (time) => {
    const view = this.state.viewTimer
    console.log(view)
    console.log(time)
    let a = this.transformToTime(time);
     return (view) ? a = this.transformToTime(time) : 1
    
}*/

handleLengthChange = (count, timerType) => {
    const {countSession, countBreak, isPlaying, currentTimer} = this.state;
    let newCount;

    if(timerType === 'Session') {newCount = countSession + count}
    else {newCount = countBreak + count}

    if(newCount > 0 && newCount < 61 && !isPlaying) { 
        this.setState({
            [`${timerType}Count`] : newCount
        });

        if(currentTimer.toLowerCase() === timerType) {
            this.setState({
                clockCount: newCount * 60
            })
        }
    }
}

render() {
    const {countBreak,countSession,clockCount,currentTimer,isPlaying, viewTimer } = this.state;
    const {handlePlayPause, handleRefresh, transformToTime, increase, decrease} = this
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
                    countSession = {countSession}
                    currentTimer = {currentTimer} 
                    isPlaying = {isPlaying} 
                    view = {viewTimer} 
                    transform = {transformToTime} 
                    start = {handlePlayPause} 
                    refresh = {handleRefresh}
                /> 
        </div>
        )
    }
}

export default App


