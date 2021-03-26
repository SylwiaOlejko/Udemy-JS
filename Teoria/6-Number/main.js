//  za pomocą literału, po prostu liczba utworzy wartość typu prostego

const integerExample = 100;
const decimalExample = 100.212;
typeof integerExample; //number w JS, w innych językach często integer dla liczb całkowitych 
typeof decimalExample; //number w JS, w innych językach często float czy decimal

// JS akceptuje różne systemy liczbowe (poza dziesętnym)
// Reprezentacja szesznastkowa (prefiks 0x)
const hexNumber = 0xff; //znamy z css czyli ff to 255 w systemie dziesiętnym

// Mamy system ósemkowy czy binarny. System binarny to prefiks 0b
// console.log(0b011101)

// notacja naukowa (e)
console.log(5e2)
//5 i 10 do potęgi drugiej

// Przykładowe metody, które możemy wykonać na liczbie
const newNumber = 123.45;

// METODA .toFixed(), czyli zaokrągelnie
// zaokrąglenie do liczby całkowitej (od 5 zaokrągla wzwyż, poniżej 5 w dół)
newNumber.toFixed();
// zaokrąglenie do jednego miejsca po przecinku
newNumber.toFixed(1);
// problem jeśli pracuejmy bezpośrednio na liczbie
// 123.toFixed(0);
123..toFixed(0);

// Ważne: po zaokrągleniu metoda toFixed zwraca wartość, która jest stringiem

// METODA .toString() - jawna zamiana typów z number na string z możliwością zamiany systemu liczbowego
newNumber.toString(); //na system dziesiętny
newNumber.toString(2); // na system dwójkowy (binarny)
// 255.toString(16); // żle 
// 255..toString(16);  //dobrze
// na system szesnastkowy

//METOD .toExponential() - jawna zamiana na notację naukową (też jako string)
newNumber.toExponential()
//przy okazji pierwszeństwo działań warto zobaczyć
// typeof newNumber.toExponential()
// newNumber.toExponential() == newNumber.toExponential()

// FUNKCJE, które pozwalają zrobić rózne zadania z liczbami

// sprawdzenie czy jest liczbą całkowitą
Number.isInteger(decimalExample) //false, bo 100.212 (wcześniej zadeklarowaliśmy i zainiclalizowaliśmy tą zmieną)
Number.isInteger(100.1) //false
Number.isInteger(integerExample) //true
Number.isInteger(28001) //true

const integerExample2 = 100.00
Number.isInteger(integerExample2) //true, nawet jak jest ułamek dzieisętny ale tylko w zapisie

// Sprawdzenie czy dana liczba jest skończona (prawidłowa)
Number.isFinite(2); //true
Number.isFinite(NaN); //false
Number.isFinite(Infinity); //false
Number.isFinite(1e400); //false, ponieważ maksymalna liczba to 1e308, najmniejsza liczba -1e308
Number.isFinite(3e300); //true

//NaN - wartość typu number, ale o nie rozpoznanej wartości (Not a Number). Liczba, która nie jest liczbą. np gdy number mnożymy przez string
typeof NaN; //number
