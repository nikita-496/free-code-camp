export default function increase (e) {
    const {countBreak, countSession, isPlaying} = this.state;
    if (e.target.id === "break-increment") { 
    
        //для увеличения break
    if (countBreak < 60){ //увеличиваем до 60 мин.
        if (!isPlaying) {
            this.setState({
                countBreak: countBreak + 1,
                clockCount: (countBreak + 1) * 60
            })
        }
    }else {
        this.setState({
            countBreak: 60,
            })  
        }
        this.setState({ //флаг отображения таймера при установки времени
            viewTimer : false
        })
    }
    
     //для увеличения Session
else {
    if (countSession < 60){ //увеличиваем до 60 мин.
        if (!isPlaying) {
            this.setState({
                countSession: countSession + 1,
                clockCount: (countSession + 1) * 60
            })
        }
     }else {
        this.setState({
            countSession: 60
        })
     }
     this.setState({ //флаг отображения таймера при установки времени
        viewTimer : true,
    }) 
 }
}