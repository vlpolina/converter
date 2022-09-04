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
            case "Верста":
                switch (vel2) {
                    case "Дециметр": result = Number((count*10668).toFixed(3)); break;
                    case "Дюйм": result = Number((count*42000).toFixed(3)); break;
                    case "Километр": result = Number((count*1.006679).toFixed(3)); break;
                    case "Метр": result = Number((count*1066.8).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*1066800).toFixed(3)); break;
                    case "Миля": result = Number((count*0.66).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*106680).toFixed(3)); break;
                    case "Фут": result = Number((count*3500).toFixed(3)); break;
                    case "Ярд": result = Number((count*1166.67).toFixed(3)); break;
                }
            break;
            case "Дециметр":
                switch (vel2) {
                    case "Верста": result = Number((count*0.000094).toFixed(3)); break;
                    case "Дюйм": result = Number((count*3.94).toFixed(3)); break;
                    case "Километр": result = Number((count*0.0001).toFixed(3)); break;
                    case "Метр": result = Number((count*0.1).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*100).toFixed(3)); break;
                    case "Миля": result = Number((count*0.000062).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*10).toFixed(3)); break;
                    case "Фут": result = Number((count*0.33).toFixed(3)); break;
                    case "Ярд": result = Number((count*0.11).toFixed(3)); break;
                }
            break;
            case "Километр":
                switch (vel2) {
                    case "Дециметр": result = Number((count*10000).toFixed(3)); break;
                    case "Дюйм": result = Number((count*39370.08).toFixed(3)); break;
                    case "Верста": result = Number((count*0.94).toFixed(3)); break;
                    case "Метр": result = Number((count*1000).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*1000000).toFixed(3)); break;
                    case "Миля": result = Number((count*0.62).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*100000).toFixed(3)); break;
                    case "Фут": result = Number((count*3280.84).toFixed(3)); break;
                    case "Ярд": result = Number((count*1093.61).toFixed(3)); break;
                }
            break;
            case "Метр":
                switch (vel2) {
                    case "Дециметр": result = Number((count*10).toFixed(3)); break;
                    case "Дюйм": result = Number((count*39.37).toFixed(3)); break;
                    case "Верста": result = Number((count*0.00094).toFixed(3)); break;
                    case "Километр": result = Number((count*0.001).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*1000).toFixed(3)); break;
                    case "Миля": result = Number((count*0.00062).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*100).toFixed(3)); break;
                    case "Фут": result = Number((count*3.28).toFixed(3)); break;
                    case "Ярд": result = Number((count*1.09).toFixed(3)); break;
                }
            break;
            case "Миллиметр":
                switch (vel2) {
                    case "Дециметр": result = Number((count*0.01).toFixed(3)); break;
                    case "Дюйм": result = Number((count*0.039).toFixed(3)); break;
                    case "Верста": result = Number((count*9.37*0.0000001).toFixed(3)); break;
                    case "Километр": result = Number((count*0.000001).toFixed(3)); break;
                    case "Метр": result = Number((count*0.001).toFixed(3)); break;
                    case "Миля": result = Number((count*6.21*0.0000001).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*0.1).toFixed(3)); break;
                    case "Фут": result = Number((count*0.0033).toFixed(3)); break;
                    case "Ярд": result = Number((count*0.0011).toFixed(3)); break;
                }
            break;
            case "Миля":
                switch (vel2) {
                    case "Дециметр": result = Number((count*16093.44).toFixed(3)); break;
                    case "Дюйм": result = Number((count*0.62).toFixed(3)); break;
                    case "Верста": result = Number((count*1.51).toFixed(3)); break;
                    case "Километр": result = Number((count*1.61).toFixed(3)); break;
                    case "Метр": result = Number((count*1609.34).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*1609344).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*160934.4).toFixed(3)); break;
                    case "Фут": result = Number((count*5280).toFixed(3)); break;
                    case "Ярд": result = Number((count*1760).toFixed(3)); break;
                }
            break;
            case "Сантиметр":
                switch (vel2) {
                    case "Дециметр": result = Number((count*0.1).toFixed(3)); break;
                    case "Дюйм": result = Number((count*0.39).toFixed(3)); break;
                    case "Верста": result = Number((count*0.0000094).toFixed(3)); break;
                    case "Километр": result = Number((count*0.00001).toFixed(3)); break;
                    case "Метр": result = Number((count*0.01).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*10).toFixed(3)); break;
                    case "Миля": result = Number((count*0.0000062).toFixed(3)); break;
                    case "Фут": result = Number((count*0.033).toFixed(3)); break;
                    case "Ярд": result = Number((count*0.011).toFixed(3)); break;
                }
            break;
            case "Фут":
                switch (vel2) {
                    case "Дециметр": result = Number((count*3.048).toFixed(3)); break;
                    case "Дюйм": result = Number((count*12).toFixed(3)); break;
                    case "Верста": result = Number((count*0.00029).toFixed(3)); break;
                    case "Километр": result = Number((count*0.0003).toFixed(3)); break;
                    case "Метр": result = Number((count*0.3).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*304.8).toFixed(3)); break;
                    case "Миля": result = Number((count*0.00019).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*30.48).toFixed(3)); break;
                    case "Ярд": result = Number((count*0.33).toFixed(3)); break;
                }
            break;
            case "Дюйм":
                switch (vel2) {
                    case "Дециметр": result = Number((count*0.25).toFixed(3)); break;
                    case "Верста": result = Number((count*0.000024).toFixed(3)); break;
                    case "Километр": result = Number((count*0.000025).toFixed(3)); break;
                    case "Метр": result = Number((count*0.025).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*25.4).toFixed(3)); break;
                    case "Миля": result = Number((count*0.000016).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*2.54).toFixed(3)); break;
                    case "Фут": result = Number((count*0.083).toFixed(3)); break;
                    case "Ярд": result = Number((count*0.028).toFixed(3)); break;
                }
            break;
            case "Ярд":
                switch (vel2) {
                    case "Дециметр": result = Number((count*9.14).toFixed(3)); break;
                    case "Дюйм": result = Number((count*36).toFixed(3)); break;
                    case "Верста": result = Number((count*0.00086).toFixed(3)); break;
                    case "Километр": result = Number((count*0.00091).toFixed(3)); break;
                    case "Метр": result = Number((count*0.914).toFixed(3)); break;
                    case "Миллиметр": result = Number((count*914.4).toFixed(3)); break;
                    case "Миля": result = Number((count*0.00057).toFixed(3)); break;
                    case "Сантиметр": result = Number((count*91.44).toFixed(3)); break;
                    case "Фут": result = Number((count*3).toFixed(3)); break;
                    
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
