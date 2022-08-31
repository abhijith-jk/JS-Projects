const passwordEl = document.getElementById("password");
const generateBtnEl = document.getElementById("generate-btn");
const copyBtnEl = document.getElementById("copy-btn");

generateBtnEl.addEventListener("click", ()=>{
    let chars = "1234567890[];',./`~!@#$%^&*()_+{}:<>?-=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i <= passwordLength ; i++) {
        let randomnumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomnumber, randomnumber+1);        
    }
    passwordEl.value = password;
})

copyBtnEl.addEventListener("click", ()=>{
    passwordEl.select();
    passwordEl.setSelectionRange(0,999);
    document.execCommand("copy");
})