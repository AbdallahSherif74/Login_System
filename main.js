var emailInput = document.querySelector(".emailsgnup");
var body = document.querySelector('body')
var passwordInput = document.querySelector(".passwordsgnup");
var NameInput = document.querySelector(".Namesgnup")
var button = document.querySelector(".inputs button");
var Nameregex = /^[A-Za-z]{3,}/i
var emailRegex = /^[A-Za-z0-9]{3,}@[a-z]{3,}(.com)$/i
var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\!@#$%&*])(?=.*\d).{8,}$/;

var paragraph = document.createElement('h4');

var storedAccounts=localStorage.getItem('users');
if(storedAccounts){

    var allAccounts=JSON.parse(storedAccounts);

}
else
    var allAccounts = [];
// Signup part==>

button.addEventListener('click', function () {



    var flag = checkregex();
    if (flag == true) {
        if (checkIfAlreadyExists(emailInput.value)!=true) {

            var user = {
                Name: NameInput.value,
                Email: emailInput.value,
                Password: passwordInput.value,

            }
            allAccounts.push(user);
            console.log(allAccounts);
            localStorage.setItem("users", JSON.stringify(allAccounts))
            clearForm();
            paragraph.innerText = ``;
            paragraph.classList.remove('text-danger');
            paragraph.classList.remove('fs-6');
            paragraph.classList.remove('me-auto');
            emailInput.after(paragraph);

        }
        else {

            paragraph.innerText = `Email already exists!`;
            paragraph.classList.add('text-danger');
            paragraph.classList.add('fs-6');
            paragraph.classList.add('me-auto');
            emailInput.after(paragraph);

        }


    }
    else
        alert(checkregex());


})

function clearForm() {
    emailInput.value = '';
    passwordInput.value = '';
    NameInput.value = '';

}



function checkregex() {




    if (Nameregex.test(NameInput.value) === false) {

        return ' Name Format: 3 letters or more '
    }
    else if (emailRegex.test(emailInput.value) === false) {
        return ' email format: name@mail.com'
    }
    else if (passwordRegex.test(passwordInput.value) === false) {
        return ' password format: must contain 8 characters or more -> at least 1 capital letter 1 small letter and 1 special character'
    }

    else {

        return true;
    }



}

function checkIfAlreadyExists(inp) {
 
    for (var i=0; i < allAccounts.length; i++) {
        if (allAccounts[i].Email === inp) {
            return true;
        }


    }
   
    return false;

}


