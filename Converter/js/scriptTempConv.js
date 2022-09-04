function calculate(form) {
    var result;
    var count = document.getElementById("vvod").value;
    var vv1 = document.getElementById("v1");
    var vel1 = vv1.value;
    var vv2 = document.getElementById("v2");
    var vel2 = vv2.value;
    
    if (vel1 == vel2) {
        result = count;
    } else {
        switch (vel1) {
            case "Цельсий": 
            switch (vel2) {
                case "Кельвин": result = (Number(count)+Number(273)).toFixed(3); break;
                case "Фаренгейт": result = (Number(count*9/5)+Number(32)).toFixed(3); break;
            } break;
            case "Кельвин": 
            switch (vel2) {
                case "Цельсий": result = (Number(count)-Number(273)).toFixed(3); break;
                case "Фаренгейт": result = (Number(((count-Number(273))*9/5)+Number(32))).toFixed(3); break;
            } break;
            case "Фаренгейт": 
            switch (vel2) {
                case "Кельвин": result = (Number((count-Number(32))*5/9+Number(273))).toFixed(3); break;
                case "Цельсий": result = (Number((count-Number(32))*5/9)).toFixed(3); break;
            } break;
        }
    }
    if ((vel1 == null)||(vel2 == null)||(count == 0)) {
        result = "Ошибка!"
    }
    document.getElementById("otvet").innerHTML = result;
}     
    
    /*document.getElementById("vvod")
    .addEventListener("keydown", function(event) {
    event.preventDefault();
    if (event.code == 13) {
        document.getElementById("button").click();
    }
});*/
