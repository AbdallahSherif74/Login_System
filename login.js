var emailLogin = document.querySelector(".loginEmail");
var passwordLogin = document.querySelector(".loginPassword");
var signInbutton = document.querySelector('.SignInbutton');
var body = document.querySelector('body');
var flag = 0;

var storedAccounts = localStorage.getItem('users');
if (storedAccounts) {
    var allAccounts = JSON.parse(storedAccounts);
} else {
    var allAccounts = [];
}

signInbutton.addEventListener('click', function () {
    var searchReturn = searchInArray(emailLogin.value, passwordLogin.value);
    if (flag) {
        body.innerHTML = `
        <div class="shadow-lg p-3 m-5 bg-white rounded text-center container">
            <H1>Welcome</H1>
            <h6>${searchReturn}</h6>
            <button class="btn btn-danger" onclick="Tologout()">Logout</button>
        </div>`;
    } else {
        alert(searchReturn);
    }
});

function searchInArray(e, p) {
    for (var i = 0; i < allAccounts.length; i++) {
        if (e === allAccounts[i].Email && p === allAccounts[i].Password) {
            flag = 1;
            return allAccounts[i].Name;
        }
    }
    for (var i = 0; i < allAccounts.length; i++) {
        if (e === allAccounts[i].Email) {
            return 'wrong password';
        }
    }
    return 'wrong email';
}

function Tologout() {
    body.innerHTML = `
    <div class="shadow-lg p-3 mb-5 bg-white rounded container text-center mt-5 bg-body-secondary">
        <h1>Smart Login App</h1>
        <div class="inputs d-flex flex-column justify-content-around p-5 ">
            <input type="email" placeholder="Enter your email" class="mb-4 p-3 loginEmail">
            <input type="password" placeholder="Enter password" class="mb-4 p-3 loginPassword">
            <button class="btn btn-outline-success SignInbutton">Sign In</button>
        </div>
        <a href="./signup.html"> <p>Sign up?</p></a>
    </div>`;

   
    var emailLogin = document.querySelector(".loginEmail");
    var passwordLogin = document.querySelector(".loginPassword");
    var signInbutton = document.querySelector('.SignInbutton');

    signInbutton.addEventListener('click', function () {
        var searchReturn = searchInArray(emailLogin.value, passwordLogin.value);
        if (flag) {
            body.innerHTML = `
            <div class="shadow-lg p-3 m-5 bg-white rounded text-center container">
                <H1>Welcome</H1>
                <h6>${searchReturn}</h6>
                <button class="btn btn-danger" onclick="Tologout()">Logout</button>
            </div>`;
        } else {
            alert(searchReturn);
        }
    });
}

console.log(allAccounts);
