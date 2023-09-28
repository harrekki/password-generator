const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/",];

const pwBtn = document.getElementById("pw-btn");
const pwCon = document.getElementById("pw-con");
const passwordsArr = [];

pwBtn.addEventListener("click", generatePasswords);
pwBtn.addEventListener("click", displayPasswords);

function generatePasswords() {
    if(passwordsArr) passwordsArr.length = 0;
    const passwdLength = 16;
    const arr = letters.concat(numbers, symbols);
    const numOfPasswds = 2;
    
    for(let j = 0; j < numOfPasswds; j++) {
        let password = "";
        for(let i = 0; i < passwdLength; i++) {
            const randomIndex = Math.floor(Math.random() * arr.length);
            password += arr[randomIndex];
        }
        passwordsArr.push(password);
    }
}

function displayPasswords() {
    const passwdFields = pwCon.children;
    for(let i = 0; i < passwordsArr.length; i++) {
        passwdFields[i].textContent = passwordsArr[i];
    }
}
    



