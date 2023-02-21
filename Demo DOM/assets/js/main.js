
//  Bài tập 1 
 function chuoiString(param) {
      let ketQua = []
      for (let index = 0; index < 10; index++) {
     ketQua += param 
     }
     console.log(ketQua);
  } chuoiString ("A")

//  Bài tập 2
  function repeatString(param) {
      let ketQua = []
      for (let index = 0; index < 10; index++) {
           ketQua.push(param); 
      }
      let text = ketQua.join("-");
   console.log(text);
   }repeatString ("A")

// Bài tập 3
 function chuoiString(chu, so) {
     let arr = [];
      for (let index = 0; index < so; index++) {
        arr.push(chu);
       }
    let text = arr.join("-");
       console.log(text);
      }
      chuoiString("a", 5);

//  Bài tập 4 
 function checkNumb() {
     let sum = 0
     let arr = []
     for (let index = 0; index <= 100; index++) {
     if (index % 5 == 0 && index !== 0) {
         sum += index
         arr.push(index)
     }
     }
     console.log(arr.join(" "));
     console.log(sum);
 } checkNumb ()

//  Bài tập 5
 function theTich(r) {
 let v = 0;
 v = (4 * 3.14 * r ** 3) / 3
 return v;    
 }

//  bài Tập 6

 function tinhTong(a, b) {
      
     let sum = 0;
      
     if (a > b) {
       for (let index = a - 1; index > b; index--) {
         sum += index;
       }
     } else {
       for (let index = a + 1; index < b; index++) {
         sum += index;
       }
     }
     return sum;
   }

    // bài tập 7
      function soNguyenTo(n) {
        var flag = true
          for (let index = 2; index < Math.SQRT(n); index++) {
       if ( n % index == 0){flag = false;
        break;
        
      }
          }
      }
      
  



