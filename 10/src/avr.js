function avg(input) {
  let sumInput = 0;
  let count = 0;
  let avg = 0;
  let isArray = Array.isArray(input);
  if (isArray === false) {
    for (let i = 0; i < arguments.length; i = i + 1) {
      if (!isNaN(arguments[i])) {
        sumInput += arguments[i];
        count += 1;
      }
    }
  } else if (isArray === true) {
    for (let i = 0; i < input.length; i += 1) {
      if (!isNaN(input[i])) {
        sumInput += input[i];
        count += 1;
      }
    }
  }
  avg = sumInput / count;
  return avg;
}
export default avg;
