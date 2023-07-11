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

    




//Создали массив из элементов формы
const [...inputs] = info.elements;

// Перебираем этот массив
inputs.forEach(input => {
    // Добавляем слушатель событий для нужного нам элемента
    if (input.type=='text') {
        input.addEventListener('change', ()=>{
            console.log('done');
            console.log(input.value);

            // pattern.test(input.value)

            //Ввожу нужный мне паттерн
            pat = /[a-zA-Z0-9]+/
            console.log(pat);
            console.log(pat.test(input.value));

            if (input.value.length>0) {
                input.className = "valid"
            } else input.className = "error";
        });
    }
});






    







   
// })