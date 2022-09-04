function calculate(form) {
    var result;
    var count = document.getElementById("vvod").value;
    var prod = document.getElementById("eda");
    var product = prod.value;
    var vv1 = document.getElementById("v1");
    var vel1 = vv1.value;
    var vv2 = document.getElementById("v2");
    var vel2 = vv2.value;

    switch(product) {
        case "Арахис": 
            switch(vel1) {
                case "Грамм": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*1).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.001).toFixed(3)); break;
                        case "Фунт" : result = Number((count*0.00220462442).toFixed(3)); break;
                        case "Унция" : result = Number((count*0.035273590723).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*0.007402686567).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.001442537313).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*1.492537313433).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*0.082918739635).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*0.298507462687).toFixed(3)); break;
                    } break;
                    case "Килограмм": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*1000).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*1).toFixed(3)); break;
                        case "Фунт" : result = Number((count*2.2).toFixed(3)); break;
                        case "Унция" : result = Number((count*35.27399072294).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*7.462686567164).toFixed(3)); break;
                        case "Литр" : result = Number((count*1.49537313433).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*1492.537313432836).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*82.918739635158).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*298.507462686567).toFixed(3)); break;
                    } break;
                    case "Фунт": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*453.592).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.453592).toFixed(3)); break;
                        case "Фунт" : result = Number((count*1).toFixed(3)); break;
                        case "Унция" : result = Number((count*16).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*3.385014925373).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.677002985075).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*677.002985074627).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*37.61127694859).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*135.400597014925).toFixed(3)); break;
                    } break;
                    case "Унция": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*28.3495).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.0283495).toFixed(3)); break;
                        case "Фунт" : result = Number((count*0.0625).toFixed(3)); break;
                        case "Унция" : result = Number((count*1).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*0.211563432836).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.042312686567).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*42.312686567164).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*2.350704809287).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*8.462537313433).toFixed(3)); break;
                    } break;
                    case "Стакан 200 мл": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*134).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.134).toFixed(3)); break;
                        case "Фунт" : result = Number((count*0.295419672305).toFixed(3)); break;
                        case "Унция" : result = Number((count*4.726714756874).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*1).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.2).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*200).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*11.111111111111).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*40).toFixed(3)); break;
                    } break;
                    case "Литр": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*670).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.67).toFixed(3)); break;
                        case "Фунт" : result = Number((count*1.477098361523).toFixed(3)); break;
                        case "Унция" : result = Number((count*23.63357378437).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*5).toFixed(3)); break;
                        case "Литр" : result = Number((count*1).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*1000).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*55.55555555556).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*200).toFixed(3)); break;
                    } break;
                    case "Миллилитр": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*0.67).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.00067).toFixed(3)); break;
                        case "Фунт" : result = Number((count*0.001477098361523).toFixed(3)); break;
                        case "Унция" : result = Number((count*0.02363357378437).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*0.005).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.001).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*1).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*0.05555555555556).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*0.2).toFixed(3)); break;
                    } break;
                    case "Столовая ложка": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*12.06).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.01206).toFixed(3)); break;
                        case "Фунт" : result = Number((count*0.026587770507).toFixed(3)); break;
                        case "Унция" : result = Number((count*0.425404328119).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*0.09).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.018).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*18).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*1).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*3.6).toFixed(3)); break;
                    } break;
                    case "Чайная ложка": 
                    switch(vel2) {
                        case "Грамм" : result = Number((count*3.35).toFixed(3)); break;
                        case "Килограмм" : result = Number((count*0.00335).toFixed(3)); break;
                        case "Фунт" : result = Number((count*0.007385491808).toFixed(3)); break;
                        case "Унция" : result = Number((count*0.118167868922).toFixed(3)); break;
                        case "Стакан 200 мл" : result = Number((count*0.025).toFixed(3)); break;
                        case "Литр" : result = Number((count*0.005).toFixed(3)); break;
                        case "Миллилитр" : result = Number((count*5).toFixed(3)); break;
                        case "Столовая ложка" : result = Number((count*27.777777777778).toFixed(3)); break;
                        case "Чайная ложка" : result = Number((count*1).toFixed(3)); break;
                    } break;
            }
            break;
        //case "Варенье":
        default: result = "Введите все данные!";
    }
    
    document.getElementById("otvet").innerHTML = result;
}