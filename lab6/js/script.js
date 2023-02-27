// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;
let valid;

// COLLECT VALUES FROM THE USER
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    years = parseInt(prompt('Enter the number of years you want to invest for'));

    valid = !isNaN(investment) && !isNaN(rate) && rate >= 0 && rate <= 6 && !isNaN(years) && years >= 1 && years <= 30;
    if (!valid) {
        alert('At least one of your entries is invalid - please try again.');
    }
} while (!valid);

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);