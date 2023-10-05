const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/",];

const pwBtn = document.getElementById("pw-btn");
const pwCon = document.getElementById("pw-con");
const pwLength = document.getElementById("pw-length");
const pwNumbers = document.getElementById("pw-numbers");
const pwSymbols = document.getElementById("pw-symbols");
const pwDuplicates = document.getElementById("pw-duplicates");
const passwordOutputs = document.querySelectorAll(".passwords--output");
const body = document.body;
const themeBtn = document.getElementById("theme-btn")
const modal = document.getElementById("modal");

const passwordsArr = [];

pwBtn.addEventListener("click", generatePasswords);
pwBtn.addEventListener("click", displayPasswords);
passwordOutputs.forEach(elem => {
    elem.addEventListener("click", copyToClipboard);
});
themeBtn.addEventListener("click", toggleTheme);
window.addEventListener("click", function() {
        modal.style.display = "none";
});

function generatePasswords() {
    if(passwordsArr) {
        passwordsArr.length = 0;
    }
    const passwdLength = pwLength.value;
    
    let arr = letters;
    if(pwNumbers.checked) {
        arr = arr.concat(numbers);
    }
    if(pwSymbols.checked) {
        arr = arr.concat(symbols);
    }
    
    const numOfPasswds = 4;
    
    for(let j = 0; j < numOfPasswds; j++) {
        let password = []; 
        for(let i = 0; i < passwdLength; i++) { 
            let randomIndex = Math.floor(Math.random() * arr.length);
            if(pwDuplicates.checked){
                // while password has a value equal to arr[randomIndex]
                while(password.includes(arr[randomIndex])) {
                    randomIndex = Math.floor(Math.random() * arr.length);
                }
            }
            password.push(arr[randomIndex]);
        }
        // convert password from array to string
        const passwordStr = password.join('');
        passwordsArr.push(passwordStr);
    }
}

function displayPasswords() {
    const passwdFields = pwCon.children;
    for(let i = 0; i < passwordsArr.length; i++) {
        passwdFields[i].textContent = passwordsArr[i];
    }
}

async function copyToClipboard(event) {
    if(!navigator.clipboard) {
        // Clipboard API not available
        return
    }

    const text = event.target.innerText;
    try {
        if(text) {
            await navigator.clipboard.writeText(text);
            displayModal();
            console.log("Copied!");
        }
    } catch (error) {
        console.error("Failed to copy: ", error);
    }
}

function displayModal() {
    modal.style.display = "block";
}    

function toggleTheme() {
    body.classList.toggle("dark-theme");
}

