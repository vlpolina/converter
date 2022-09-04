function div(x, y) {
    return Number((x-x%y)/y);
}

function calculate(form) {
    var result;
    var count = document.getElementById("vvod").value;
    var vv1 = document.getElementById("v1");
    var vel1 = vv1.value;
    var vv2 = document.getElementById("v2");
    var vel2 = vv2.value;
    var c;
    
    if (vel1 == vel2) {
        result = count;
    } else if ((vel1 == "Арабские числа")&&(vel2 == "Римские числа")) {
        result = "";
        c = div(count, 1000);
        for (var i = 0; i<c; i++) {
            result = result+"M";
        }
        count = count%1000;
        if (div(count, 900) == 1) {
            result = result+"CM";
            count = count%900;
        }
        else if (div(count, 500) == 1) {
            result = result+"D";
            count = count%500;
        }
        else if (div(count, 400) == 1) {
            result = result+"CD";
            count = count%400;
        }
        c = div(count, 100);
        for (var i = 0; i<c; i++) {
            result = result+"C";
        }
        count = count%100;
        if (div(count, 90) == 1) {
            result = result+"XC";
            count = count%90;
        }
        else if (div(count, 50) == 1) {
            result = result+"L";
            count = count%50;
        }
        else if (div(count, 40) == 1) {
            result = result+"XL";
            count = count%40;
        }
        c = div(count, 10);
        for (var i = 0; i<c; i++) {
            result = result+"X";
        }
        count = count%10;
        if (div(count, 9) == 1) {
            result = result+"IX";
            count = count%9;
        }
        else if (div(count, 5) == 1) {
            result = result+"V";
            count = count%5;
        }
        else if (div(count, 4) == 1) {
            result = result+"IV";
            count = count%4;
        }
        c = div(count, 1);
        for (var i = 0; i<c; i++) {
            result = result+"I";
        }
    } else if ((vel2 == "Арабские числа")&&(vel1 == "Римские числа")) {
        result = Number(0);
        for (var i = 0; i<count.length+1; i++) {
            
            
            
            
            if ((count[i] == "C")&&(count[i+1] == "M")) {result = result+900;}
            // но тогда нужно пропускать следующую итерацию
            
            
            if (count[i] == "M") {result = result+1000;}
            
            if (count[i] == "CD") {result = result+400;}
            else  if (count[i] == "D") {result = result+500;}
            
            
            if (count[i] == "XC") {result = result+90;}
            else if (count[i] == "C") {result = result+100;}
        
            if (count[i] == "XL") {result = result+40;}
            else if (count[i] == "L") {result = result+50;}
            
            if (count[i] == "IX") {result = result+9;}
            else if (count[i] == "X") {result = result+10;}
            if (count[i] == "IV") {result = result+4;}
            else if (count[i] == "V") {result = result+5;}
            
            if (count[i] == "I") {result = result+1;}
        }
        
    } else result = "Ошибка!";
    
    document.getElementById("otvet").innerHTML = result;
}