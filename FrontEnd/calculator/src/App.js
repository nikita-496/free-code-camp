import React, { Component } from "react";
import propTypes from "prop-types";
import { create, all } from "mathjs"

const config = { }
const math = create(all, config)

//Данные 
const collectionNum  = [
    {name: '1', class: 'item one-group', id: 'one'}, {name: '2',class: 'item one-group', id: 'two'}, {name: '3',class: 'item one-group', id: 'three'}, {name: '4',class: 'item two-group', id: 'four'}, {name: '5',class: 'item two-group', id: 'five'}, {name: '6',class: 'item two-group', id: 'six'}, {name: '7',class: 'item three-group', id: 'seven'}, {name: '8', class: 'item three-group', id: 'eight'},  {name: '9', class: 'item three-group',id: 'nine'}
    ]
    
    const COLLECTIONTOOLS = [
      {name : "AC", class: 'item clean', id : 'clear'}, {name : '/', class: 'item-division manipulation', id : 'divide'},{name : '*', class: 'item-multi manipulation', id : 'multiply'},{name : '-', class: 'item-minus manipulation', id : 'subtract'}, {name : "+", class: 'item-plus manipulation', id : 'add'}, {name : "=", class: 'item-equal equal', id : 'equals'},{name : ".", class: 'item-decimal', id : 'decimal'},{name : "0", class: 'item-nil nil', id : 'zero'}
    ];

    
    class App extends Component {
      constructor(props){
        super(props);
       this.state = { currentValue: '0'};
       this.setValue = this.setValue.bind(this);
       this.outputValue = this.outputValue.bind(this);
      }
      
      //Отображение введенных данных с кнопок калькулятора на дисплей калькулятора
      setValue (items) {
        let input = this.state.currentValue;
         if (items === "AC") { 
          input = '0';
        }

        //Обработка вывода десятичных чисел (чтобы десятичный знак в числе присутсовал только один раз)
        else if (items === ".") {
            if(input.indexOf("+") === -1 && input.indexOf("-") === -1 && input.indexOf("*") === -1 && input.indexOf("/") === -1) {
              if (input.indexOf(".")=== -1) {input+= items}
            }

            else {
              if (input.split("").filter(n => n === ".").length === 1) {input+= items}
            }

        }

        //Обработка 13 пункта в тесте FCC
        /* 
        else if ((input[input.length-1] && input[input.length-2] === '+') || (input[input.length-1] && input[input.length-2] === '-') || (input[input.length-1] && input[input.length-2] === '*') || (input[input.length-1] && input[input.length-2] === '/')) {
          if (input[input.length-1] === "-") {}
        }*/

        else {
          if(input === '0') {input = ""}
          input += items
         
        }
        this.setState ({ currentValue: input })
      }

      //Выво в десплее резульата введенной операции с числами 
       outputValue () {
         let output = this.state.currentValue;
         this.setState ({currentValue: math.evaluate(output)})
      }

      render() {
        const {currentValue} = this.state
        return(
            <div className="calculator">
             
            <div className = "formulaScreen"> {currentValue} </div>
            <div className = "format_display" id = "display"> {currentValue} </div>
              
              {collectionNum.map(item => <Tools text = {item.name} trigger = {item.id} nameClass = {item.class} setValue = {this.setValue} output = {this.outputValue}/>)}
             
              
              {COLLECTIONTOOLS.map(item => <Tools text = {item.name} trigger = {item.id} nameClass = {item.class} setValue = {this.setValue} output = {this.outputValue}/>)}
              
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

export default App 