import React, {Component} from "react";

class Tools extends Component{
    constructor(props){
        super(props);
        this.state = {currentValue: this.props.text}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      if (this.props.text !== "=") {
       this.props.setValue(this.state.currentValue)
      }
      else {this.props.output()}
    }

  render() {
    const {text,nameClass,trigger} = this.props; 

    return(
          <button className={nameClass} id = {trigger} onClick = {this.handleClick}>
            {text}
          </button>
    )
  }
}

export default Tools