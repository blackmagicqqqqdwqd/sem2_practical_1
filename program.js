
function creatForm() {

    const typeChart = document.getElementsByName('data format')[0].value
    const form = document.getElementsByTagName('form')[0];

    if (typeChart == '0') {
        //выбор картинки
        if (form.getElementsByClassName('picture')[0] == undefined) {
            form.appendChild(createImage('img_1.png'));
        }
        else form.getElementsByClassName('picture')[0].setAttribute('src', 'img_1.png')

        if (form.getElementsByClassName('number')[0] == undefined) {

            let b = createLabeledNumberInput('b = ')
            let h = createLabeledNumberInput('h = ');
            form.appendChild(b);
            form.appendChild(h);
        }
        else {
            if (form.getElementsByClassName('number')[1].innerHTML != 'h =') {
                form.getElementsByClassName('number')[1].innerHTML = 'h = ';
                let input = document.createElement('input');
                input.setAttribute('type', 'number');
                form.getElementsByClassName('number')[1].appendChild(input);

            }
        }

    }
    else {

        if (form.getElementsByClassName('picture')[0] == undefined) {
            form.appendChild(createImage('img_2.png'));
        }
        else {
            form.getElementsByClassName('picture')[0].setAttribute('src', 'img_2.png')
        }

        if (form.getElementsByClassName('number')[0] == undefined) {

            let b = createLabeledNumberInput('b = ');
            let a = createLabeledNumberInput('a = ');

            form.appendChild(b);
            form.appendChild(a);

        }
        else {
            if (form.getElementsByClassName('number')[1].innerHTML != 'a =') {
                form.getElementsByClassName('number')[1].innerHTML = 'a = ';
                let input = document.createElement('input');
                input.setAttribute('type', 'number');
                form.getElementsByClassName('number')[1].appendChild(input);
            }
        }
    }


    let b_input = form.getElementsByClassName('number')[0].children[0];
    let h_or_a_input = form.getElementsByClassName('number')[1].children[0];


    // Для первого поля ввода
    b_input.addEventListener('input', function () {
        // Преобразуем значения в числа
        const bValue = parseFloat(b_input.value);
        const hOrAValue = parseFloat(h_or_a_input.value);

        if (typeChart == 0) {
            if (hOrAValue <= bValue && bValue > 0) {
                b_input.classList.remove('error');
            } else {
                b_input.classList.add('error');
            }
        } else {
            if (bValue > 0) {
                b_input.classList.remove('error');
            } else {
                b_input.classList.add('error');
            }
        }
        if (typeChart == 0) {
            if (hOrAValue > 0 && hOrAValue <= bValue) {
                h_or_a_input.classList.remove('error');
            } else {
                h_or_a_input.classList.add('error');
            }
        } else {
            if (hOrAValue >= 0 && hOrAValue <= 180) {
                h_or_a_input.classList.remove('error');
            } else {
                h_or_a_input.classList.add('error');
            }
        }
    });

    // Для второго поля ввода
    h_or_a_input.addEventListener('input', function () {
        // Преобразуем значение в число
        const hOrAValue = parseFloat(h_or_a_input.value);
        const bValue = parseFloat(b_input.value);
        if (typeChart == 0) {
            if (hOrAValue > 0 && hOrAValue <= bValue) {
                h_or_a_input.classList.remove('error');
            } else {
                h_or_a_input.classList.add('error');
            }
        } else {
            if (hOrAValue >= 0 && hOrAValue <= 180) {
                h_or_a_input.classList.remove('error');
            } else {
                h_or_a_input.classList.add('error');
            }
        }
        if (typeChart == 0) {
            if (hOrAValue <= bValue && bValue > 0) {
                b_input.classList.remove('error');
            } else {
                b_input.classList.add('error');
            }
        } else {
            if (bValue > 0) {
                b_input.classList.remove('error');
            } else {
                b_input.classList.add('error');
            }
        }
    });

    // тут 

    if (document.getElementsByClassName('property')[0] == undefined) {
        let p_3 = document.createElement('p');
        let legend = document.createElement("legend");
        legend.className = 'property';
        // legend.classList.add('bold');
        legend.innerHTML = "Найти:";

        form.appendChild(p_3);
        p_3.appendChild(legend);

        legend.appendChild(createCheckbox("диагонали", "0", "property"));
        legend.appendChild(createCheckbox("площадь", "1", "property"));
        legend.appendChild(createCheckbox("периметр", "2", "property"));
        legend.appendChild(createCheckbox("радиус вписанной окружности", "3", "property"));
        document.getElementsByClassName('property')[0].addEventListener('change', function () {
           
            let b = true;
            for (let i = 0; i < legend.children.length; i++) {
                if (legend.children[i].children[0].checked) {
                    b = false;

                }
            }
            if (b) {
                legend.classList.add('error2');

            }
            else legend.classList.remove('error2');
        });


    }
    if (document.getElementsByClassName('menu')[0] == undefined) {
        // блок с кнопками вычислить, очистить
        let menu = document.createElement('p');
        menu.className = 'menu';

        //кнопка вычислить
        let compute = document.createElement('input');
        compute.setAttribute('type', 'button');
        compute.setAttribute('value', 'Вычислить');

        //кнопка Очистить
        let clear = document.createElement('input');
        clear.setAttribute('type', 'button');
        clear.setAttribute('value', 'Очистить');

        //добавляем
        form.appendChild(menu);
        menu.appendChild(compute);
        menu.appendChild(clear);

        clear.addEventListener('click', function () {

            b_input = form.getElementsByClassName('number')[0].children[0];
            h_or_a_input = form.getElementsByClassName('number')[1].children[0];

            legend = document.getElementsByClassName('property')[0];
            for (let i = 0; i < legend.children.length; i++) {
                legend.children[i].children[0].checked = false;
            }
            legend.classList.remove('error2');

            // b clear
            b_input.value = '';
            b_input.classList.remove('error');
            
            //очистка a or h    
            form.getElementsByClassName('number')[1].children[0].value = '';
            form.getElementsByClassName('number')[1].children[0].classList.remove('error');
            
            
        });

        compute.addEventListener('click', function () {

            b_input = form.getElementsByClassName('number')[0].children[0];
            h_or_a_input = form.getElementsByClassName('number')[1].children[0];

            //значение полей
            let bValue = parseFloat(b_input.value);
            let hOrAValue = parseFloat(h_or_a_input.value);

            let resultP;
            if (document.getElementsByClassName('result')[0] == undefined) {
                resultP = document.createElement("p");
                resultP.className = 'result';
            } else resultP = document.getElementsByClassName('result')[0];

            resultP.innerHTML = "Результат:";
            form.appendChild(resultP);

           /* if (isNaN(bValue)) b_input.classList.add('error');
            else if (isNaN(hOrAValue)) h_or_a_input.classList.add('error');
            if (isNaN(bValue) && isNaN(hOrAValue)) {
                h_or_a_input.classList.add('error');
                b_input.classList.add('error');
            }*/                 

            let localType = (document.getElementsByName('data format')[0].value);
                //console.log(h_or_a_input)   
            if (localType == '0') {
                if (hOrAValue <= bValue) b_input.classList.remove('error');
                else b_input.classList.add('error');

                if (hOrAValue > 0) h_or_a_input.classList.remove('error');
                else h_or_a_input.classList.add('error');
            } else {

                
                if (hOrAValue > 0 && hOrAValue <= 180) h_or_a_input.classList.remove('error');
                else h_or_a_input.classList.add('error');

                if (bValue > 0) b_input.classList.remove('error');
                else b_input.classList.add('error');
            }

            let AllvalueIsUnDefine = true;
            legend = document.getElementsByClassName('property')[0];
            for (let i = 0; i < legend.children.length; i++) {
                if (legend.children[i].children[0].checked) {
                    AllvalueIsUnDefine = false;
                }
            }

            if (AllvalueIsUnDefine) legend.classList.add('error2');
            else legend.classList.remove('error2');


            // Проверка данных 
            if (AllvalueIsUnDefine == false) {

                let r = calculate(
                    bValue, // b
                    localType == '0' ? hOrAValue : 0, // h
                    localType == '1' ? hOrAValue : 1   // a
                );      

                for (let key in r) {
                    let current = document.createElement('p');
                    current.innerHTML = `${key}: ${r[key]}`;
                    resultP.appendChild(current);
                }


            }
        });
    }
}

function selectForm() {
    let form = document.getElementsByTagName('form')[0];
    creatForm(form.getElementsByTagName('select')[0].value);
}


function createCheckbox(labelText, value, name) {
    let br = document.createElement('br');
    let input = document.createElement("input");
    let inputText = document.createElement('span');

    inputText.innerHTML = labelText; // Устанавливаем текст надписи
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', name);
    input.setAttribute('value', value);
    inputText.className = 'normal';

    let container = document.createElement('div'); // Создаем контейнер для элемента

    container.appendChild(input);
    container.appendChild(inputText);
    container.appendChild(br);

    return container;
}


function createLabeledNumberInput(labelText, form) {

    let p = document.createElement('p');

    let label = document.createElement('label');
    label.innerHTML = labelText;
    let input = document.createElement('input');

    input.setAttribute('type', 'number');
    label.className = 'number';
    label.appendChild(input); // Добавляем input в label
    p.appendChild(label); // Добавляем label в p
    //form.appendChild(p); // Добавляем paragraph в форму

    return p; // Возвращаем созданный input, чтобы можно было получить его значение
}

function createImage(src) {

    let picture = document.createElement("img");
    picture.setAttribute('src', src);
    // picture.innerHTML = url;
    picture.className = 'picture';
    return picture;
}

function calculate(a, h, alphaDegrees) {
    let alphaRadians;
    let S, P, r, d1, d2;

    a = parseFloat(a);
    h = parseFloat(h);
    alphaDegrees = parseFloat(alphaDegrees);
    if (a <= 0) return; // "Сторона ромба должна быть больше 0.";
    if (h < 0) return; // "Высота ромба должна быть неотрицательной.";
    if (alphaDegrees <= 0 || alphaDegrees >= 180) return; //"Угол должен быть больше 0 и меньше 180 градусов.";
    if (h > a) return; //"Высота ромба не может быть больше его стороны.";

    if (h > 0) {
        S = a * h; // Площадь
        r = h / 2; // Радиус вписанной окружности
        P = 4 * a; // Периметр

        alphaRadians = Math.asin(h / a); // Угол в радианах
        d1 = 2 * a * Math.cos(alphaRadians / 2); // Диагональ 1
        d2 = 2 * a * Math.sin(alphaRadians / 2); // Диагональ 2

        return getResult(d1, d2, S, P, r);
    } else {
        // Если известны сторона и угол
        alphaRadians = alphaDegrees * Math.PI / 180; // Переводим в радианы

        S = a * a * Math.sin(alphaRadians); // Площадь
        h = a * Math.sin(alphaRadians); // Высота
        r = h / 2; // Радиус вписанной окружности
        P = 4 * a; // Периметр

        d1 = 2 * a * Math.cos(alphaRadians / 2); // Диагональ 1
        d2 = 2 * a * Math.sin(alphaRadians / 2); // Диагональ 2

        return getResult(d1, d2, S, P, r);
    }
}

function getResult(d1, d2, s, p, r) {
    let result = {};

    let property = document.getElementsByClassName('property')[0];

    if (property.children[0].children[0].checked) {
        result['d1'] = d1;
        result['d2'] = d2;
    }

    if (property.children[1].children[0].checked)
        result['S'] = s;

    if (property.children[2].children[0].checked)
        result['P'] = p;

    if (property.children[3].children[0].checked)
        result['r'] = r;

    return result;
}