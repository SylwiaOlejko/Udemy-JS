/*CO TO JEST ZMIENNA */
// Zmienne to sposób na zapisanie danych w pamięci, tak aby móc te dane wykorzystać w programie.


/* 3 ATRYBUTY ZMIENNEJ W JS */
// - nazwa
// - miejsce w pamięttci (prowadzi do niego identyfikator, którym jest nazwa)
// - wartość
// Możemy jeszcze dodać jeden atrybut, którym jest czas życia, który jest zależny od miejsca gdzie stworzona jest dana zmienna ( globalna i lokalna)


/* CZY ZMIENNA MA TYP?  Cze zmienna jest w string, number, itp?*/
// W wielu językach tak, ale nie w JS. W JS typ ma wartość, która jest przechowywana w zmiennej. Wraz z deklaracją nie podjaemy typu zmiennej. Gdyby JS upodobnic do innych popularnych języków programowania to mogłoby to wyglądać tak: 
let number idUser = 76;
// Ale tak nie jest, a wygląda tak
let idUser = 76;
// Przy czym TYPY ISTNIEJĄ, ale są nadawane dynamicznie, czyli przez interpreter podczas wykonywania programu (mówimy o typowaniu dynamicznym). Pamiętamjmy jednak, że to nie zmienna ma typ number tutaj a wartość. Zmienna tylko przechowuje wartość.
// Operator typeof zwraca ma informacje o typie warotści przechowywanej zmiennej

/* NAZWA ZMIENNEJ */
//  - po angielsku
//  - niech oznacza to czym jest / czego jest / czym się zajmuje
//  - notacja wielbłądzia (rekomendowane) np. notacjaWielbladzia
//  - słowo zarezerwowane (jedno słowo - lista poniżej)
//  - brak spacji, brak myślnika, cyfra nie może być na początku (może być dalej)
//  - może z dużej litery (wielkośc litez ma znaczenie), podkreślenia, znak $

/*DEKLARACJA ZMIENNEJ I PRZYPISANIE WARTOŚCI (DWIE INSTRUKCJE)*/

// Deklaracja - sama deklaracja oznacza przypisania do zmiennej undefined
let firstLetterUserName;
//  Przypisania wartości do zmiennej
firstLetterUserName = "J";
//  Najczęsciej jednocześnie deklarujemu i przypisujemy (tworzymy) wartość
let userSurname = " Smith";
//  Deklaracja i przypisanie podczas, której tworzymy funkcję
//  let showUserName = function () { console.log(userSurname)};

// DEKLAROWANIE WIELU ZMIENNYCH
let name, age, address; //w jednej linii tylko przed pierwszą nazwą słowo kluczowe
let position = [200, 100], score = null, time = 20.2, ipAddress; //możemy od razu inicializować (przypisywać) wartość zmiennej
const firstUser = "Ania", secondUser = "Tomasz";
