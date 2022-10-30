"use strict";

// import express from 'express';
// import mongoose from 'mongoose';


// mongoose
//     .connect('mongodb+srv://bratik026:ZnFa1997@cluster0.4oaxb.mongodb.net/?retryWrites=true&w=majority')
//     .then(() => console.log('DB OK'))
//     .catch((err) => console.log('DB ERROR', err));


// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello world');
// });


// // app.post('/auth/login', (req, res) => {

// // });

// app.listen(4444, (err) => {
//     if (err) {
//         return console.log(err);
//     }

//     console.log('Server ok');
// });

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
      idImg = document.querySelector('#idImg'),
      mainTwo = document.querySelector('.mainTwo'),
      next = document.querySelector('.next'),
      dateWord = document.querySelector('.dateWord');

// class wordsParam {
//     constructor(mainWord, descWord, pic) {
//         this.mainWord = mainWord;
//         this.descWord = descWord;
//         this.pic = pic;
//     }
// }


// let right = {
//     Клоун: {
//         rigth1: `<button class="btn" value='Клиун'>Клиун</button>`,
//         right2: `<button class="btn" value='Клиун2'>Клиун2</button>`
//     }
// };

// if (right.Клоун == )

// // main.innerHTML = right.test1.rigth1;
// console.dir(right);




let WordsArr = [
    {
        name: 'Гнусный.',
        desc: 'Внушающий отвращение, омерзительный.',
    },
    {
        name: 'Разверзаться.',
        desc: 'Широко раскрываться, раздвигаться.',
    },
    {
        name: 'Экспансивный.',
        desc: 'Бурно проявляющий свои чувства.',
    },
    {
        name: 'Удручённый.',
        desc: 'Крайне огорчённый, находящийся в подавленном состоянии.',
    },
    {
        name: 'Фригидный.',
        desc: 'Холодный, безразличный в половых отношениях.',
    },
    {
        name: 'Флагелляция.',
        desc: 'Порка подчиняющегося партнера доминирующим при помощи различных предметов.',
    },
    {
        name: 'Согбенный.',
        desc: 'Сгорбленный, согнутый.',
    },
    {
        name: 'Изобиловать.',
        desc: 'Иметь что-либо в большом количестве.',
    },
    {
        name: 'Лакей.',
        desc: 'Слуга в частном доме.',
    },
    {
        name: 'Мириада.',
        desc: 'Бесчисленное количество.',
    },
    {
        name: 'Филантроп.',
        desc: 'Благотворитель. Покровитель нуждающихся.',
    },
    {
        name: 'Пассат.',
        desc: 'Постоянное воздушное течение в тропических широтах над океанами.',
    },
    {
        name: 'Цербер.',
        desc: 'Властный человек, стесняющий чью-либо свободу. Охранники, надсмотрщики.',
    },
    {
        name: 'ЛохАнь.',
        desc: 'Круглая или овальная посудина для стирки белья или мытья посуды.',
    }


];



let arrWords = [
    {
        pic: '../pictures/termo.jpg',
        name: 'Термобарические снаряды',
        desc: 'Снаряды, при взрыве образующие облако аэрозоля горючего вещества.',
        dateWord: ''
    },
    {
        pic:  '../pictures/pic2.jpg',
        name: 'СПЗ (Система постановки завес)',
        desc: 'Система постановки завес. Аэрозольные гранаты для блокирования ПТУР с инфракрасными ГСН.',
        dateWord: ''
    },
    {
        pic:  '../pictures/pic1.jpg',
        name: 'Планка Пикатинни',
        desc: 'Система рельсового крепления для стрелкового оружия.',
        dateWord: ''
    },
    {
        pic:  '../pictures/pic4.jpg',
        name: 'Термодымовая аппаратура (ТДА).',
        desc: 'Cистема постановки дымовых завес на танках, основанная на принципе испарения топлива с горячих деталей двигателя.',
        dateWord: ''
    },
    {
        pic:  '../pictures/pic5.jpg',
        name: 'Куликовская битва.',
        desc: 'Крупное сражение между русским войском и войском Золотой Орды.',
        dateWord: '8 сентября 1380 года.'
    },
    {
        pic:  '../pictures/pravo.jpg',
        name: 'Отмена крепостного права.',
        desc: 'Александром II.',
        dateWord: '3 марта 1861 года.'
    },
    {
        pic:  '../pictures/5-okeanov.jpg',
        name: '5 океанов на земле.',
        desc: 
        `
            <ol class="list-decimal">
                <li>Тихий.</li>
                <li>Атлантический.</li>
                <li>Северный-ледовитый.</li>
                <li>Индийский.</li>
                <li>Южный.</li>
            </ol>
        `,
        dateWord: ''
    },
    {
        pic:  '../pictures/materics.jpg',
        name: '6 материков на земле.',
        desc: 
            `
            <ol class="list-decimal">
                <li>Северная Америка.</li>
                <li>Южная Америка</li>
                <li>Антарктида.</li>
                <li>Африка.</li>
                <li>Евразия.</li>
                <li>Австралия</li>
            </ol>
            `,
        dateWord: ''
    },
    {
        pic:  '../pictures/IAI_Harop_PAS_2013_01.jpg',
        name: 'Барражирующий боеприпас.',
        desc: 'Дрон-камикадзе.',
        dateWord: ''
    },
    {
        pic:  '../pictures/gas.jpg',
        name: 'Ирританты.',
        desc: 'Группа веществ, вызывающих при попадании сильное местное раздражение слизистых оболочек, кожных покровов. Подразделяются на 2 основные группы: <br>Лакриматоры — вещества, вызывающие обильное слезотечение; <br>Стерниты — вещества, вызывающие неконтролируемое чихание и кашель.',
        dateWord: ''
    },
    {
        pic:  '../pictures/vert.jpg',
        name: 'БКО(бортовой комплекс обороны).',
        desc: 'Предназначен для предупреждения экипажа о радиолокационном и лазерном облучении летательного аппарата, фактах пуска по нему управляемых ракет, а также для противодействия нацеленным на ЛА ракетам с радиолокационными и инфракрасными головками самонаведения.',
        dateWord: ''
    },
    {
        pic:  '../pictures/Alabino220415part1-42.jpg',
        name: 'ОТРК - оперативно-тактический ракетный комплекс.',
        desc: 'Основное назначение ракетных комплексов «Искандер» — уничтожение систем ПВО и ПРО противника, а также важнейших объектов, прикрываемых ими, на дальностях до 500 км.<br> «Искандер-М» использует высотную (высота полёта — 50 км) сверхманёвренную (перегрузки — 20—30 g) квазибаллистическую ракету со стелс-технологиями, сбрасываемым модулем РЭБ и ложными мишенями с целью обхода систем ПРО и поражения защищаемых ими объектов на дальности до 500 км. <br><br> Комплекс в варианте комплектации «Искандер-К» использует крылатую ракету Р-500 со сверхнизкой траекторией полёта на высоте 6-7 м с огибанием рельефа местности.',
        dateWord: ''
    },
    {
        pic:  '../pictures/BloomfieldAeolianHarp.jpg',
        name: 'Эолова арфа, также воздушная а́рфа.',
        desc: 'Инструмент типа цитры, звучащий благодаря колеблющему струны ветру. Названа в честь Эола, мифического повелителя ветров.',
        dateWord: ''
    },
    {
        pic:  '../pictures/Juancito2.png',
        name: 'Мул.',
        desc: 'Домашнее животное, помесь осла с кобылой.',
        dateWord: ''
    },
    {
        pic:  '',
        name: 'Крылатая ракета "Циркон".',
        desc: 
        `
            Российская гиперзвуковая противокорабельная крылатая ракета.
            Запускается с подводных лодок и с атомных ракетных крейсеров.<br>
            <ol>
                <li>Скорость полёта: 10тыс/кмч.</li>
                <li>Дальность полёта: 1000км.</li>
            </ol>
        `,
        dateWord: ''
    }

];


// pic:  '<img src="../pictures/BloomfieldAeolianHarp.jpg" alt="img">',
function words() {
    if (WordsArr.length == 0) {
        location.reload();
    } else {
        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((WordsArr.length - 1) != 0) {
            alert_info.innerHTML = WordsArr.length - 1;
        } else {
            alert_info.innerHTML = 'Последняя';
        }
        let i = randomInteger(0, WordsArr.length - 1);
        console.log(i);
        mainWord.innerHTML = WordsArr[i].name;
        descWord.innerHTML = WordsArr[i].desc;
        WordsArr.splice(i, 1);
        setTimeout(() => {
             main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
             next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
        }, 800);

    }
}

function logger() {
    if (arrWords.length == 0) {
        location.reload();
    } else {
        if (dateWord.style.display == 'flex') {
            dateWord.style.display = 'none';
        }
        main.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        if ((arrWords.length - 1) != 0) {
            alert_info.innerHTML = arrWords.length - 1;
        } else {
            alert_info.innerHTML = 'Последняя';
        }
        let i = randomInteger(0, arrWords.length - 1);
        console.log(i);

        
        // idImg.src = '../pictures/no_photo.png';
        idImg.style.display = 'none';

        // console.log(arrWords[i].pic);


        if (arrWords[i].pic == '') {
            mainWord.innerHTML = arrWords[i].name;
                descWord.innerHTML = arrWords[i].desc;
    
                if (arrWords[i].dateWord.length > 0) {
                    dateWord.innerHTML = '';
                    dateWord.style.display = 'flex';
                    dateWord.innerHTML += 
                    `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                    </svg>`;
                    dateWord.innerHTML += `<p>${arrWords[i].dateWord}</p>`;
                }
                arrWords.splice(i, 1);
                setTimeout(() => {
                    main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                    next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                }, 800);
        }else {
            idImg.src = `${arrWords[i].pic}`;
            mainWord.innerHTML = 'wait...'
            descWord.innerHTML = 'wait...';
            idImg.onload = () => {
                idImg.style.display = 'block';
                console.log(i);
                console.log(arrWords[i].name);
                console.log(arrWords[i].desc);
                mainWord.innerHTML = arrWords[i].name;
                descWord.innerHTML = arrWords[i].desc;
    
                if (arrWords[i].dateWord.length > 0) {
                    dateWord.innerHTML = '';
                    dateWord.style.display = 'flex';
                    dateWord.innerHTML += 
                    `<svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z"></path>
                        <path d="M12 6v6l4 2"></path>
                    </svg>`;
                    dateWord.innerHTML += `<p>${arrWords[i].dateWord}</p>`;
                }
                arrWords.splice(i, 1);
                setTimeout(() => {
                    main.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                    next.classList.remove('animate__animated', 'animate__bounceIn', 'animate__fast');
                }, 800);
            };
        }

    }
}


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
    next.style.display = 'flex';
    if (select.value == 'Слова') {
        body.style.justifyContent = 'space-evenly';
        // btn_next.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        // mainWord.classList.add('decoration-sky-500');
        // mainWord.classList.add('text-green-500');
        mainWord.classList.add('underline');
        mainWord.classList.remove('fs-3');
        mainWord.classList.add('text-3xl');
        descWord.classList.remove('fs-5');
        descWord.classList.add('font-thin');
        descWord.classList.add('text-xl');
        descWord.style.padding = '10px';
        // descWord.classList.add('text-white');
        // descWord.classList.add('animate__animated', 'animate__bounceIn', 'animate__fast');
        picWord.remove();
        words();
    } else {
        logger();
    }
    clown = select.value;
    alert_info.style.display = 'block';
    btn.remove();
    select.remove();
    hello_h1.remove();


    alert_info.style.display = 'block';
    showWords.style.display = 'flex';
});


// btn_next.addEventListener('click', () => {
//     if (select.value == 'Слова') {
//         words();
//     } else {
//         logger();
//     }
// });

// mainTwo.addEventListener('touchend', (e) => {
//     e.preventDefault();

//     if (select.value == 'Слова') {
//         words();
//     } else {
//         logger();
//     }  
// });

// showWords.addEventListener('touchend', (e) => {
//     e.preventDefault();

//     if (select.value == 'Слова') {
//         words();
//     } else {
//         logger();
//     }  
// });

next.addEventListener('click', (e) => {
    e.preventDefault();

    if (select.value == 'Слова') {
        words();
    } else {
        logger();
    }  
});

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

DarkTheme();
function DarkTheme() {
    let date = new Date();
    if (date.getHours() > 17 || date.getHours() < 6) {
        body.classList.add('dark:bg-slate-800');
        hello_h1.style.color = '#fff';
        main.classList.add('dark:bg-slate-700');
        descWord.style.color = 'rgb(209 213 219)';
        select.style.backgroundColor = '#6c757d';
        select.style.color = '#fff';
        dateWord.style.color = '#fff';
    }
}
