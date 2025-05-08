function add(numbers) {
    // first we check empty string
    if (!numbers) {
      return 0;
    }
  
    let delimiter = ',';
    let numbersString = numbers;
  
    // second we Check for custom delimiter
    if (numbers.startsWith('//')) {
      const delimiterEndIndex = numbers.indexOf('\n');
      delimiter = numbers.substring(2, delimiterEndIndex);
      numbersString = numbers.substring(delimiterEndIndex + 1);
    }
  
    //then we Replace newlines with delimiter (standardize delimiters)
    numbersString = numbersString.replace(/\n/g, delimiter);
  
    // Split numbers by delimiter and convert to numbers
    const numberArray = numbersString.split(delimiter).map(num => {
      const parsed = parseInt(num, 10);
      if (isNaN(parsed)) return 0;
      return parsed;
    });
  
    //Check for negative numbers
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
  
    return numberArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = { add };