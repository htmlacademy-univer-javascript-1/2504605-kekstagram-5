function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}

function checkIfPalindrome(str){
  if (str.split('').reverse().join('').toLowerCase() === str.toLowerCase()){
    return true;
  }
  return false;
}

checkStringLength('проверяемая строка', 20); // true
checkStringLength('проверяемая строка', 18); // true
checkStringLength('проверяемая строка', 10); // false

checkIfPalindrome('Кекс'); // false
checkIfPalindrome('топот'); // true
checkIfPalindrome('ДовОд'); // true
