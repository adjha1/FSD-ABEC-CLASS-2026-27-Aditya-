// function sum(a, b) {
//     return a + b;
// }

// function sumWithMsg(clbk, msg) {
//     const result = clbk(20, 30);
//     const fresult = "HI" + msg + "Your score is: " + result;
//     console.log(fresult);
// }

// sumWithMsg(sum, "MR.Deepak");

function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (b!=0){ 
       return a/b;
    }
    else{
        return 0;
    }
    
}
function modulo(a,b){
    return a%b;
}

function callback_hell(clbk1){
    
}