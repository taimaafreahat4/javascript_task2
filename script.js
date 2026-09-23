// let name =prompt("What is your name?");
// let age=prompt("enter your age");
// let gender=prompt("Enter your gender: Male or Female");
// let isValidOrder=false;

// console.log(name);
// console.log(age);
// console.log(gender);

// // check the gender
// if (gender=="Male"){
//     document.write("Welcome Mr. " + name+ "<br>");

// }
// else if (gender=="Female"){
//     document.write(" Welcome Ms."+ name+ "<br>");
// }
// else{
//     document.write("Welcome"+ name+ "<br>");
// }

// document.write("the age is "+age + "<br>");

// //check the customers age
// if( age <16 ){
//     document.write("You are not eligible to place an order"+ "<br>");
// }
// else {
//     document.write("Continue with the order"+ "<br>");
//     let order=prompt("Enter your order: Burger or Shawarma or Zinger");
//     console.log(order);

//     //choose an order

//     if (order=="Zinger" || order=="Burger" || order=="Shawarma"){
//         isValidOrder = true;
//         document.write("your order is being prepared" + "<br>");
//     }
//     else{
//         isValidOrder = false;
//         document.write(".Invalid order. Please try again" + "<br>");
//     }

//     // logical operators
//     if (age>=18 && isValidOrder==true){
//         document.write("Order confirmed"+ "<br>");
//     }

//     if (age<18 || isValidOrder==false){
//         document.write("Order requires verification"+ "<br>");
//     }
// }




document.write("/////////////////////////////////////"+"<br>");

let menu=[{name:"burger",price:"66$",category:"fast food",available:false},
          {name:"banana",price:"6$",category:"fruts",available:true},
          {name:"botato",price:"90$",category:"vigitable",available:true},
          {name:"tomato",price:"5$",category:"vigitable",available:true},
          {name:"banana",price:"6$",category:"fruts",available:true},
]
function showMenu() {
    for (let i = 0; i < menu.length; i++) {
        
    document.write(menu[i].name+ "<br>"+
                   menu[i].price+ "<br>"+
                   menu[i].category+ "<br>"

    );
    }
}
// Show the menu showMenu();
showMenu()


// 2. Ask the customer for food name
let selectedFoodName = prompt("Enter the food name:");
document.write("/////////////////////////////////////"+"<br>");


let selectedFood = null;

while (selectedFood == null) {

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].available == true &&
            menu[i].name.toLowerCase() == selectedFoodName.toLowerCase()) {

            selectedFood = menu[i];

            break;
        }
    }

    if (selectedFood == null) {

        selectedFoodName = prompt(
            "This food is not available. Enter another food:"
        );
    }
}


//5pa
for (let property in selectedFood) {

    console.log(property + ": " + selectedFood[property]);

}



//8. Create one or more simple functions

function selectFood(foodName) {

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].available == false) {
            continue;
        }

        if (menu[i].name == foodName) {

            return menu[i];
        }
    }

    return null;
}

//9. Display the final order using document.write()

document.write("<h2>Order Confirmed</h2>");

document.write("Food: " + selectedFood.name + "<br>");

document.write("Price: $" + selectedFood.price + "<br>");

document.write("Category: " + selectedFood.category + "<br>");