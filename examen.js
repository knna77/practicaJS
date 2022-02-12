const Moment = require("moment");
class Ordena {
  ordena_noms(llista) {
  return llista.sort((a, b) => (a.alumne > b.alumne ? 1 : -1));
  }
  ordena_dates(array) {
    const sortedArray = array.sort(
      (a, b) =>
        new Moment(a.data_naiximent).format("YYYYMMDD") -
        new Moment(b.data_naiximent).format("YYYYMMDD")
    );
    return sortedArray;
  }
}

module.exports = Ordena;
