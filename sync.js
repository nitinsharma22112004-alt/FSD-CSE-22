function register() {
    console.log("register here")
}
function login() {
    console.log("login here")
}
function getData() {
    waitfordelay(4000);
    console.log("fetch data")
}
function displayData() {
    waitfordelay(6000);
    console.log("display Data ")
}
function waitfordelay(delay) {
    const mt = Date.now()+delay;
    while (Date.now()<mt) {
       
    }
}

register();
login();
getData();
displayData();
console.log("Call any data")