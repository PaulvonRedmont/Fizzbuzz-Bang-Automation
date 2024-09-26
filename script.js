document.getElementById('choice').addEventListener('change', function() {
    const choice = this.value;
    document.getElementById('single-input').style.display = choice === 'single' ? 'block' : 'none';
    document.getElementById('range-input').style.display = choice === 'range' ? 'block' : 'none';
});

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}

function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

function sumOfDigits(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

function checkNumber(n) {
    const results = [];

    if (n % 4 === 0 || n.toString().includes('4')) results.push("bang");
    if (n % 7 === 0 || n.toString().includes('7')) results.push("cat");
    if (isPrime(n)) results.push("bill");
    if (n % 3 === 0 || n.toString().includes('3')) results.push("zap");
    if (n.toString().endsWith('5')) results.push("pow");
    if (isPalindrome(n)) results.push("wow");
    if (isPerfectSquare(n)) results.push("boom");
    if (sumOfDigits(n) ===
