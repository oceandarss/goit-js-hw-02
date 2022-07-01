const findLongestWord = function (string) {
    const item = string.split(' ');
    
    let longestWord = "";

    for (let i = 0; i < item.length; i++) {
        if (item[i].length > longestWord.length) {
            longestWord = item[i];
        }
    }
    return longestWord;
}



/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
