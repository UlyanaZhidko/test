
/* исходное значение калькулятора (для одностворчатых окон) */
let calc_func = 0.007831425253;

/* кнопки становятся активными при нажатии на кнопку  */
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("f5-element-title");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


/*  смена картинок при выборе типа окна */
function l_image(a) {
    document.example_img.src = a;
}


/*  функция подсчета стоимости изделий  */
function btn_calc_func(btn_calc_value){
    calc_func = btn_calc_value;
}

function calc() {
    //получаем ссылку на элемент Select (Тип изделия)
    var productType = calc_func;
    console.log(productType);
    //получаем ссылку на элемент input (Размеры)
    var valueLen = document.getElementById('valueLen');
    var valueWid = document.getElementById('valueWid');
    //получаем ссылку на элемент span, в него будем писать стоимость
    var result = document.getElementById('result');
    var price = 0;
    //price += (is_html.checked == true) ? parseInt(is_html.value) : 0;
    price = parseInt(valueLen.value * valueWid.value * productType).toFixed(2);

    result.innerHTML = price;
}


/*  Очищение формы при обновл.стр. */
document.getElementById('valueLen').value = "";
document.getElementById('valueWid').value = "";


/*  смена названия при */
document.querySelector('.f5').addEventListener('click', preview);

function preview(e) {
    let box = e.target.closest('.box');
    if (!box) return;
    document.querySelector('.windowinfo').textContent = box.children[0].textContent;
}


function cislo() {
    if (event.keyCode < 48 || event.keyCode > 57)
        event.returnValue = false;
}