// 1. Írj egy függvényt `validateVisaCardNumber` néven, ami paraméterként egy visa kártyaszámot vár stringként, szóközök nélkül!
// A függvény egy `Boolean` értékben visszaadja, hogy a paraméterként megadott kártyaszám megfelelő formátumú e, vagy sem.

const validateVisaCardNumber = (cardNumber) => {
  const pattern = /^4\d{15}$/;
  return cardNumber.match(pattern) ? true : false;
};

export default validateVisaCardNumber;
