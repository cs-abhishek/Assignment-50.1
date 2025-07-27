const numbers = [3, 23, 7, 17, 42, 9, 22, 4, 33, 88, 13, 27, 10, 64];

function showEven() {
    const evenNumbers = numbers.filter(function (num) {
          return num % 2 === 0;
    });
    document.getElementById("result").innerText = evenNumbers.join(", ");
}

function showOdd() {
    const oddNumbers = numbers.filter(function (num) {
          return num % 2 !== 0;
    });
    document.getElementById("result").innerText = oddNumbers.join(", ");
}
