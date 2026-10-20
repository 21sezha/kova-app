let amount = "";

function showScreen(id) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

function updateDisplay() {
    const text = amount === "" ? 0 : amount;
    document.getElementById("display").textContent = "$" + text;
}

function press(key) {
    if (key === "." && amount.includes(".")) return;
    if (amount.length >= 8) return;
    amount += key;
    updateDisplay();
}

function deleteLast() {
    amount = amount.slice(0, -1);
    updateDisplay();
}

function goReview() {
    if (amount === "" || Number(amount) === 0){
        alert("Enter your amount first");
        return;
    }
    document.getElementById("reviewAmount").textContent = "$" + amount;
    document.getElementById("total").textContent = "$" + amount;
    showScreen("review");
}

function confirmSend() {
    document.getElementById("successfulAmount").textContent = "$" + amount;
    showScreen("success"); 
}

function resetApp() {
    amount = "";
    updateDisplay();
    showScreen("home");
}