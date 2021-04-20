//Запауск таймера 
export default function handlePlayPause ()  {
    const audio = document.querySelector("#beep")
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