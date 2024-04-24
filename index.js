const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let passwordOneEL = document.getElementById("passwordOne-El")
let passwordTwoEL = document.getElementById("passwordTwo-El")

let passwordGenBtn = document.getElementById("passwordGen")

let passwordLength = 15

let copyPwOne = document.getElementById("copyOne")
let copyPwTwo = document.getElementById("copyTwo")

passwordGenBtn.addEventListener("click", function () {

    function getRandomCharacter() {
        let randomChar = Math.floor(Math.random() * characters.length)
        return characters[randomChar]
    }

    function generateRandomPassword() {
        let randomPassword = ""
        for (let i = 0; i < passwordLength; i++) {
            randomPassword += getRandomCharacter()
        }
        return randomPassword
    }

    const generatedPasswordOne = generateRandomPassword()
    const generatedPasswordTwo = generateRandomPassword()

    //console.log("Here is a random password: ", generatedPasswordOne)
    passwordOneEL.textContent = generatedPasswordOne
    passwordTwoEL.textContent = generatedPasswordTwo

})
copyPwOne.addEventListener("click", function () {
    // Copying first generated password by clicking on the password's button
    navigator.clipboard.writeText(passwordOneEL.textContent)
    copyPwOne.textContent = "Password Copied";
    //alert("click")
})
copyPwTwo.addEventListener("click", function () {
    // Copying first generated password by clicking on the password's button
    navigator.clipboard.writeText(passwordTwoEL.textContent)
    copyPwTwo.textContent = "Password Copied";
    //alert("click")
})