//Сброс таймера 
export default function handleRefresh () {
    const audio = document.querySelector("#beep")
    this.setState({
        countBreak: 5,
        countSession: 25,
        clockCount: 25 * 60,
        currentTimer: "Session",
        isPlaying: false,
    });
    clearInterval(this.interval);

    //Отключения звукового сигнала при клике на кнупку сброс 
    audio.pause();
    audio.currentTimer = 0;
}


