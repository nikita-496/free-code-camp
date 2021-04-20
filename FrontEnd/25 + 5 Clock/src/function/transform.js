
//Перевод к формату мм::cc (время)
export default function transformToTime (count) {
    const minutes = Math.floor(count / 60);
    let seconds = count % 60; 

    seconds = seconds < 10 ? ('0' + seconds) : seconds;

    return `${minutes}:${seconds}`
}