
// public class  multiplicationTables {
// public static viod main(String[] args) {
//     int Number = 7;
//     for (int i = 0, i <= 10, i++){
//         getSystemErrorMap.out.println(Number + " * " + i + " = " +(Number * i));

//     }
// }

// }

// ******************CHECK THE PRICE OF A PRODUCT********************8
        function checkPrice(){
            const fruit = document.getElementById("fruit"). value;
            let amount;

        switch (fruit) {
            case "apple":
        amount = "$..92"
        document.getElementById("price").innerHTML = "the price of " + fruit + "is" + amount;

        break;
        case "banana":
       amount = "$2.32"
      document.getElementById("price"). innerHTML = "the price of" + fruit + "is" + amount;

         break;
       case "mango":
            amount = "$3.11"
            document.getElementById("price").innerHTML = "the price of" + fruit + "is" + amount;

            break;
            case "orange":
                amount = "$2.87"
                document.getElementById("price").innerHTML = "the price of" + fruit + "is" + amount;

                break;
                default:
                    document.getElementById("price").innerHTML = "sorry for the inconvinences," + fruit + "is currently not available.";
    

     }

 };


// **************DEFAULT CLAUSE***************//

const fruit = "letus";

switch (fruit){
    case "apple":
        document.write('the color is red.');
        console.log("fruit")

        breake;
        case "mango":
            document.write("the color is yellow.");

            breake;
            case "letus":
                document.write("the color is green.");

                breake;
                default:
                    document.write("this is not a fruit.");

};


// *************IF STATEMENT**************
 const age = 21;
if (age > 18) {
alert("this user is old enough to Enter.");
};


 const age1 = 15;
if (age1 > 18){
  alert("this user is old enough to Enter.");
} else{
   alert("user not allowed to join.");
 };


// 

document.getElementById("submit").addEventListener("click", function() {
 const age = document.getElementById("age") .value;
 if (age > 18 ) {
    alert("this user is old enough to Enter.");
 } else{
    alert("user not allowed to join.");
 }
});


// **************** HOW TO GREET A USER DEPENDING ON THE CURRENT TIME OF THE DAY****************
function greetUser(){
    const time = new Date().getHours();
    if (time < 11) {
        return"good morning";
        
    }else if (time <18){
return "good day";
    } else{
        return"good evening";
    }
};

document.getElementById("demo").innerHTML = greetUser();

// *************************** TIME OUT INTERVAL*********************************
