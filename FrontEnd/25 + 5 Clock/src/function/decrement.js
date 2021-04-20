export default function decrease (e) {
    const {countBreak, countSession, isPlaying, } = this.state;
    if (e.target.id === "break-decrement") { 
       
        //для уменьшения break
        if (countBreak > 1){ //уменьшаем до 1
            if (!isPlaying) {
                this.setState({
                    countBreak: countBreak - 1,
                    clockCount: (countBreak - 1) * 60
                })
            }
        }else { //1 предел уменьшения
            this.setState({
                countBreak: 1,
                })  
            }
            this.setState({ //флаг отображения таймера при установки времени
                viewTimer : false,
            }) 
        }
        
         //для уменьшения Session
    else {
        if (countSession > 1){ //уменьшаем до 1
            if (!isPlaying) {
                this.setState({
                    countSession: countSession - 1,
                    clockCount: (countSession - 1) * 60
                })
            }
         }else {
            this.setState({
                countSession: 1
            })
         } 
         this.setState({ //флаг отображения таймера при установки времени
            viewTimer : true,
        }) 
     }  
}
