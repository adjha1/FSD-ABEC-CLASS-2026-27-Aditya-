function sum(a, b) {
    return a + b;
}

function sumWithMsg(clbk, msg) {
    const result = clbk(20, 30);
    const fResult = "Hi " + msg + " Your score is:" + result;
    console.log(fResult)
}

sumWithMsg(sum, "Aditya Jha");


function login(msg, error) {
    if (error) {
        console.log(error);
    }
    else
        console.log(msg);
}
function loginHandler(username, password, clbk) {
    let myusername = "adi.gmail";
    let mypassword = 12345;
    if (myusername == username && mypassword == password) {
        clbk("success", null)
    }
    else {
        clbk(null, "username or password is incorrect");
    }

}
loginHandler("adi.gmail", 12345, login);


// console.log("First")
// for (let i = 1; i <= 1000000; i++) {
//     console.log(i);
// }
// console.log("Two")


console.log("one")
setTimeout(() => {
    console.log("hiiii");
}, 200000)


console.log("Two")