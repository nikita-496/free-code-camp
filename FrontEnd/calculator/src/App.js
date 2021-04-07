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
       this.state = { currentValue: '0', operatorsFlag: false, decimalFlag: false};
       this.setValue = this.setValue.bind(this);
       this.outputValue = this.outputValue.bind(this);
      }
      
      //Отображение введенных данных с кнопок калькулятора на дисплей калькулятора
      setValue (items) {
        let input = this.state.currentValue
        let operatorsFlag = this.state.operatorsFlag
        switch (true) {
          case items ==="0" || items ==="1" || items ==="2" || items ==="3" || items ==="4" || items ==="5" ||
               items ==="6" || items ==="7" || items ==="8" || items ==="9" : 
                if (input === "0") {input = ""} //сбрасываем ноль впереди чисел
                input += items
                operatorsFlag = false
          break;
          case items ==="+" || items ==="*" || items ==="-" || items ==="/": 
                if (!operatorsFlag) {input += items; operatorsFlag = true; this.setState( {decimalFlag: false} )}
                //Смена операторов на месте (если после нажатия на кнопку с операторми нажали на еще одну кнопку с операторами, оператор меняется на значени последней нажатой кнопки. 13 пункт в тестах) 
                else {
                  if (items !== "-") {
                    input += items
                    let discharge = input.replace(/[^.\d]/g, "") //сброс всех операторов стоящих до текущего оператора
                    input = discharge + items // замена сброшенных операторов на текущий

                    let currentOperators = input.substring(0,input.length-1)
                    input = currentOperators
                    input += items
                  }
                  else {
                    input += items
                  }
                }

          break;
          case  items ===".":
            let decimalFlag = this.state.decimalFlag;
            if (!decimalFlag) {
              input += "."
              this.setState( {decimalFlag: true} )
            }

          break;
          case items ==="AC":
                if(input !== '0')  {input = '0'}
                this.setState( {decimalFlag: false} )
          break;
          default:

          break;
        }
        this.setState( {operatorsFlag: operatorsFlag} )
        this.setState( {currentValue: input} )
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