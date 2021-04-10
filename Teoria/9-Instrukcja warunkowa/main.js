/*Bardzo często potrzebujemy uruchomić różny kod(różny blok kodu) w zależności od stanu (sytuacji,  spełnienia, warunku) w programie */

// INSTRUKCJA WARUNKOWA IF

// Przykład1
/*
const condition = 2;

if (condition) {
 // alert("działa!");
 console.log("widzisz mnie ponieważ warunek jest prawdziwy i wykonuje zawartość bloku instrukcji warunkowej");
}

*/

// Kod w bloku jest uruchomiony TYLKO WTEDY gdy warunek jest prawdziwy. Jeśli nie jest prawdziwy, to blok jest pomijany ({} - pomijany)

// Przykład 2
const userName = "Syrwion";

if (userName) {
 console.log("Witaj " + userName + "!")
}
// to samo, co wyżej z innaczej skonstruowanym warunkiem jednak oznaczajacym to samo.

if (userName !== "") {
 console.log("Witaj " + userName)
}

// INSTRUKCJA WARUNKOWA ELSE (IF...ELSE)
const hasTicket = true;
const moreThen15Years = true;
const bossFamily = false;

if (hasTicket && moreThen15Years || bossFamily) {
 console.log("wchodzisz");
} else {
 console.log("przykro mi");
}

// else wykonuje się tylko w wypadku gdy warunek if nie jest prawdą. Jeśli jest prawdą to else jest pomijany.