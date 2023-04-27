const txtInput = document.querySelector(".inputs input"),
    checkBtn = document.querySelector(".inputs button"),
    infoText = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
    //splitting input, reversing it and then joining them together as one
    let reverseInput = filterInput.split("").reverse().join("");
    infoText.style.display = "block";
    if (filterInput != reverseInput) {
        return infoText.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`
    }
    return infoText.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`
});

txtInput.addEventListener("keyup", () => {
    //removing spaces & non essential chars 
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if (filterInput) {
        return checkBtn.classList.add("active");
    }
    infoText.style.display = "none";
    checkBtn.classList.remove("active");
});