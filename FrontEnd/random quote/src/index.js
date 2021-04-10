var btn = document.getElementsByClassName("btn-quote");
var text = document.getElementById("text");
var author = document.getElementById('author')
var l = ''
var quoteBase = [
     {'quote' : "Это просто безумство: делать то же самое и ждать других результатов.",'author' : "- Альберт Эйнштейн", 'image' : 'img/Einstein-2.jpg'
        },
        {
            'quote' : "Алиса: Как долго это навсегда? Белый Кролик: Иногда только одна секунда.",'author' : "- Льюис Кэрролл", 'image' : 'img/img/Alice.jpg'
        },
        {
            'quote' : "Они смеются надо мной, потому что я другой, я смеюсь над ними, потому что они все одинаковые.",
            'author' : "- Курт Кобейн"
        },
        {
            'quote' : "Когда власть любви превзойдёт любовь к власти, настанет мир на Земле.",
            'author' : "- Джимми Хендрикс", 'image' : 'img/Hendrix.jpg'
        },
        {
            'quote' : "По жизни я всегда ходил по острию темной стороны, рассуждая, а что будет, если зайти немного дальше положенного. Кто может сказать тебе, что нужно остановиться? Что будет за следующей дверью? Вдруг ты получишь великую мудрость от того, что забредешь в темноту подальше? Но через время ты окажешься слишком глубоко в зыбучих песках.",
            'author' : "- Трент Резнор", 'image' : 'img/Reznor.jpg'
        },
        {
            'quote' : "Очень немногие могут сказать: я люблю человечество. Я не из них.",
            'author' : "- Дэвид Боуи"
        },
        {
            'quote' : "Действие даже самого крохотного существа приводит к изменениям во всей вселенной.",
            'author' : "- Никола Тесла"
        },
        {
            'quote' : "Власть — это наркотик. Кто попробовал его хоть раз — отравлен ею навсегда.",
            'author' : "- Уинстон Черчиль", 'image' : 'img/Cherchil.jpg'
        },
        {
            'quote' : "Бедный человек не тот, у которого нет ни гроша в кармане, а тот, у которого нет мечты.",
            'author' : "- Сократ"
        },
        {
            'quote' : "Мы говорим с тобой на разных языках, как всегда. Но вещи, о которых мы говорим, от этого не меняются.",
            'author' : "- Михаил Булгаков"
        },
        {
            'quote' : "Всё приходит вовремя для того, кто умеет ждать.",
            'author' : "- Михаил Кутузов"
        },
        {
            'quote' : "Анархия это такое мироустройство, которое лишь на одного. Двое — это уже слишком, безобразно много.",
            'author' : "- Егор Летов", 'image' : 'img/Letov.jpg'
        },
        {
            'quote' : "Работать надо не 12 часов, а головой.",
            'author' : "- Стив Джобс"
        },
        {
            'quote' : "Самая страшная потеря – это потеря любви: к миру, к себе, к людям, к жизни.",
            'author' : "- Александр Башлачев", 'image' : 'img/Letov.jpg'
        },

]

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
  ]

window.onload = init;
    function init() {
    return handleChange()
}


function handleChange() {
    changeQuote();
    changeColor();
}

function changeQuote () {
     //Изменение на случайную цитату
    let randomQuote = createRandom(0, quoteBase.length-1)
    let currentQuote = quoteBase[randomQuote].quote
    let currentAuthor = quoteBase[randomQuote].author
    text.innerText = currentQuote
    author.innerText = currentAuthor
}


function changeColor () {
    //Изменение на случайный цвет
    let randomColor = createRandom(0, colors.length-1)
    text.style.color = colors[randomColor]
    author.style.color = colors[randomColor]
    btn[0].style.background = colors[randomColor]
    btn[1].style.background = colors[randomColor]
    btn[2].style.background = colors[randomColor]

}

//Создание случайного цвета или цитаты
function createRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
