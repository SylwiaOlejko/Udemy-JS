// CO TO JEST HOISTING - CO DZIEJE SIĘ PO WYWOŁANIU KODU

// Interpreter czyta nasz kod od początku do końca, więc kolejność ma znaczenie, ale hoisting ten proces zaburza.

// Zanim kod zostanie wykonany jest przetworzony. Interpreter przechodzi przez kod kilka razy (szuka błędów, wyszukuje deklaracji...).

// Hoisting - przeniesienie części deklaracji na początek zakresu.

// ZMIENNE

// console.log(typeNumber);
// console.log(typeString);
// console.log(typeBoolean);
// console.log(tablica);
// console.log(obiekt);
// console.log(funkcja);

// dwie instrukcje: deklaracja i inicjalizacja (przypisanie wartości)
const typeNumber = 20;
let typeString = "tekst";
var typeBoolean = false;

var tablica = [];
let obiekt = {};
const funkcja = function() {
};



// Wartośc przypisana do zmiennej nie ma znaczenie. Liczy się sposób deklracji (const, let, var). Jeśli stworzyliśmy zmienną za pomocą var i próbujemy jej użyć przed tym za nim ją zadeklraowaliśmy to one będzie istniej, ale będzie miała przypisaną wartość undefined. Hoistingowi pzy var podlega tylko deklaracja.

//Jeśli zadeklarowaliśmy zmienną za pomocą const lub let i próbujemy jej użyć wcześniej, to nawet nie będzie undefined tylko błąd. Zmienna "is not defined". Ponieważ const i var nie podlega hoistingowi.

/* --------------------------------- */