import React, {Component} from "react"

class Control extends Component {
    render() {
        return(
            <div className = "control">

                <div className= "length-control">
                    <div className = "breack">
                        <div className = "label" id = "break-label">Break Length</div>

                        <button className ="btn-level" id = "break-decrement" onClick = {this.props.decrease}>-</button>

                        <span className = "valueBreak-length"id = "break-length">{this.props.countBreak}</span>
                        
                        <button className ="btn-level" id = "break-increment" onClick = {this.props.increase}>+</button> 
                    </div>{/*breack*/}
                        
                    <div className = "session">
                        <div className = "label" id = "session-label">Session Length</div>
                        
                        <button className ="btn-level" id = "session-decrement"onClick = {this.props.decrease} >-</button>
                        
                        <span className = "valueSession-length"id = "session-length">{this.props.countSession}</span>
                        
                        <button className ="btn-level" id = "session-increment" onClick = {this.props.increase}>+</button>
                    </div> {/*session*/}
                </div> {/*length-control*/}
            </div>
        )
    }
}

export default Control