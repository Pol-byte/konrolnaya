let name=document.getElementById("name");
name.addEventListener("input", function (event) {
    if (!name.validity.patternMismatch) {
      name.setCustomValidity("");
    } else {
      name.setCustomValidity("Имя должно начинаться с большой буквы, состоять из букв латинского или русского алфавита и содержать в себе только буквы");
    }
  });
let secname=document.getElementById("secname");
secname.addEventListener("input", function (event) {
    if (!secname.validity.patternMismatch) {
        secname.setCustomValidity("");
    } else {
        secname.setCustomValidity("Фамилия должна начинаться с большой буквы, состоять из букв латинского или русского алфавита и содержать в себе только буквы");
    }
  });
let surname=document.getElementById("secname");
surname.addEventListener("input", function (event) {
    if (!fathername.validity.patternMismatch) {
        surname.setCustomValidity("");
    } else {
        surname.setCustomValidity("Отчество должно начинаться с большой буквы, состоять из букв латинского или русского алфавита и содержать в себе только буквы");
    }
  });
  let password=document.getElementById("password");
    password.addEventListener("input", function (event){
        if (!password.validity.patternMismatch) {
                password.setCustomValidity("");
        } else {
                password.setCustomValidity("Пароль должен содержать цифры, символы нижнего и верхнего регистра.");
            }
        });
        document.getElementById("form").onsubmit = function (evt) {
            evt.preventDefault();
            console.log(evt);
            let object = {};
            for (let i = 0; i < 7; i++) {
                object[evt.target[i].name] = evt.target[i].value;
            }
        localStorage.setItem("form", JSON.stringify(object));
        }
        window.onload = function(){
            if(localStorage.getItem("form")){
                let object = JSON.parse(localStorage.getItem("form"));
                let arr = ["name","secname","surname","email","password","date","sex"];
                arr.forEach(element => {
                    if(document.getElementById(element))
                    document.getElementById(element).value = object[element];
                });
            }
        } 
