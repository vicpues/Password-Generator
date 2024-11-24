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
const passwordStrength = document.getElementById("passwordStrength");


// password length logic
range.addEventListener("input", ()=>{
    passwordLength.innerHTML = range.value;
});

// generate password logic
const generator = () => {
    let length = Number(passwordLength.innerText);
    let passwordChar = "";
    let finalPass = "";
    let strengthOfPass = 0;
    UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    LowerCase = "abcdefghijklmnopqrstuvwxyz";
    Numbers = "0123456789";
    Symbols = "!@#$%^&*()_+?";


    if(includeUpperCase.checked){passwordChar+= UpperCase;strengthOfPass++;}
    if(includeLowerCase.checked){passwordChar+= LowerCase;strengthOfPass++};
    if(includeNumbers.checked){passwordChar+=Numbers;strengthOfPass++};
    if(includeSymbols.checked){passwordChar+=Symbols;strengthOfPass++};
    if(length >= 8){strengthOfPass++};

    if(passwordChar.length <= 0){
        alert("At least one option is checked");
    }
    else{
        for(let i = 0; i < length; i++){
        let randomIndex = Math.floor(Math.random() * passwordChar.length);
         finalPass+=passwordChar[randomIndex]
       }
    }
    password.textContent = finalPass;
    // logic for checkStrength;
    let strength = "";
    let color = "";
    if(strengthOfPass <= 2){strength = "Weak"; color = "#FE654F"}
    else if(strengthOfPass === 3){strength = "Moderate"; color = "#FFCB47"}
    else if(strengthOfPass >= 4){strength = "Strong"; color = "#5B8266"};
    passwordStrength.innerHTML = `${strength}`;
    passwordStrength.style.color = color;
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
    generator()
});



