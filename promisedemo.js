function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("register here");
      // reject("failed to register")
      resolve();
    }, 10000);
  });
}
function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("login here");
      reject("failed to login");
      // resolve();
    }, 5000);
  });
}
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetch data");
      resolve();
    }, 4000);
  });
}
function displayData() {
  setTimeout(() => {
    console.log("display data");
  }, 6000);
}
// register()
//    .then(login)
//    .then(getData)
//    .then(displayData)
//    .catch((err)=>{
//     console.log("Error:",err)
// })

async function test() {
  try {
    await register();
    await login();
    await getData();
    displayData();
  } catch (err) {
    console.log("Error:", err);
  }
}
test();
console.log("call another Application");
