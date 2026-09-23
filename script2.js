
//1 reverse
function reverseNumber(number) {
    let result = "";
    const text = String(number);
    for (let i = text.length - 1; i >= 0; i--) {
        result = result + text[i];
    }
    return Number(result);
}
document.write(reverseNumber(532443));
document.write("<br>"+"///////////////////////////////////////")


//2 old+even

for (let i = 0; i <= 15; i++) {

    if (i % 2 == 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }

}

document.write("<br>"+"///////////////////////////////////////")

//3 dash from to number even


let num = "025468";
let result = "";

for (let i = 0; i < num.length; i++) {

    result += num[i];

    if (num[i] % 2 == 0 && num[i + 1] % 2 == 0) {
        result += "-";
    }

}
console.log(result);


//4 check on the age

function agetest(age)
    {
        if (age>=18){
            console.log("The user is Adult");

        }
        else{
            console.log("The user is Minor");
        }
    }

agetest(7);

