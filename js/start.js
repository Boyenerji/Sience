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
      picWord = document.querySelector('.picWord'),
      mainWord = document.querySelector('.mainWord'),
      descWord = document.querySelector('.descWord'),
      testImg = document.querySelector('#testImg');

class wordsParam {
    constructor(mainWord, descWord, pic) {
        this.mainWord = mainWord;
        this.descWord = descWord;
        this.pic = pic;
    }
}





// const wordOne = new wordsParam(
//         'СПЗ (Система постановки завес)', 
//         'Система постановки завес. Аэрозольные гранаты для блокирования ПТУР с инфракрасными ГСН.', 
//         '<img src="../pictures/pic2.jpg" alt="img">'),
//         // '<img src="../pictures/pic2.jpg" alt="img">'),

//         // '<img src="../pictures/pic2.jpg" alt="img">'),

//       wordTwo = new wordsParam(
//         'Планка Пикатинни', 
//         'Система рельсового крепления для стрелкового оружия', 
//         '<img src="../pictures/pic1.jpg" alt="img">'),

//       wordThree = new wordsParam(
//         'Термобарические снаряды', 
//         'Снаряды, при взрыве образующие облако аэрозоля горючего вещества.', 
//         '<img src="../pictures/termo.jpg" alt="img">');

// const massiv = [
//     wordOne,
//     wordTwo,
//     wordThree
// ];


let massiv = [
    {
        name: 'Термобарические снаряды',
        desc: 'Снаряды, при взрыве образующие облако аэрозоля горючего вещества.',
        pic: '<img src="../pictures/termo.jpg" alt="img">'
    },
    {
        name: 'СПЗ (Система постановки завес)',
        desc: 'Система постановки завес. Аэрозольные гранаты для блокирования ПТУР с инфракрасными ГСН.',
        pic: '<img src="../pictures/pic2.jpg" alt="img">'
    },
    {
        name: 'Планка Пикатинни',
        desc: 'Система рельсового крепления для стрелкового оружия.',
        pic: '<img src="../pictures/pic1.jpg" alt="img">'
    }
];



function logger() {
    if (massiv.length == 0) {
        delete_html();
    } else {
        alert_info.innerHTML = massiv.length - 1;
        let i = randomInteger(0, massiv.length - 1);
        picWord.innerHTML = massiv[i].pic;
        console.log(massiv[i].pic);
        mainWord.innerHTML = massiv[i].name;
        descWord.innerHTML = massiv[i].desc;
        massiv.splice(i, 1);
        // console.log(massiv);
    }
}

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
        case 'Кругозор':
            console.log('Ага кругозор');
            KrugozorFunc();
            break; 
               
        case 'Общее развитие':
            logger();
            break;     
           
        default:
            break;
    }
    clown = select.value;
    alert_info.style.display = 'block';
    btn.remove();
    select.remove();
    btn_next.style.display = 'block';
    alert_info.style.display = 'block';
    showWords.style.display = 'flex';
});


btn_next.addEventListener('click', () => {
    switch (clown) {
        case 'Кругозор':
            KrugozorFunc();
            break;

        case 'Общее развитие':
            logger();
            break; 

        default:
            break;
    }
});

main_btn.addEventListener('click', () => {
    location.reload();
});

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