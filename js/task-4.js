

const formatString = function (string) {
    return string.length > 40 ? string.split("").slice(0, 40).join('') + "..." : string
}




    // const formString = string.split('');

    //     if (formString.length > 40) {
    //         const modifiedString = formString.slice(0, 40);
    //         modifiedString.splice(40, 0, '...');
    //         const newString = modifiedString.join('');
    //         console.log(newString);
    // }
    // if (formString.length < 40) {
    //     console.log(formString.join(''));
    // }
    // }
;

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
