let input;
const numbers = [];
let total = 0;
let message;

const countTotalAmount = function (numbers) {
    for (const number of numbers) {
        total += number;
    }
    return total;
};

while (input !== null) {
    input = prompt('ВВедите число');

    input = Number(input);
    
    numbers.push(input);


    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        numbers.pop(NaN);
    };

}

// console.log(countTotalAmount(numbers));
console.log(`Общая сумма чисел равна ${countTotalAmount(numbers)}`);
// message = `Общая сумма чисел равна ${total}`;







// while (input !== null) {
//     input = prompt('ВВедите число');
//     input = Number(input);
    
//     numbers.push(input);
//     console.log(numbers);

//     if (isNaN(input)) {
//         alert('Было введено не число, попробуйте еще раз');
//     };

//     if (input === null) {
//         numbers.pop(null);
//         console.log(numbers);
//         break;
//     };

//     const result = countTotalAmount(numbers);
//     console.log(result);
        
// };




//     input = Number(input);

//     if (isNaN(input)) {
//         alert('Было введено не число, попробуйте еще раз');
//     }

//     if (!isNaN(input)) {
//         countTotalAmount(numbers)
//     }