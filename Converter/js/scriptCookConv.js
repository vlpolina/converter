function calculate(form) {
    var result;
    var count = document.getElementById("vvod").value;
    var prod = document.getElementById("eda");
    var product = prod.value;
    var vv1 = document.getElementById("v1");
    var vel1 = vv1.value;
    var vv2 = document.getElementById("v2");
    var vel2 = vv2.value;
    var x, y;

    if (vel1 == vel2) {
        result = count;
    } else {
        switch(vel1) {
            case "Грамм":
                switch (vel2) {
                    case "Килограмм": result = Number((count*0.001).toFixed(3)); break;
                }
            break;
            case "Килограмм":
                switch (vel2) {
                    case "Грамм": result = Number((count*1000).toFixed(3)); break;
                }
            break;
            case "Стакан 200 мл":
                switch (vel2) {
                    case "Литр": result = Number((count*0.2).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*200).toFixed(3)); break;
                    case "Столовая ложка": result = Number((count/0.09).toFixed(3)); break;
                    case "Чайная ложка": result = Number((count*40).toFixed(3)); break;
                }
            break;
            case "Литр":
                switch (vel2) {
                    case "Стакан 200 мл": result = Number((count*5).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*1000).toFixed(3)); break;
                    case "Столовая ложка": result = Number((count/0.018).toFixed(3)); break;
                    case "Чайная ложка": result = Number((count*200).toFixed(3)); break;
                }
            break;
            case "Миллилитр":
                switch (vel2) {
                    case "Стакан 200 мл": result = Number((count*0.005).toFixed(3)); break;
                    case "Литр": result = Number((count*0.001).toFixed(3)); break;
                    case "Столовая ложка": result = Number((count/18).toFixed(3)); break;
                    case "Чайная ложка": result = Number((count*0.2).toFixed(3)); break;
                }
            break;
            case "Столовая ложка":
                switch (vel2) {
                    case "Стакан 200 мл": result = Number((count*0.09).toFixed(3)); break;
                    case "Литр": result = Number((count*0.018).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*18).toFixed(3)); break;
                    case "Чайная ложка": result = Number((count*3.6).toFixed(3)); break;
                }
            break;
            case "Чайная ложка":
                switch (vel2) {
                    case "Стакан 200 мл": result = Number((count*0.025).toFixed(3)); break;
                    case "Литр": result = Number((count*0.005).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*5).toFixed(3)); break;
                    case "Столовая ложка": result = Number((count/3.6).toFixed(3)); break;
                    
                }
            break;
        }
        switch(product) {
            case "Арахис": x = 0.67; y = 0.01206; break;
            case "Варенье": x = 1.33; y = 0.02394; break;
            case "Вишня": x = 0.8; y = 0.0144; break;
            case "Вода": x = 1; y = 0.018; break;
            case "Горох": x = 0.92; y = 0.01656; break;
            case "Грецкий орех": x = 0.64; y = 0.01152; break;
            case "Желатин": x = 1.3; y = 0.0234; break;
            case "Изюм": x = 0.76; y = 0.1368; break;
            case "Какао-порошок": x = 0.65; y = 0.0117; break;
            case "Кефир": x = 1.03; y = 0.01854; break;
            case "Клубника": x = 0.6; y = 0.0108; break;
            case "Кокосовая стружка": x = 0.35; y = 0.0063; break;
            case "Картофельный крахмал": x = 0.65; y = 0.0117; break;
            case "Крупа геркулесовая": x = 0.28; y = 0.00504; break;
            case "Крупа манная": x = 0.8; y = 0.0144; break;
            case "Крупа пшеничная": x = 0.84; y = 0.01512; break;
            case "Кукуруза": x = 0.72; y = 0.01296; break;
            case "Майонез": x = 0.94; y = 0.01692; break;
            case "Макароны": x = 0.38; y = 0.0684; break;
            case "Малина": x = 0.56; y = 0.01008; break;
            case "Масло подсолнечное": x = 0.96; y = 0.01728; break;
            case "Масло оливковое": x = 0.94; y = 0.01692; break;
            case "Масло сливочное растопленное": x = 0.91; y = 0.01638; break;
            case "Мёд": x = 1.5; y = 0.027; break;
            case "Миндаль": x = 0.64; y = 0.01152; break;
            case "Молоко": x = 1.03; y = 0.01854; break;
            case "Сгущёнка": x = 1.3; y = 0.0234; break;
            case "Мука кукурузная": x = 0.67; y = 0.01206; break;
            case "Мука пшеничная": x = 0.7; y = 0.0126; break;
            case "Мука ржаная ": x = 0.65; y = 0.0117; break;
            case "Овес": x = 0.44; y = 0.00792; break;
            case "Разрыхлитель теста": x = 0.72; y = 0.01296; break;
            case "Рис": x = 0.78; y = 0.01404; break;
            case "Сахар": x = 0.9; y = 0.0162; break;
            case "Сахарная пудра": x = 0.76; y = 0.01368; break;
            case "Сливки": x = 1.03; y = 0.01854; break;
            case "Сметана": x = 1.05; y = 0.0189; break;
            case "Сода пищевая": x = 0.69; y = 0.01242; break;
            case "Соль мелкая": x = 1.2; y = 0.0216; break;
            case "Томатная паста": x = 1.08; y = 0.01944; break;
            case "Уксус 9%": x = 1; y = 0.18; break;
            case "Фасоль": x = 0.84; y = 0.01512; break;
            case "Фундук": x = 0.68; y = 0.01224; break;
            case "Чёрная смородина": x = 0.72; y = 0.01296; break;
        }
        switch (vel1) {
            case "Грамм":
                switch(vel2) {
                    case "Стакан 200 мл": result = Number((count*(0.005/x)).toFixed(3)); break;
                    case "Литр": result = Number((count*(0.001/x)).toFixed(3)); break;
                    case "Миллилитр": result = Number((count/x).toFixed(3)); break;
                    case "Столовая ложка": result = Number((count*(0.001/y)).toFixed(3)); break;
                    case "Чайная ложка": result = Number(((count*0.001*3.6)/y).toFixed(3)); break;
                }
            break;
            case "Килограмм":
                switch(vel2) {
                    case "Стакан 200 мл": result = Number((count*(5/x)).toFixed(3)); break;
                    case "Литр": result = Number((count*(1/x)).toFixed(3)); break;
                    case "Миллилитр": result = Number((count*(1000/x)).toFixed(3)); break;
                    case "Столовая ложка": result = Number((count*(1/y)).toFixed(3)); break;
                    case "Чайная ложка": result = Number(((count*3.6)/y).toFixed(3)); break;
                }
            break;
            case "Стакан 200 мл":
                switch(vel2) {
                    case "Грамм": result = Number((count*1000*x*0.2).toFixed(3)); break;
                    case "Килограмм": result = Number((count*x*0.2).toFixed(3)); break;
                }
            break;
            case "Литр":
                switch(vel2) {
                    case "Грамм": result = Number((count*1000*x).toFixed(3)); break;
                    case "Килограмм": result = Number((count*x).toFixed(3)); break;
                }
            break;
            case "Миллилитр":
                switch(vel2) {
                    case "Грамм": result = Number((count*x).toFixed(3)); break;
                    case "Килограмм": result = Number((count*x*0.001).toFixed(3)); break;
                }
            break;
            case "Столовая ложка":
                switch(vel2) {
                    case "Грамм": result = Number((count*1000*y).toFixed(3)); break;
                    case "Килограмм": result = Number((count*y).toFixed(3)); break;
                }
            break;
            case "Чайная ложка":
                switch(vel2) {
                    case "Грамм": result = Number(((count*1000*y)/3.6).toFixed(3)); break;
                    case "Килограмм": result = Number(((count*y)/3.6).toFixed(3)); break;
                }
            break;
        }
    }
    if ((product == null)||(vel1 == null)||(vel2 == null)||(count == 0)) {
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
