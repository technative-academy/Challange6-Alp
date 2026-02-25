const loginButton = document.querySelector(".login-btn");


loginButton.addEventListener("click" ,getLoginPage);


function getLoginPage(){
    console.log("I just clicked to login button");
    window.location.href = "./Html/loginPage.html";
}