import React, { Component } from "react";

//Данные
const sounds = [
    {mark: "Heater-1", trigger: "Q", url : 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
    {mark: "Heater-2",  trigger: "W", url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
    {mark: "Heater-3",  trigger: "E", url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
    {mark: "Heater-4",  trigger: "A", url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
    {mark: "Clap",  trigger: "S", url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
    {mark: "Open-HH",  trigger: "D", url : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
    {mark: "Kick-n-Hat",  trigger: "Z", url : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
    {mark: "Kick",  trigger: "X", url : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
    {mark: "Closed-HH",  trigger: "C", url : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
  ]
  class Shell extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentMark: "",
      }
    }

    render(){
      return  (
          <div className = "container" id = "drum-machine">
          <div className = "control">
              <div id = "display">{this.state.currentMark}</div>
          </div>
          <div className='pad-wrap'>
                 {sounds.map (sound =>
                   <DrumPad fun = {this.playSound} name = {sound.trigger} mark = {sound.mark} audio = {sound.url}/>   
               )}
          </div>
          </div>
      )
    }
  }
  
  class DrumPad extends Component {
    constructor(props) {
      super(props);
        window.document.addEventListener('keydown', (e) =>  {
          if(e.key.toUpperCase() === props.name) {
            this._audioElement.play()
          }
        })
      this.playSound = this.playSound.bind(this)
    }
    
     playSound() {
      console.log(this._audioElement)
      this._audioElement.play()
      
      this.setState({
        currentMark: console.log(1)
      })
    } 
    render() {
      const {name, mark, audio} = this.props;
      return (
                 
                    <div className = "drum-pad" id = {mark} onClick = {this.playSound}>
              {name}
                  <audio ref = {(audio) => this._audioElement = audio} className = "clip" src = {audio} id = {name}/>
                    </div>
                
      )
    }  
  }
export default Shell
