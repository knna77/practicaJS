const expect = require("chai").expect;
const Ordena = require("../examen.js");



students = [
  { alumne: "Pepe Botella", data_naiximent: "10-02-2005" },

  { alumne: "Rafa Nadal", data_naiximent: "09-02-2005" },

  { alumne: "Pedro Pasqua", data_naiximent: "10-02-2003" },

  { alumne: "Manolo Mata", data_naiximent: "09-02-2008" },

  { alumne: "Juan Gris", data_naiximent: "10-02-2000" },

  { alumne: "Maria Debe", data_naiximent: "10-02-1998" },
];
ordenaNoms = [
  { alumne: "Juan Gris", data_naiximent: "10-02-2000" },
  { alumne: "Manolo Mata", data_naiximent: "09-02-2008" },
  { alumne: "Maria Debe", data_naiximent: "10-02-1998" },
  { alumne: "Pedro Pasqua", data_naiximent: "10-02-2003" },
  { alumne: "Pepe Botella", data_naiximent: "10-02-2005" },
  { alumne: "Rafa Nadal", data_naiximent: "09-02-2005" },
];

ordenaDates = [
  { alumne: "Maria Debe", data_naiximent: "10-02-1998" },
  { alumne: "Juan Gris", data_naiximent: "10-02-2000" },
  { alumne: "Pedro Pasqua", data_naiximent: "10-02-2003" },
  { alumne: "Rafa Nadal", data_naiximent: "09-02-2005" },
  { alumne: "Pepe Botella", data_naiximent: "10-02-2005" },
  { alumne: "Manolo Mata", data_naiximent: "09-02-2008" },
];

describe("test 1 ordena noms", function () {
  const o1 = new Ordena();
  it("case 01", () => {
    expect(o1.ordena_noms(students)).to.eql(ordenaNoms);
  });
});
describe("Test 2 ordena dates", function () {
  const o2 = new Ordena();
  it("case 02", () => {
    expect(o2.ordena_dates(students)).to.eql(ordenaDates);
  });
});
