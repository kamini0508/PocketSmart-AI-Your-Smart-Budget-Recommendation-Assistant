function showMessage() {
    alert("Welcome to PocketSmart AI! 💰");
}

function calculateBudget() {
    let income = Number(document.getElementById("income").value);
    let expenses = Number(document.getElementById("expenses").value);

    if (income <= 0 || expenses < 0) {
        document.getElementById("result").innerText =
            "Please enter valid income and expenses.";
        return;
    }

    let savings = income - expenses;

    document.getElementById("result").innerText =
        "Your estimated savings: ₹" + savings;
}

function recommend() {
    document.getElementById("recommendationText").innerText =
        "💡 Try to save at least 20% of your monthly income and reduce unnecessary expenses.";
}
