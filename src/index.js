module.exports = function toReadable(number) {
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "therten",
        "fourteen",
        "fiveteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
        ];
        let tens = [
        "twenty",
        "therty",
        "fourty",
        "fivety",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
        ];
        
        if (number == 0) return 'zero'
        if (number < 20) return ones[number];
        if (number == 100) return "one hundred";
        
        if (number < 100)
        return (
        tens[parseInt(number / 10) - 2] +
        (number % 10 !== 0 ? " " : "") +
        ones[number % 10]
        );
        
        if (number > 100) {
        let ostatok = number % 100;
        return ones[parseInt(number.toString()[0])] + " hundred" + ' ' + toRead(ostatok);
        }

};
