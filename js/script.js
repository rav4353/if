// //if

// var age = 20;
         
// if( age > 18 ) {
//    console.log("Qualifies for driving");
// }

// //if...else statement


// var age = 15;
// var rto = "pass";
         
//             if( age >= 18  && rto=="pass") {
//                console.log("Qualifies for driving");
//             }
//             else {
//                console.log("Fail")
//             }


// //if...else if... statement

// var book = "maths";
//             if( book == "history" ) {
//                console.log("History Book");
//             } else if( book == "maths" ) {
//                console.log("Maths Book");
//             } else if( book == "economics" ) {
//                console.log("Economics Book");
//             } else {
//                console.log("Unknown Book");
//             }



            // 29/08

          var a =300;
          var b = 255;
          var c = 1100;

          if(a<b) {
            if(b<c) {
               console.log(c,b,a);
            } else if(a<c) {
               console.log(b,c,a);
            } else {
               console.log(b,a,c);
            }
          } else if (c<a) {
            if (b<c) {
               console.log(a,c,b);
            } else {
               console.log(a,b,c);
            }
         } else {
               console.log(c,a,b)
            }
         