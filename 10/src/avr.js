function avr(imputNum) {
  let total = 0;
  let count = 0;
  let isArray = Array.isArray(imputNum);
  if (isArray === false) {
    for (i = 0; i < arguments.length; i++) {
      if (isNaN(arguments[i]) === false) {
        total += arguments[i];
        count += 1;
      }
    }
  } else if (isArray === true) {
    for (i = 0; i < imputNum.length; i++) {
      if (isNaN(imputNum[i]) === false) {
        total += imputNum[i];
        count += 1;
      }
    }
  }
  let avrage = total / count;
  return avrage;
}
export default avr;
