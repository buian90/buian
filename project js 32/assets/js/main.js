// Bài 2.1 :
function checkMark(mark) {
    if (mark >= 85) { console.log ("A");
        
    } else if ( 70 <= mark && mark < 85){ console.log ("B"); }
        else if ( 40 <= mark && mark < 70){console.log("C");}
        else {console.log("D");}
    }
// Bài 2.2
    function checkMax(a,b) {
        if (a > b) { console.log("a");
            
        } else { console.log("b");
            
        }
        
    }
    // Bài 2.3
function checkNumber(a) {
    if (a > 0) {console.log("a là số dương");}
        else if ( a < 0) {console.log("a là số âm");}
        else {console.log("a là số 0");}
    }
    // Bài 2.4
    function checkNumber1(a) {
        if ( a % 2 == 0 ){console.log("a là số chẵn");}
        else {console.log("a là số lẻ");} 
    }
    // Bài 2.5
function checkNumber2(a) {
    if (a % 3 == 0 && a % 5 == 0) {console.log("a chia hết cho 3 và 5");}
    else {console.log("a ko chia hết cho 3 và 5");}
}
// Bài 2.6
function checkNumber3(a,b,c) {
    if (a + b === c) { console.log("c = a + b");
    }
}



