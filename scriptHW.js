
// Task1

// function getArea(radius) {
//     if (typeof radius === 'number') {
//         const area = Math.PI * Math.pow(radius, 2);
//         return `Площа дорівнює ${area.toFixed(2)} квадратних одиниць.`;
//     }
//     else if (radius == undefined) {
//         return 'Будь ласка, введіть радіус!'
//     }
//     else {
//         return 'Будь ласка, введіть числове значення!'
//     }


// }


// console.log(getArea(5));
// console.log(getArea("not a number"));
// console.log(getArea());


// Task2

// function getSqrt(number) {
//     if (number === undefined) {
//         return 'Будь ласка, введіть число!';
//     } else if (typeof number !== 'number') {
//         return 'Повинно бути числове значення.';
//     } else if (number < 0) {
//         return 'Введіть додатнє число.';
//     }

//     const sqrt = Math.sqrt(number);
//     return `Квадратний корінь з ${number} дорівнює ${sqrt.toFixed(2)}.`;
// }


// console.log(getSqrt(9));
// console.log(getSqrt(-1));
// console.log(getSqrt("not a number"));
// console.log(getSqrt());

// Task 3

const getMath = {
    PI: 3.141592653589793,

    pow: function (number, degree) {
        if (arguments.length === 0) {
            return 'Будь ласка, введіть число !';
        }
        if (typeof number !== 'number' || typeof degree !== 'number') {
            return 'Повинно бути числове значення.';
        }
        return Math.pow(number, degree);
    },

    abs: function (number) {
        if (arguments.length === 0) {
            return 'Будь ласка, введіть число !';
        }
        if (typeof number !== 'number') {
            return 'Повинно бути числове значення.';
        }
        return (number >= 0) ? number : -number;
    },

    max: function () {
        if (arguments.length === 0) {
            return 'Будь ласка, введіть числа!';
        }
        let max = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') {
                return 'Повинно бути числове значення.';
            }
            if (arguments[i] > max) {
                max = arguments[i];
            }
        }
        return max;
    },

    min: function () {
        if (arguments.length === 0) {
            return 'Будь ласка, введіть числа!';
        }
        let min = arguments[0];
        for (let i = 1; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'number') {
                return 'Повинно бути числове значення.';
            }
            if (arguments[i] < min) {
                min = arguments[i];
            }
        }
        return min;
    }
};


console.log(getMath.PI);

console.log(getMath.pow(2, 3));
console.log(getMath.pow('abc', 3));
console.log(getMath.pow());


console.log(getMath.abs(-5));
console.log(getMath.abs('abc'));
console.log(getMath.abs());

console.log(getMath.max(1, 2, 3, 4, 5));
console.log(getMath.max(1, 2, 3, 'abc', 5));
console.log(getMath.max());



console.log(getMath.min(1, 2, 3, 4, 5));
console.log(getMath.min(1, 2, 3, 'abc', 5));
console.log(getMath.min());






