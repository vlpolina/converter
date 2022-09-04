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
            case "Баррель":
                switch (vel2) {
                    case "Бочка": result = Number((count*0.32).toFixed(3)); break;
                    case "Ведро": result = Number((count*12.93).toFixed(3)); break;
                    case "Галлон": result = Number((count*34.97).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*158.99).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*158.988).toFixed(3)); break;
                    case "Литр": result = Number((count*158.99).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*158987.29).toFixed(3)); break;
                }
            break;
            case "Бочка":
                switch (vel2) {
                    case "Баррель": result = Number((count*3.09).toFixed(3)); break;
                    case "Ведро": result = Number((count*40).toFixed(3)); break;
                    case "Галлон": result = Number((count*108.22).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*491.96).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*0.491976).toFixed(3)); break;
                    case "Литр": result = Number((count*491.96).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*491960).toFixed(3)); break;
                }
            break;
            case "Ведро":
                switch (vel2) {
                    case "Баррель": result = Number((count*0.077).toFixed(3)); break;
                    case "Бочка": result = Number((count*0.025).toFixed(3)); break;
                    case "Галлон": result = Number((count*2.71).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*12.3).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*0.0123).toFixed(3)); break;
                    case "Литр": result = Number((count*12.3).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*12299).toFixed(3)); break;
                }
            break;
            case "Галлон":
                switch (vel2) {
                    case "Баррель": result = Number((count*0.029).toFixed(3)); break;
                    case "Бочка": result = Number((count*0.0092).toFixed(3)); break;
                    case "Ведро": result = Number((count*0.37).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*4.55).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*0.003785).toFixed(3)); break;
                    case "Литр": result = Number((count*4.55).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*4546.09).toFixed(3)); break;
                }
            break;
            case "Кубический дециметр":
                switch (vel2) {
                    case "Баррель": result = Number((count*0.0063).toFixed(3)); break;
                    case "Бочка": result = Number((count*0.002).toFixed(3)); break;
                    case "Ведро": result = Number((count*0.081).toFixed(3)); break;
                    case "Галлон": result = Number((count*0.22).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*0.001).toFixed(3)); break;
                    case "Литр": result = Number((count*1).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*1000).toFixed(3)); break;
                }
            break;
            case "Кубический метр":
                switch (vel2) {
                    case "Баррель": result = Number((count*0.158988).toFixed(3)); break;
                    case "Бочка": result = Number((count*2.032618).toFixed(3)); break;
                    case "Ведро": result = Number((count*81.30081).toFixed(3)); break;
                    case "Галлон": result = Number((count*264.172052).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*1000).toFixed(3)); break;
                    case "Литр": result = Number((count*1000).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*1000000).toFixed(3)); break;
                }
            break;
            case "Литр":
                switch (vel2) {
                    case "Баррель": result = Number((count*0.0063).toFixed(3)); break;
                    case "Бочка": result = Number((count*0.002).toFixed(3)); break;
                    case "Ведро": result = Number((count*0.081).toFixed(3)); break;
                    case "Галлон": result = Number((count*0.22).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*1).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*0.001).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*1000).toFixed(3)); break;
                }
            break;
            case "Миллилитр":
                switch (vel2) {
                    case "Баррель": result = Number((count*0.001*0.0063).toFixed(3)); break;
                    case "Бочка": result = Number((count*0.001*0.002).toFixed(3)); break;
                    case "Ведро": result = Number((count*0.001*0.081).toFixed(3)); break;
                    case "Галлон": result = Number((count*0.001*0.22).toFixed(3)); break;
                    case "Кубический дециметр": result = Number((count*0.001).toFixed(3)); break;
                    case "Кубический метр": result = Number((count*0.001*0.001).toFixed(3)); break;
                    case "Литр": result = Number((count*0.001).toFixed(3)); break;
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
