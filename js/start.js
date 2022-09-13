"use strict";

let timerId,
    pos = 0,
    idAnim,
    clown;

const btn = document.querySelector('#btn_start'),
      btn_next = document.querySelector('#btn_next'),
      showWords = document.querySelector('.showWords'),
      select = document.querySelector('select'),
      main_btn = document.querySelector('#main_btn'),
      main = document.querySelector('.main'),
      alert_info = document.querySelector('#alert_info'),
      hello_h1 = document.querySelector('#hello_h1'),
      mainWord = document.querySelector('.mainWord'),
      descWord = document.querySelector('.descWord');


const words = [
    'Выкраивать с трудом находить',
    'Проша&#x301;мкать сказать невнятно, неотчетливо.',
    'Вкрадчиво расположить к себе своим поведением.',
    'Эфемерный краткосрочный, мимолетный.',
    'Кичиться высокомерно хвалиться чем-либо',
    'Опосты&#x301;леть надоесть, приесться.',
    'Инфернальный демонический, адский.',
    'Упоение восторг, восхищение.',
    'Пытливость стремящийся все узнать, любознательный.',
    'Беспечный беззаботный, несерьёзный, легкомысленный.',
    'Эксцентричный странный, необычный.',
    'Подспудный скрытый, латентный.',
    'Увещевание убеждение, уговаривание.',
    'Смятение паника, волнение.',
    'Проворный быстрый, резвый.',
    'Сепарировать отделять.',
    'Бойкий быстрый, ловкий',
    'Дефини&#x301;ция описание, краткое содержание',
    'Превратный ложный, лживый, искаженный',
    'Строптивый упрямый, любящий пререкаться',
    'Канючить плакаться, жаловаться на что-либо',
    'Превентивно заранее, заблаговременно',
    'Беспутный безрассудный, бестолковый',
    'Упразднить аннулировать',
    'Ерепениться противиться чему-либо',
    'Сварливый постоянно ворчащий, недовольный'
];

class wordsParam {
    constructor(mainWord, descWord) {
        this.mainWord = mainWord;
        this.descWord = descWord;
    }
}


const wordOne = new wordsParam('СПЗ', 'Система постановки завес'),
      wordTwo = new wordsParam('Тест2', 'Тестик2'),
      wordThree = new wordsParam('Тест3', 'Тестик3');

const arrBig = [
    wordOne,
    wordTwo,
    wordThree
];

console.log(arrBig.length);


function logger() {
    if (arrBig.length == 0) {
        delete_html();
    } else {
        alert_info.innerHTML = arrBig.length - 1;
        let i = randomInteger(0, arrBig.length-1);
        mainWord.innerHTML = arrBig[i].mainWord;
        descWord.innerHTML = arrBig[i].descWord;
        arrBig.splice(i, 1);
        console.log(arrBig);
    }
}

      
// const tests = {
//     mainWord: ''
// };

const spelling_words = [
    'Бессмысленно',
    'Несмышленый',
    'Бесследно',
    'Бесспорно',
    'Непривередливая',
    'Мастодонт'
];

const krugozor_words = [
    'Крепостное право было отменено <span id="blue">3 марта 1861</span> года <span id="blue">Александром 2</span>',
    'Полет Юрия Гагарина <span id="blue">12 апреля 1961 года</span>.',
    '5 океанов на земле: <span id="blue">тихий, атлантический, северный-ледовитый, индийский, южный</span>',
    '6 материков: <span id="blue">Северная Америка, Южная Америка, Евразия, Африка, Австралия, Антарктида</span>',
    'Самое большое озеро - <span id="blue">каспийское море</span>'
];


btn.addEventListener('click', () => {
    console.log(select.value);
    switch (select.value) {
        case 'Правописание':
            SpellingFunc();
            break;

        case 'Слова':
            logger();
            break;

        case 'Кругозор':
            console.log('Ага кругозор');
            KrugozorFunc();
            break;

        default:
            break;
    }
    clown = select.value;
    // main.style.display = 'flex';
    alert_info.style.display = 'block';
    // hello_h1.remove();
    // select.value == 'Spelling' ? timerId = setInterval(SpellingFunc, 3000) : timerId = setInterval(logger, 5000);
    btn.remove();
    select.remove();
    btn_next.style.display = 'block';
    alert_info.style.display = 'block';

});


btn_next.addEventListener('click', () => {
    switch (clown) {
        case 'Правописание':
            console.log('Ага правопис');
            SpellingFunc();
            break;

        case 'Слова':
            console.log('Ага слова');
            logger();
            break;

        case 'Кругозор':
            KrugozorFunc();
            break;

        default:
            break;
    }
});

main_btn.addEventListener('click', () => {
    location.reload();
});


function SpellingFunc() {
    if (spelling_words.length == 0) {
        delete_html();
    } else {
        alert_info.innerHTML = spelling_words.length - 1;
        let i = randomInteger(0, spelling_words.length - 1);
        showWords.innerHTML = '<span id="white">' + spelling_words[i] + '</span>';
        myAnimation();
        spelling_words.splice(i, 1);
    }
}


function KrugozorFunc() {
    if (krugozor_words.length == 0) {
        delete_html();
    } else {
        alert_info.innerHTML = krugozor_words.length - 1;
        let i = randomInteger(0, krugozor_words.length - 1);
        showWords.innerHTML = '<span id="white">' + krugozor_words[i] + '</span>';
        krugozor_words.splice(i, 1);
    }
}


function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


function delete_html() {
    btn_next.style.display = 'none';
    alert_info.style.display = 'none';
    showWords.innerHTML = 'Конец';
    main_btn.style.display = 'flex';
}