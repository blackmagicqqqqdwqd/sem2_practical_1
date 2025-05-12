
    function creatForm(){

        type = document.getElementsByName('data format')[0].value
        let form = document.getElementsByTagName('form')[0];
    

        if (type == '0') {
            if(form.getElementsByClassName('picture')[0] == undefined){
                form.appendChild(createImage('img_1.png'));
            }
            else {
                form.getElementsByClassName('picture')[0].setAttribute('src','img_1.png')
            }
            if(form.getElementsByClassName('number')[0] == undefined) {
                let z1 = createLabeledNumberInput('b = ')
                form.appendChild(z1);
                let z2 = createLabeledNumberInput('h = ');
                form.appendChild(z2);
                
                
                    z1.children[0].children[0].onfocus = function(){
                        if (document.getElementsByName('data format')[0].value == 0)
                            {
                                if (document.getElementsByClassName('number')[1].children[0].value <= 
                                document.getElementsByClassName('number')[0].children[0].value &&
                                document.getElementsByClassName('number')[0].children[0].value > 0 &&
                                document.getElementsByClassName('number')[1].children[0].value > 0)
                                    document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                                else document.getElementsByClassName('number')[0].children[0].classList.add('error');  
                            }
                        else {
                            if (document.getElementsByClassName('number')[0].children[0].value > 0)
                                document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                            else document.getElementsByClassName('number')[0].children[0].classList.add('error'); 
                        }
                        
                    }

                    z2.children[0].children[0].onfocus = function(){
                        if (document.getElementsByName('data format')[0].value == 0){
                            if (document.getElementsByClassName('number')[1].children[0].value > 0)
                                document.getElementsByClassName('number')[1].children[0].classList.remove('error');
                            else document.getElementsByClassName('number')[1].children[0].classList.add('error');  
                        }
                        else {
                            if (document.getElementsByClassName('number')[1].children[0].value >= 0 &&
                            document.getElementsByClassName('number')[1].children[0].value <= 360)
                                document.getElementsByClassName('number')[1].children[0].classList.remove('error');
                            else document.getElementsByClassName('number')[1].children[0].classList.add('error');  
                        }
                        
                    }
                
                
                

                
            }
            else {
                if (form.getElementsByClassName('number')[1].innerHTML != 'h =' ) {
                    form.getElementsByClassName('number')[1].innerHTML = 'h = ';
                    let input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    form.getElementsByClassName('number')[1].appendChild(input);
                    
                }

            

            }
            
        }
        else {
            if(form.getElementsByClassName('picture')[0] == undefined){
                form.appendChild(createImage('img_2.png'));
            }
            else {
                form.getElementsByClassName('picture')[0].setAttribute('src','img_2.png')
            }

            if(form.getElementsByClassName('number')[0] == undefined)
            {
                let z1 = createLabeledNumberInput('b = ')
                form.appendChild(z1);
                let z2 = createLabeledNumberInput('a = ');
                form.appendChild(z2);
                z1.children[0].children[0].onfocus = function(){
                    if (document.getElementsByName('data format')[0].value == 0)
                        {
                            if (document.getElementsByClassName('number')[1].children[0].value <= 
                            document.getElementsByClassName('number')[0].children[0].value &&
                            document.getElementsByClassName('number')[0].children[0].value > 0 &&
                            document.getElementsByClassName('number')[1].children[0].value > 0)
                                document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                            else document.getElementsByClassName('number')[0].children[0].classList.add('error');  
                        }
                    else {
                        if (document.getElementsByClassName('number')[0].children[0].value > 0)
                            document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                        else document.getElementsByClassName('number')[0].children[0].classList.add('error'); 
                    }
                    
                }

                z2.children[0].children[0].onfocus = function(){
                    if (document.getElementsByName('data format')[0].value == 0){
                        if (document.getElementsByClassName('number')[1].children[0].value > 0)
                            document.getElementsByClassName('number')[1].children[0].classList.remove('error');
                        else document.getElementsByClassName('number')[1].children[0].classList.add('error');  
                    }
                    else {
                        if (document.getElementsByClassName('number')[1].children[0].value >= 0 &&
                        document.getElementsByClassName('number')[1].children[0].value <= 90)
                            document.getElementsByClassName('number')[1].children[0].classList.remove('error');
                        else document.getElementsByClassName('number')[1].children[0].classList.add('error');  
                    }
                    
                }
        
            
            }
            else {
                if (form.getElementsByClassName('number')[1].innerHTML != 'a =' ) {
                    form.getElementsByClassName('number')[1].innerHTML = 'a = ';
                    let input = document.createElement('input');
                    input.setAttribute('type', 'number');
                    form.getElementsByClassName('number')[1].appendChild(input);
                }
            }
        }
      
        if(document.getElementsByClassName('property')[0] == undefined)
        {
            let p_3 = document.createElement('p');
            let legend = document.createElement("legend");
            legend.className = 'property';
            // legend.classList.add('bold');
            legend.innerHTML = "Найти:";
        
            form.appendChild(p_3);
            p_3.appendChild(legend);
            
            legend.appendChild(createCheckbox("диагонали","0","property"));
            legend.appendChild(createCheckbox("площадь","1","property"));
            legend.appendChild(createCheckbox("периметр","2","property"));
            legend.appendChild(createCheckbox("радиус вписанной окружности","3","property"));
            document.getElementsByClassName('property')[0].addEventListener('change', function() {
                
                let b = true;
                for (let i = 0; i < legend.children.length; i++)
                {
                    if (legend.children[i].children[0].checked) {
                        b = false;
                    
                    } 
                }
                if (b) {legend.classList.add('error2');
                    
                }
                else legend.classList.remove('error2');
            });
                
            
        }
        if (document.getElementsByClassName('menu')[0] == undefined)
        {
            let menu = document.createElement('p');
            let compute = document.createElement('input');
            compute.setAttribute('type', 'button');
            compute.setAttribute('value', 'Вычислить');



            let clear = document.createElement('input');
            clear.setAttribute('type', 'button');
            clear.setAttribute('value', 'Очистить');
        
            menu.className = 'menu';

            form.appendChild(menu);
            menu.appendChild(compute);
            menu.appendChild(clear);

          
            clear.addEventListener('click', function(){
                
                legend = document.getElementsByClassName('property')[0];
                for (let i = 0; i < legend.children.length; i++)
                    {
                        legend.children[i].children[0].checked = false;
                    }
                legend.classList.remove('error2');   
                number = document.getElementsByClassName('number')[0].children[0].value = '';
                number = document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                number = document.getElementsByClassName('number')[1].children[0].value = '';
                number = document.getElementsByClassName('number')[1].children[0].classList.remove('error');
            });

            compute.addEventListener('click', function(){
                
                let value1 = document.getElementsByClassName('number')[0].children[0].value; //b
                let value2 = document.getElementsByClassName('number')[1].children[0].value; //a или h
                
                let localType = (document.getElementsByName('data format')[0].value);

                if (localType == '0') {
                    if (value2 <= value1 && value2 > 0 && value1 > 0)
                        document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                    else document.getElementsByClassName('number')[0].children[0].classList.add('error');  
                    if (value2 > 0)
                        document.getElementsByClassName('number')[1].children[0].classList.remove('error');
                    else document.getElementsByClassName('number')[1].children[0].classList.add('error'); 
                }
                else {
                    if (value2 > 0 && value2 <= 90)
                        document.getElementsByClassName('number')[1].children[0].classList.remove('error');
                    else document.getElementsByClassName('number')[1].children[0].classList.add('error');     
                    if (value1 > 0)
                        document.getElementsByClassName('number')[0].children[0].classList.remove('error');
                    else document.getElementsByClassName('number')[0].children[0].classList.add('error'); 
                }
        

                let b = true;
                legend = document.getElementsByClassName('property')[0];
                for (let i = 0; i < legend.children.length; i++)
                {
                    if (legend.children[i].children[0].checked) {
                        b = false;
                    
                    } 
                }
                if (b) {legend.classList.add('error2');
                    
                }
                else legend.classList.remove('error2');
                
                // проверка данных 

            

                if (value1 && b == false){
                    if (value2) {
                        let resultP;
                        if (document.getElementsByClassName('result')[0] == undefined)
                        {
                            resultP = document.createElement("p");
                            resultP.className = 'result';
        
                        }
                        else resultP = document.getElementsByClassName('result')[0];
                        resultP.innerHTML = "Результат:";
                        let r = calculate(
                            document.getElementsByClassName('number')[0].children[0].value, // b
                            localType == '0' ? document.getElementsByClassName('number')[1].children[0].value : 0,  // h
                            localType == '1' ? document.getElementsByClassName('number')[1].children[0].value : 1   // a
                        );
                        for(let key in r) {
                            let current = document.createElement('p');
                            current.innerHTML = `${ key }: ${ r[key] }`;
                            resultP.appendChild(current);
                            
                        }
                        form.appendChild(resultP);
                    }
                }


            });
        }
    

        
    }
    function selectForm() {
        let form = document.getElementsByTagName('form')[0];
        creatForm(form.getElementsByTagName('select')[0].value);
    }       

    function result() {
        
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

    function createImage(src)
    {
    
        let picture = document.createElement("img");
        picture.setAttribute('src', src);
        // picture.innerHTML = url;
        picture.className = 'picture';
        return picture;
    }

    function calculate(a, h, alphaDegrees) {
    let alphaRadians; 
    let S, P, r, d1, d2; 
    
        if (a <= 0) return; // "Сторона ромба должна быть больше 0.";
        if (h < 0) return ; // "Высота ромба должна быть неотрицательной.";
        if (alphaDegrees <= 0 || alphaDegrees >= 180) return ; //"Угол должен быть больше 0 и меньше 180 градусов.";
        if (h > a) return ; //"Высота ромба не может быть больше его стороны.";
 
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