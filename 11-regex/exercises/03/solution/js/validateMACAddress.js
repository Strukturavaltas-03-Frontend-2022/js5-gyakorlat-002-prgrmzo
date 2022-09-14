// 3. Írj  egy függvényt `validateMACAddress`, ami paraméterként egy MAC címet vár stringként!
// A függvény egy `bollean` értékben visszaadja, hogy a paraméterként megadott MAC cím megfelelő formátumú e, vagy sem.

const validateMACAddress = (macAddress) => {
  const pattern = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
  return macAddress.match(pattern) ? true : false;
};

export default validateMACAddress;
