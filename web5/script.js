function calc() {
    let price = document.getElementsByName("price");
    let quan = document.getElementsByName("quantity");
    if((/^[1-9][0-9]*$/).test(price[0].value) && (/^[1-9][0-9]*$/).test(quan[0].value))
    { alert("Итоговая цена = " + parseInt(price[0].value) *
           parseInt(quan[0].value));}
    else
    { alert("Введите корректные данные!");}
}
window.addEventListener("DOMContentLoaded",
    function (event)
    {
        let b = document.getElementById("result");
        b.addEventListener("click", calc);
    }
);

