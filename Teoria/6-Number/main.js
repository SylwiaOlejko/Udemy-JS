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

