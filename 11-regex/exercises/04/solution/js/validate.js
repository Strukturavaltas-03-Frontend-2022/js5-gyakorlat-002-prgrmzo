// 4. Hozz létre egy Object-et `roles` névvel!
//    Ebben legyen letárolva 3 reguláris kifejezés. Ezek az alábbiak:
//    - `visa`: reguláris kifejezés Visa kártyaszámra
//    - `ip`: reguláris kifejezés IP címre
//    - `mac`: reguláris kifejezés MAC címre

//    Írj egy `validate` nevű függvényt, ami paraméterként két paraméter vár.
//    Az első egy string, ami egy validálandó érték, a második pedig szintén egy string az alábbiak közül:
//    - `visa`
//    - `ip`
//    - `mac`
//    Ez az érték az, hogy milyen adatot akarunk validálni.
//    A függvény visszatérési értéke egye `Boolean`.

const roles = {
  patterns: {
    visa: /^4\d{15}$/,
    ip: /^(?!0)(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gm,
    mac: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
  },
};

const validate = (string, type) => {
  return string.match(roles.patterns[type]) ? true : false;
};

export default validate;
