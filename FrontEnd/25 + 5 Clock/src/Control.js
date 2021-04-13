import React, {Component} from "react"
import Timer from "./Timer"

//импорт font font awesome


class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countBreak: 5,
            countSession: 25
        }
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this)
    }

    
    //Запушить на гитхаб. Коммит - добавлена функциональность приложения
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
        const {countBreak,countSession} = this.state 
        return(
            <div className = "control">

                <div className= "length-control">
                    <div className = "breack"> {/*breakParent*/}
                        <div className = "label" id = "break-label">Break Length</div>

                        <button className ="btn-level" id = "break-decrement" onClick = {this.decrease}>-</button>

                        <span className = "valueBreak-length"id = "break-length">{countBreak}</span>
                        
                        <button className ="btn-level" id = "break-increment" onClick = {this.increase}>+</button> {/*last-child*/}
                    </div>{/*breack*/}
                        
                    <div className = "session">
                        <div className = "label" id = "session-label">Session Length</div>
                        
                        <button className ="btn-level" id = "session-decrement"onClick = {this.decrease} >-</button>
                        
                        <span className = "valueSession-length"id = "session-length">{countSession}</span>
                        
                        <button className ="btn-level" id = "session-increment" onClick = {this.increase}>+</button>
                    </div> {/*session*/}
                </div> {/*length-control*/}
                <Timer session = {this.state.countSession}/>
            </div>
        )
    }
}

export default Control