module.exports = function toReadable (number) {
  let dictionary = new Map ([
    [0, "zero"],
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
    [5, "five"],
    [6, "six"],
    [7, "seven"],
    [8, "eight"],
    [9, "nine"],
    [10, "ten"],
    [11, "eleven"],
    [12, "twelve"],
    [13, "thirteen"],
    [14, "fourteen"],
    [15, "fifteen"],
    [16, "sixteen"],
    [17, "seventeen"],
    [18, "eighteen"],
    [19, "nineteen"],
    [20, "twenty"],
    [30, "thirty"],
    [40, "forty"],
    [50, "fifty"],
    [60, "sixty"],
    [70, "seventy"],
    [80, "eighty"],
    [90, "ninety"],
    [100, "hundred"]
  ])
  let hundredths=Math.floor(number/100);
  let tenths=Math.floor((number%100)/10)*10;
  let ones=Math.floor(number%10);
  let readableNumber=[];
  if (number===0) {
    return dictionary.get(number);
  }
  if (hundredths!=0) {
    readableNumber.push(dictionary.get(hundredths)+" hundred");
  }
  if (tenths==10) {
    readableNumber.push(dictionary.get(tenths+ones));
  } else if (tenths!=0) {
    readableNumber.push(dictionary.get(tenths));
  }
  if (ones!=0 && tenths!==10) {
    readableNumber.push(dictionary.get(ones));
  }
  return readableNumber.join(" ");
}
