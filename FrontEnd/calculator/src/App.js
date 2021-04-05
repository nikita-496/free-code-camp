import React, { Component } from "react";
import propTypes from "prop-types";

//Данные 
const collectionNum  = [
    {name: '1', class: 'item one-group', id: 'one'}, {name: '2',class: 'item one-group', id: 'two'}, {name: '3',class: 'item one-group', id: 'three'}, {name: '4',class: 'item two-group', id: 'four'}, {name: '5',class: 'item two-group', id: 'five'}, {name: '6',class: 'item two-group', id: 'six'}, {name: '7',class: 'item three-group', id: 'seven'}, {name: '8', class: 'item three-group', id: 'eight'},  {name: '9', class: 'item three-group',id: 'nine'}
    ]
    
    const COLLECTIONTOOLS = [
      {name : "AC", class: 'item clean', id : 'clear'}, {name : '/', class: 'item-division manipulation', id : 'divide'},{name : 'x', class: 'item-multi manipulation', id : 'multiply'},{name : '-', class: 'item-minus manipulation', id : 'subtract'}, {name : "+", class: 'item-plus manipulation', id : 'add'}, {name : "=", class: 'item-equal equal', id : 'equals'},{name : ".", class: 'item', id : 'decimal'},{name : "0", class: 'item-nil nil', id : 'zero'}
    ]
    
    class App extends Component {
      constructor(props){
        super(props);
       this.state = { currentValue: '0'};
       this.setValue = this.setValue.bind(this)
      }
      

      setValue (items) {
        let num = ""
        if (items === "AC") {
          num = '0'
        }
        else {
            num+=(items)
        }
        
        this.setState ({ currentValue: num })


        /*
          //let num = this.state.currentValue
          console.log(items) 
          if (items === "AC") { this.setState({ currentValue: '0' }) }

          this.setState ({
            //currentValue: num.concat(items)
            currentValue: items
          })
          */

      }

      outputValue () {

      }

      render() {
        const {currentValue} = this.state
        return(
            <div className="calculator">
             
            <input className = "format_display" name = "textview" type = "text"  id = "display" placeholder = {currentValue}></input>
              
              {collectionNum.map(item => <Tools text = {item.name} trigger = {item.id} nameClass = {item.class} setValue = {this.setValue}/>)}
             
              
              {COLLECTIONTOOLS.map(item => <Tools text = {item.name} trigger = {item.id} nameClass = {item.class} setValue = {this.setValue}/>)}
              
            </div>
        )
      }
    }

    App.propTypes = {
      text: propTypes.string.isRequired,
      setValue: propTypes.object.isRequired
    }
     
    class Tools extends Component{
        constructor(props){
            super(props);
            this.state = {currentValue: this.props.text}
        }
      
      render() {
        const {text,nameClass,trigger} = this.props; 
        return(
              <button className={nameClass} id = {trigger} onClick = { () => { this.props.setValue(this.state.currentValue) }}>
                {text}
              </button>
        )
      }
    }

export default App 