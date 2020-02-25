module.exports = function toReadable (number) {
    var numberNames = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      30: 'thirty',
      40: 'forty',
      50: 'fifty',
      60: 'sixty',
      70: 'seventy',
      80: 'eighty',
      90: 'ninety',
   
};

var hundred = Math.trunc(number/100);
var decimiesAll = (number % 100);
var value;

if (decimiesAll>0 && decimiesAll<20) {
    var value = numberNames[decimiesAll];    
} else {
    var decimies = Math.trunc(decimiesAll/10);
    decimies = decimies*10;
    var ones = decimiesAll%10;
    if (ones == 0) {
        var value = numberNames[decimies];
    } else {
        var value = numberNames[decimies] + " " + numberNames[ones];
    }
}

if (number<100) {
    return value;
} else if (decimiesAll == 0){
    return numberNames[hundred] + " hundred";
} else {
    return numberNames[hundred] + " hundred " + value;
}


}
