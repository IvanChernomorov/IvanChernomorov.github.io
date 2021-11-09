"use strict";

function calc() {
    let price = document.getElementsByName("price");
    let quan = document.getElementsByName("quantity");
    if (/^[1-9]\d*$/.test(price[0].value) && /^[1-9]\d*$/.test(quan[0].value))
        alert("Итоговая цена = " + parseInt(price[0].value) * parseInt(quan[0].value));
    else
        alert("Введите корректные данные!");
}
window.addEventListener("DOMContentLoaded",
    function (event) {
        let b = document.getElementById("result");
        b.addEventListener("click", calc);

        let volume = document.getElementById("volume");
        let rolls = document.getElementById("rolls");
        let volumeVal = document.querySelectorAll('input[name="volume"]');
        let additVal = document.querySelectorAll('input[name="addition"]');
        let result = document.getElementsByClassName("result");
        let c = document.getElementsByName("colvo");
        let onePrice = 0;
        volume.style.display = "none";
        rolls.style.display = "none";
        c[0].disabled = true;

        let s = document.getElementsByName("myselect");
        s[0].addEventListener("change", function (event) {
            let select = event.target;
            if (select.value == "1") {
                volume.style.display = "none";
                rolls.style.display = "none";
                result[0].innerHTML = 450 * c[0].value;
                onePrice = 450;
                c[0].disabled = false;
            }
            else if (select.value == "2") {
                volume.style.display = "block";
                rolls.style.display = "none";
                result[0].innerHTML = "";
                for (const vol of volumeVal) {
                    if(vol.checked){
                        vol.checked = false;
                    }
                }
                c[0].disabled = true;
            }
            else {
                volume.style.display = "none";
                rolls.style.display = "block";
                result[0].innerHTML = 600 * c[0].value;
                onePrice = 600;
                c[0].disabled = false;
            }
        });

        volumeVal.forEach(function(radio) {
            radio.addEventListener("change", function(event) {
              let r = event.target;
              c[0].disabled = false;
              result[0].innerHTML = r.value * c[0].value;
              onePrice = r.value;
            });    
          });

        c[0].addEventListener("input", function(event) {
            let col = event.target;
             if(/^[1-9]\d*$/.test(col.value)){
                 result[0].innerHTML = onePrice * col.value;
            }
            else{
                if(col.value != "")
                    alert("Введите корректные данные!");
                result[0].innerHTML = col.value = "";
            }
            
          });    

          additVal.forEach(function(checkbox) {
            checkbox.addEventListener("change", function(event) {
              let add = event.target;
              if(add.checked)
              {
                result[0].innerHTML = (onePrice + parseInt(add.value)) * c[0].value;
                onePrice = onePrice + parseInt(add.value);
              }
              else
              {
                result[0].innerHTML = (onePrice - parseInt(add.value)) * c[0].value;
                onePrice = onePrice - parseInt(add.value);
              }
            });    
          });
    });

        

