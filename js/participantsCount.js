var numberElements = [
    document.getElementById("number1"),
    document.getElementById("number2"),
    document.getElementById("number3"),
    document.getElementById("number4")
];

var numbers = [
    parseInt(numberElements[0].innerText),
    parseInt(numberElements[1].innerText),
    parseInt(numberElements[2].innerText),
    parseInt(numberElements[3].innerText)
];

var priceElements = [
    document.getElementById("price1"),
    document.getElementById("price2"),
    document.getElementById("price3"),
    document.getElementById("price4"),
];

var prices = [
    parseFloat(priceElements[0].innerText.replace("AED ", "")),
    parseFloat(priceElements[1].innerText.replace("AED ", "")),
    parseFloat(priceElements[2].innerText.replace("AED ", "")),
    parseFloat(priceElements[3].innerText.replace("AED ", "")),
];

var totalElement = document.getElementById("total");
var totalElement1 = document.getElementById("total1");
var finalTotalElement = document.getElementById("finalTotal");
var initialPrice = -76;

function decreaseNumber(index) {
    if (numbers[index] > 1) {
        numbers[index]--;
        numberElements[index].innerText = numbers[index];
        updatePrice(index);
        calculateTotal();
    }
}

function increaseNumber(index) {
    numbers[index]++;
    numberElements[index].innerText = numbers[index];
    updatePrice(index);
    calculateTotal();
}

function updatePrice(index) {
    var totalPrice = prices[index] * numbers[index];
    priceElements[index].innerText = "AED " + totalPrice.toFixed(2);
}

function calculateTotal() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += prices[i] * numbers[i];
    }
    total += initialPrice;
    totalElement.innerText = "AED " + total.toFixed(2);
    totalElement1.innerText = "AED " + total.toFixed(2);
    finalTotalElement.innerText = "AED " + total.toFixed(2);
}

// Calculate the total on page load
calculateTotal();