// window.addEventListener('DOMContentLoaded', () => {
//burger menu
const bn = document.querySelector('.bn')
bn.addEventListener("click", ()=>{
    document.querySelector('.nv ul').classList.toggle('active');
    bn.classList.toggle('active2');
})

//Price
let suma_rest = 0, suma_korg = 0; 
function suma (suma_rest,suma_korg) {
    return suma_rest+suma_korg
}
// const price = new Object();


const big = document.querySelector('#big');
const mid = document.querySelector('#mid');
const small = document.querySelector('#small');

const price_value = document.querySelector('.price_value');
const sauce_value = document.querySelector('.sauce_value');
sauce_value.innerHTML = '';
const top_value = document.querySelector('.top_value');
top_value.textContent = '';

big.addEventListener('click', ()=>{
    suma_korg = 0;
    suma_korg = 500;
    price_value.textContent = suma(suma_rest,suma_korg) + '₴';
});
mid.addEventListener('click', ()=>{
    suma_korg = 0;
    suma_korg = 300;
    price_value.textContent = suma(suma_rest,suma_korg) + '₴';
});
small.addEventListener('click', ()=>{
    suma_korg = 0;
    suma_korg = 100;
    price_value.textContent = suma(suma_rest,suma_korg) + '₴';
});

sauceClassic.price = 90;
sauceClassic.name = 'Кетчуп';
sauceBBQ.price = 110;
sauceBBQ.name = 'BBQ';
sauceRikotta.price = 130;
sauceRikotta.name = 'Рiкотта';

moc1.price = 50;
moc2.price = 60;
moc3.price = 55;
telya.price = 70;
vetch1.price = 40;
vetch2.price = 45;

moc1.name = 'Сир звичайний';
moc2.name = 'Сир фета';
moc3.name = 'Моцарелла';
telya.name = 'Телятина';
vetch1.name = 'Помiдори';
vetch2.name = 'Гриби';

//drag-drop for ingridients

function start_drag_drop (em) {
    drag_drop(this,em);
    this.removeEventListener('mousedown', start_drag_drop);
}

sauceClassic.addEventListener('mousedown', start_drag_drop);
sauceBBQ.addEventListener('mousedown', start_drag_drop);
sauceRikotta.addEventListener('mousedown', start_drag_drop);
moc1.addEventListener('mousedown', start_drag_drop);
moc2.addEventListener('mousedown', start_drag_drop);
moc3.addEventListener('mousedown', start_drag_drop);
telya.addEventListener('mousedown', start_drag_drop);
vetch1.addEventListener('mousedown', start_drag_drop);
vetch2.addEventListener('mousedown', start_drag_drop);

function drag_drop (ingridient,e) {

    let block_ingridient = document.createElement("img");
    ingridient.after(block_ingridient);// Расскоментируй!

    let coords = getCoords(ingridient);
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;
    
    // let z = 0; z++;
    // ingridient.style.zIndex = z;
    ingridient.style.height = ingridient.getBoundingClientRect().height+'px';
    ingridient.style.width = ingridient.getBoundingClientRect().width+'px';
    ingridient.style.position = 'absolute';
    document.body.appendChild(ingridient);

    block_ingridient.setAttribute("src", ingridient.src);
    // ingridient.setAttribute('id', ingridient.id);
    // ingridient.removeAttribute('id', ingridient.id);
    block_ingridient.price = ingridient.price;
    block_ingridient.name = ingridient.name;
    block_ingridient.addEventListener('mousedown', start_drag_drop);

    // moveAt(e);

    // перемещение на корж
    const korg = document.querySelector('.table img');
    let coords_korg = getCoords (korg);
    let added = false;

    function moveAt(e) {
        ingridient.style.left = e.pageX - shiftX + 'px';
        ingridient.style.top = e.pageY - shiftY + 'px';
        // console.log('e.pageY =  ' + e.pageY);
        if (e.pageX > coords_korg.left&&e.pageX<coords_korg.right&&e.pageY>coords_korg.top&&e.pageY<coords_korg.bottom) {
            added = true;
        }   else added = false;
    }
    // перемещать по экрану
    document.addEventListener('mousemove', moveAt);

    // отследить окончание переноса
    ingridient.addEventListener('mouseup', function removes () {
        document.removeEventListener('mousemove', moveAt);
        // ingridient.removeEventListener('mouseup', removes);

        if (added) {
            suma_rest += ingridient.price;
            price_value.textContent = suma(suma_rest,suma_korg) + '₴';

            if (ingridient == sauceClassic || ingridient == sauceBBQ || ingridient == sauceRikotta) {
                sauce_value.innerHTML += ingridient.name + '<br>';
            } else top_value.innerHTML += ingridient.name + '<br>'; //?
        } else {
            ingridient.remove();
        }

        // 601 > 102, 601<502

        
        
        
    });

    // Отмена действия браузера по событию dragstart.
    ingridient.ondragstart = () => {
        return false;
    };

    function getCoords (elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset,
            right: box.right + pageXOffset,
            bottom: box.bottom + pageYOffset,
            // Top: box.top + pageYOffset,
            // Left: box.left + pageXOffset
        };
    }
}

// Validation

// При клике на поле ввода телефона автоматически вводяться первые 3 значения
// if (phone.type == 'tel') {
//     phone.addEventListener('focus', ()=>{
//         phone.value = '+38';  
//     });
// }

// info.addEventListener('click', ()=>{
[...data_for_check] = info.elements;

//Находим элемент button
// data_for_check.forEach(el=>{
// for (i=0; i<data_for_check.length; i++) {
//     if (
//         data_for_check[i].type = 'button'
//     ) {
//         butt = data_for_check[i];
//     }
// }
// });
console.log(pidtv);

let formValidation = false;
data_for_check.forEach(element => {

    //Ustanovl patterns
    // if (element.type == 'text') {
    //     element.dataset.val = new RegExp(/[a-zA-Z0-9]+/) 
    //     // element.dataset.val = /[a-zA-Z0-9]+/
    //     console.log(element.dataset.val);
    //     console.log(typeof(element.dataset.val))
    // }
    // if (element.type == 'tel') {

    //     element.dataset.val = /\+38+\d{10}\b/
    // }
    // if (element.type == 'email') {
    //     element.dataset.val = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/
    // }

    if (
        element.type == 'text' ||
        element.type == 'tel' ||
        element.type == 'email'
    ) {
        // validation()
        formValidation = true
        element.addEventListener('blur', ()=> {
            // let pattern = element.dataset.val,  // data-val
            // msg = element.dataset.valMsg,
            // msgId = element.dataset.valMsgId,
        
        validate(element);
        });
    }
});

function validate (element) {
    value = element.value;

    if (element.type == 'text') {
        pattern = /[a-zA-Z0-9]+/
    }
    if (element.type == 'tel') {
        pattern = /\+38+\d{10}\b/
    }
    if (element.type == 'email') {
        pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/
    }
    // console.log(pattern)
    // console.log(value)
    // pattern2 = /[a-zA-Z0-9]+/
    // console.log(pattern2)
    // console.log(value.search(pattern2))

    let res = value.search(pattern);
    if (res === -1) {
        // document.getElementById(msgId).innerHTML = msg;
        element.className = "error";
    } else element.className = "valid"
}


// Действия по нажатии кнопок
if (formValidation) {
    
    //     if (
    //         el.type = 'button'
    //     ) {
                pidtv.addEventListener('click', ()=>{
                    let invalid = false;
                    data_for_check.forEach(el=>{
                        if(el.type=='text'||el.type=='email'||el.type=='tel') {
                            validate(el);
                            if (el.className == "error") {
                                invalid = true;
                            }
                        }
                    });
                    if (invalid) {
                        alert("Допущены ошибки при заполнении формы.");
                        return false; // отмена действия по умолчанию, можна preventDefault() использовать
                        // info.preventDefault();
                    }
                });  
}


//Убегающий баннер
let x = 0,y = 1;
banner.addEventListener('mousemove', ()=>{

// setInterval(()=>{    
// }, 100)

x = 50
//Step 1
if (y==1) {
    banner.style.bottom = x +'%'
    banner.style.right = x+'%'
    setTimeout(()=>{
        y=2;
    }, 300)
}

// Step 2
if (y==2&&banner.style.bottom == '50%'&& banner.style.right == '50%') {
    banner.style.bottom = 78 +'%'
    banner.style.right = 1+'%'
    setTimeout(()=>{
        y=3;
    }, 300)
}

if (y==3) {
    banner.style.bottom =  78+'%'
    banner.style.right = 60+'%'
    setTimeout(()=>{
        y=4;
    }, 300)
}

if (y==4) {
    banner.style.bottom =  2+'%'
    banner.style.right = 1+'%'
    setTimeout(()=>{
        y=5;
    }, 300)
}

if (y==5) {
    banner.style.bottom =  2+'%'
    banner.style.right = 60+'%'
    setTimeout(()=>{
        y=6;
    }, 300)
}

if (y==6) {
    banner.style.bottom =  44+'%'
    banner.style.right = 15+'%'
    setTimeout(()=>{
        y=7;
    }, 300)
}

if (y==7) {
    banner.style.bottom =  50+'%'
    banner.style.right = 50+'%'
    setTimeout(()=>{
        y=2;
    }, 300)
}


});


// });