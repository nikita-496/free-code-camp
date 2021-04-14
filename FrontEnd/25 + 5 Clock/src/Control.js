import React, {Component} from "react"
import Timer from "./Timer"


class Control extends Component {
    constructor(props) {
        super(props);
        this.interval = undefined
        this.state = {
            countBreak: 5,
            countSession: 25,
            clockCount: 25 * 60,
            currentTimer: "Session",
            isPlaying: false,
            interval: undefined
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this)
    }
    //Запауск таймера 
    handlePlayPause = () => {
        const { isPlaying } = this.state;

        if ( isPlaying) { //если тайме приостановлен
            clearInterval(this.interval);
            this.setState({
                isPlaying: false  
            }) 
        }
        else { // если запущен
             this.interval = setInterval(()=> { const {clockCount} = this.state;
             this.setState({
                 clockCount: clockCount - 1
             })
            }, 1000);
            this.setState({
                isPlaying: true  
            })
        }
    } 
 

    //Прекращение работы тайимера - время вышло
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    //Перевод к формату мм::cc (время)
    transformToTime = (count) => {
        const minutes = Math.floor(count / 60);
        let seconds = count % 60; 

        seconds = seconds < 10 ? ('0' + seconds) : seconds;

        return `${minutes}:${seconds}`
    }

    increase (e) {
            if (e.target.id === "break-increment") { 
                this.setState({
                countBreak: this.state.countBreak + 1
            })
            } else {
                this.setState({
                    countSession: this.state.countSession + 1
                }) 
            } 
    }
    
    decrease (e) {
        if (e.target.id === "break-decrement") { 
            if (this.state.countBreak <= 1){ //уменьшаем до 1
                this.setState({
                    countBreak: 1
                }) 
            }else {
                this.setState({
                    countBreak: this.state.countBreak - 1
                })
            } 
           
        } else {
           if (this.state.countSession <= 1){ //уменьшаем до 1
                this.setState({
                    countSession: 1
                }) 
            }else {
                this.setState({
                    countSession: this.state.countSession - 1
                })
            } 
        } 
    }

    render() {
        const {countBreak,countSession,clockCount,currentTimer } = this.state 
        return(
            <div className = "control">

                <div className= "length-control">
                    <div className = "breack">
                        <div className = "label" id = "break-label">Break Length</div>

                        <button className ="btn-level" id = "break-decrement" onClick = {this.decrease}>-</button>

                        <span className = "valueBreak-length"id = "break-length">{countBreak}</span>
                        
                        <button className ="btn-level" id = "break-increment" onClick = {this.increase}>+</button> 
                    </div>{/*breack*/}
                        
                    <div className = "session">
                        <div className = "label" id = "session-label">Session Length</div>
                        
                        <button className ="btn-level" id = "session-decrement"onClick = {this.decrease} >-</button>
                        
                        <span className = "valueSession-length"id = "session-length">{countSession}</span>
                        
                        <button className ="btn-level" id = "session-increment" onClick = {this.increase}>+</button>
                    </div> {/*session*/}
                </div> {/*length-control*/}
            <Timer clockCount = {clockCount} currentTimer = {currentTimer} fun = {this.transformToTime} fun2 = {this.handlePlayPause}/> 
            </div>
        )
    }
}

export default Control