// docs
const password = document.getElementById("password");
const copyPass = document.getElementById("copyPass");
const range = document.getElementById("range");
const passwordLength = document.getElementById("lengthPrv");
const includeUpperCase = document.getElementById("includeUpperCase");
const includeLowerCase = document.getElementById("includeLowerCase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const generateBtn = document.getElementById("generatePassword");


// password length logic
range.addEventListener("input", ()=>{
    passwordLength.innerHTML = range.value;
});

// generate password logic
const generator = (length, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols) =>{
   
    let passwordChar = "";
    let finalPass = "";
    UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    LowerCase = "abcdefghijklmnopqrstuvwxyz";
    Numbers = "0123456789";
    Symbols = "!@#$%^&*()_+?";

    passwordChar += includeUpperCase.checked ? UpperCase : "";
    passwordChar += includeLowerCase.checked ? LowerCase : "";
    passwordChar += includeNumbers.checked ? Numbers : "";
    passwordChar += includeSymbols.checked ? Symbols : "";

    if(passwordChar.length <= 0){
        password.innerText = "At least one option is checked";
    }
    else{
        for(let i = 0; i < Number(length.innerText); i++){
        let randomIndex = Math.floor(Math.random() * passwordChar.length);
         finalPass+=passwordChar[randomIndex]
       }
    }
    password.innerHTML = finalPass;
};

// copy the generated password
copyPass.addEventListener("click", ()=>{

    navigator.clipboard.writeText(password.innerText).then(function() {
        copyPass.innerText = "Copied!";
        setTimeout(()=>{
            copyPass.innerText = "Copy"
        }, 600)
    }).catch(function(err) {
        copyPass.innerText = "something went wrong";
    });
});


generateBtn.addEventListener("click", ()=>{
    generator(passwordLength, includeUpperCase, includeLowerCase, includeNumbers, includeSymbols)
});



