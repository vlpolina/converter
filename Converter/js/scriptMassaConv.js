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
        switch(vel1) {
            case "Грамм":
                switch (vel2) {
                    case "Карат": result = Number((count*5).toFixed(3)); break;
                    case "Килограмм": result = Number((count*0.001).toFixed(3)); break;
                    case "Пуд": result = Number((count*0.000061).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.000001).toFixed(3)); break;
                    case "Унция": result = Number((count*0.035).toFixed(3)); break;
                    case "Центнер": result = Number((count*0.00001).toFixed(3)); break;
                    case "Фунт": result = Number((count*0.0022).toFixed(3)); break;
                }
            break;
            case "Карат":
                switch (vel2) {
                    case "Грамм": result = Number((count*0.2).toFixed(3)); break;
                    case "Килограмм": result = Number((count*0.0002).toFixed(3)); break;
                    case "Пуд": result = Number((count*0.000012).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.0000002).toFixed(3)); break;
                    case "Унция": result = Number((count*0.0071).toFixed(3)); break;
                    case "Центнер": result = Number((count*0.000002).toFixed(3)); break;
                    case "Фунт": result = Number((count*0.00044).toFixed(3)); break;
                }
            break;
            case "Килограмм":
                switch (vel2) {
                    case "Грамм": result = Number((count*1000).toFixed(3)); break;
                    case "Карат": result = Number((count*5000).toFixed(3)); break;
                    case "Пуд": result = Number((count*0.061).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.001).toFixed(3)); break;
                    case "Унция": result = Number((count*35.27).toFixed(3)); break;
                    case "Центнер": result = Number((count*0.01).toFixed(3)); break;
                    case "Фунт": result = Number((count*2.2).toFixed(3)); break;
                }
            break;
            case "Пуд":
                switch (vel2) {
                    case "Грамм": result = Number((count*16380).toFixed(3)); break;
                    case "Карат": result = Number((count*81900).toFixed(3)); break;
                    case "Килограмм": result = Number((count*16.38).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.01638).toFixed(3)); break;
                    case "Унция": result = Number((count*577.79).toFixed(3)); break;
                    case "Центнер": result = Number((count*0.16).toFixed(3)); break;
                    case "Фунт": result = Number((count*36.11).toFixed(3)); break;
                }
            break;
            case "Тонна":
                switch (vel2) {
                    case "Грамм": result = Number((count*1000000).toFixed(3)); break;
                    case "Карат": result = Number((count*5000000).toFixed(3)); break;
                    case "Килограмм": result = Number((count*1000).toFixed(3)); break;
                    case "Пуд": result = Number((count*61).toFixed(3)); break;
                    case "Унция": result = Number((count*35270).toFixed(3)); break;
                    case "Центнер": result = Number((count*10).toFixed(3)); break;
                    case "Фунт": result = Number((count*36110).toFixed(3)); break;
                }
            break;
            case "Унция":
                switch (vel2) {
                    case "Грамм": result = Number((count*28.35).toFixed(3)); break;
                    case "Карат": result = Number((count*141.75).toFixed(3)); break;
                    case "Килограмм": result = Number((count*0.028).toFixed(3)); break;
                    case "Пуд": result = Number((count*0.0017).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.000028).toFixed(3)); break;
                    case "Центнер": result = Number((count*0.00028).toFixed(3)); break;
                    case "Фунт": result = Number((count*0.063).toFixed(3)); break;
                }
            break;
            case "Центнер":
                switch (vel2) {
                    case "Грамм": result = Number((count*100000).toFixed(3)); break;
                    case "Карат": result = Number((count*500000).toFixed(3)); break;
                    case "Килограмм": result = Number((count*100).toFixed(3)); break;
                    case "Пуд": result = Number((count*6.11).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.1).toFixed(3)); break;
                    case "Унция": result = Number((count*3527.4).toFixed(3)); break;
                    case "Фунт": result = Number((count*220.46).toFixed(3)); break;
                }
            break;
            case "Фунт":
                switch (vel2) {
                    case "Грамм": result = Number((count*453.59).toFixed(3)); break;
                    case "Карат": result = Number((count*2267.96).toFixed(3)); break;
                    case "Килограмм": result = Number((count*0.45).toFixed(3)); break;
                    case "Пуд": result = Number((count*0.028).toFixed(3)); break;
                    case "Тонна": result = Number((count*0.00045).toFixed(3)); break;
                    case "Унция": result = Number((count*16).toFixed(3)); break;
                    case "Центнер": result = Number((count*0.0045).toFixed(3)); break;
                }
            break;
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
