import React, {Component} from "react"
import Timer from "./Timer"

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countBreak: 5,
            countSession: 25 
        }
        this.increaseBreak = this.increaseBreak.bind(this);
        this.decreaseBreak = this.decreaseBreak.bind(this)
    }

    // ОСТАНОВИЛСЯ СДЕСЬ. Придумать функцию которая в зависимости от нажатого знака (+ или -) уыкличивает или уменьшает счетчика соответсвенно.

    increaseBreak () {
        this.setState({
            countBreak: this.state.countBreak + 1
        })
    }

    decreaseBreak () {
        this.setState({
            countBreak: this.state.countBreak - 1
        })
    }

    render() {
        const {countBreak,countSession} = this.state 
        return(
            <div className = "control">

                <div className= "length-control">
                    <div className = "breack">
                        <div className = "label" id = "break-label">Break Length</div>

                        <button className ="btn-level" id = "break-decrement" onClick = {this.decreaseBreak}>-</button>

                        <span className = "valueBreak-length"id = "break-length">{countBreak}</span>
                        
                        <button className ="btn-level" id = "break-increment" onClick = {this.increaseBreak}>+</button>
                    </div>{/*breack*/}
                        
                    <div className = "session">
                        <div className = "label" id = "session-label">Session Length</div>
                        
                        <button className ="btn-level" id = "session-decrement">-</button>
                        
                        <span className = "valueSession-length"id = "session-length">{countSession}</span>
                        
                        <button className ="btn-level" id = "session-increment">+</button>
                    </div> {/*session*/}
                </div> {/*length-control*/}
                <Timer session = {this.state.countSession}/>
            </div>
        )
    }
}

export default Control