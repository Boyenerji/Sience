"use strict";

let timerId,
    pos = 0,
    idAnim,
    clown;

let   btn = document.querySelector('#btn_start'),
      body = document.querySelector('body'),
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
      dateWord = document.querySelector('.dateWord');

// class wordsParam {
//     constructor(mainWord, descWord, pic) {
//         this.mainWord = mainWord;
//         this.descWord = descWord;
//         this.pic = pic;
//     }
// }





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

// const arrWords = [
//     wordOne,
//     wordTwo,
//     wordThree
// ];


// trueAnswers: {
//     trueOne: '<input type="submit" value="Первая кнопка">'
// }


let arrWords = [
    {
        pic: '<img src="../pictures/termo.jpg" alt="img">',
        name: 'Термобарические снаряды',
        desc: 'Снаряды, при взрыве образующие облако аэрозоля горючего вещества.',
        dateWord: ''
    },
    {
        pic:  '<img src="../pictures/pic2.jpg" alt="img">',
        name: 'СПЗ (Система постановки завес)',
        desc: 'Система постановки завес. Аэрозольные гранаты для блокирования ПТУР с инфракрасными ГСН.',
        dateWord: ''
    },
    {
        pic:  '<img src="../pictures/pic1.jpg" alt="img">',
        name: 'Планка Пикатинни',
        desc: 'Система рельсового крепления для стрелкового оружия.',
        dateWord: ''
    },
    {
        pic:  '<img src="../pictures/pic4.jpg" alt="img">',
        name: 'Термодымовая аппаратура (ТДА).',
        desc: 'Cистема постановки дымовых завес на танках, основанная на принципе испарения топлива с горячих деталей двигателя.',
        dateWord: ''
    },
    {
        pic:  '<img src="../pictures/pic5.jpg" alt="img">',
        name: 'Куликовская битва.',
        desc: 'Крупное сражение между русским войском и войском Золотой Орды.',
        dateWord: '8 сентября 1380 года.'
    },
    {
        pic:  '<img src="../pictures/pravo.jpg" alt="img">',
        name: 'Отмена крепостного права.',
        desc: 'Александром II.',
        dateWord: '3 марта 1861 года.'
    },
    {
        pic:  '<img src="../pictures/5-okeanov.jpg" alt="img">',
        name: '5 океанов на земле.',
        desc: 'Тихий, атлантический, северный-ледовитый, индийский, южный.',
        dateWord: ''
    },
    {
        pic:  '<img src="../pictures/materics.jpg" alt="img">',
        name: '6 материков на земле.',
        desc: 'Северная Америка, Южная Америка, Евразия, Африка, Австралия, Антарктида.',
        dateWord: ''
    }
];

function logger() {
    if (arrWords.length == 0) {
        location.reload();
    } else {
        if (dateWord.style.display == 'block') {
            dateWord.style.display = 'none';
        }
        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((arrWords.length - 1) != 0) {
            alert_info.innerHTML = arrWords.length - 1;
        } else {
            alert_info.innerHTML = 'Последняя';
        }
        let i = randomInteger(0, arrWords.length - 1);
        picWord.innerHTML = arrWords[i].pic;
        mainWord.innerHTML = arrWords[i].name;
        descWord.innerHTML = arrWords[i].desc;
        if (arrWords[i].dateWord.length > 0) {
            dateWord.style.display = 'block';
            dateWord.innerHTML = `${arrWords[i].dateWord}`;
        }
        arrWords.splice(i, 1);
        setTimeout(() => {
            main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
        }, 800);
    }
}


// const krugozor_words = [
//     {
//         name: '6 материков',
//         desc: 'Северная Америка, Южная Америка, Евразия, Африка, Австралия, Антарктида.',
//         dateWord: ''
//     },
//     {
//         name: 'Куликовская битва.',
//         desc: 'Крупное сражение между русским войском и войском Золотой Орды.',
//         dateWord: '8 сентября 1380 года'
//     }
// ];


// function KrugozorFunc() {
//     if (krugozor_words.length == 0) {
//         location.reload();
//     } else {
//         dateWord.innerHTML = '';
//         if (dateWord.style.display == 'block') {
//             dateWord.style.display = 'none';
//         }
//         main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
//         if ((krugozor_words.length - 1) != 0) {
//             alert_info.innerHTML = krugozor_words.length - 1;
//         } else {
//             alert_info.innerHTML = 'Последняя';
//         }
//         let i = randomInteger(0, krugozor_words.length - 1);
//         mainWord.innerHTML = krugozor_words[i].name;
//         descWord.innerHTML = krugozor_words[i].desc;

//         if (krugozor_words[i].dateWord.length > 0) {
//             dateWord.style.display = 'block';
//             dateWord.innerHTML = `${krugozor_words[i].dateWord}`;
//         }
//         krugozor_words.splice(i, 1);
//         setTimeout(() => {
//             main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
//         }, 800);
//     }
// }



btn.addEventListener('click', () => {
    logger();
    clown = select.value;
    alert_info.style.display = 'block';
    btn.remove();
    select.remove();
    hello_h1.remove();
    btn_next.style.display = 'block';
    alert_info.style.display = 'block';
    showWords.style.display = 'flex';
});


btn_next.addEventListener('click', () => {
    logger();
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

DarkTheme();
function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 19 || date.getHours() < 6) {
        body.style.backgroundColor = '#343a40';
        hello_h1.style.color = '#fff';
        main.style.backgroundColor = '#495057';
        mainWord.style.color = '#fff';
        descWord.style.color = '#adb5bd';
        alert_info.style.backgroundColor = '#343a40';
        alert_info.style.color = '#fff';
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
    }
}
