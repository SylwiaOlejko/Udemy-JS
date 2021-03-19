/*CO TO JEST OPERATOR */
// Konstrukcja języka programowania, która wykonuje jakąś operację na wartościach (argumentach/ operandach) i zwraca wartość.
// Operand - wartość/wartości wykorzystywane przez operator
// Operator może wymagać podania określonych typów wartości lub zachowywać się w różny sposób przy różnych typach np. operator dodawania przy dwóch typach number dodaje, przy typie string łączy (konkatencja).

// Pamiętamy o tym, że dochodzi tutaj do niejawnej, automatycznej konwersji typów (typowanie słabe). W wielu językach programowania (typowanie silne) taka konwersja nie jest możliwa
2 + 2;  //zwraca "22" (typ string)
"2" + "2"; //zwraca "22" (typ string)
"2" + 2; //zwraca "22"(string), bo dochodzi do niejawnej konwersji 2 na "2"
2 + true; //zwraca 3 (dochodzi do niejawnej konwersji true na 1)
"2" + true; //zwraca "2true" - niejawna konwersja true ( typ boolean) na "true"(typ string)

// operator może by„ znakiem (znakami), może być słowem (zbudowany z liter) np. typeof, delete, new:
typeof 1200; //zwraca typ wartości w tym przupadku "number"

//PODZIAŁ OPERATORÓW ZE WZGLĘDU NA ILOŚĆ ARGUMENTÓW
let result; //deklaruję zmienną na potrzeby przykładów
//operator przypisania (swa argumenty - mówimy na operatory dwuargumentowe, że są to operatory binarne)
result = 1;
// operator inkrementacji (jeden argument)
result++;
//mamy też operator trójargumentowy (pokazany na koniec pliku)

/* OPERATORY ARTYMETYCZNE */ 
let position = 2;
//inkrementacja. Zwróc wartość i dodaj jeden do wartości inkrementowanej
position++ //zwraca 2 i dodaje 1 (czyli jest 3)
//dekrementacja. Zwraca aktualną wartość a potem ją mniejsza o 1 
position--
//preinkrementacja - zwiększa wartośc o 1 a potem zwraca aktualną wartość
++position
position += 1; //zadziała tak samo jak preinkrementacja
//predekrementacja - zmniejsza wartośc o 1 a potem zwraca aktualną wartość
--position

//przypisanie
position += 10; //przypisauje do zmiennej nową wartość, która jest wynikiem pobrania aktualnej wartości zmiennej i dodania do niej 10
position = position + 10; //W praktycew to się dzieje. Jest to zapis tożsamy.
position -= 16; //jw czyli pobiera aktualną wartość zmiewnnej i w tym wypadku mnoży ją zwracając nową wartość
position /= 2; //jw tylko dzielenie

let nerPosition = 0; // pobiera wartość newPosition i dodaje do niej wartość position. WQynika działania (nowa wartość) jest przypisana do newPosition
//console.log(nerPosition);

//Modulo - reszta z dziedziczenia
10 % 9; //w wyniku dzielenia zostaje 1 (bo 10/9 do jedna dziewiąta i jeden reszty)
20 % 4; // w wyniku dzielenia powstaje 5 i nie ma reszty, więc modulo nie zwraca reszty

// ** potęga ES6 
2 ** 5; // 2 do 5, czyli 2 * 2 * 2 * 2 * 2
3 ** 3; // 3 do 3, czyli 3 * 3 * 3

/* OPERATOR LOGICZNY */
// operator porównania (większy/mniejszy) - zwraca true lub false
20 > 40 ; // false
"tekst".length > 3; // właściwość length zawiera informacje o długości tekstu (ile ma znaków) w tym wypadku 5 > 3 , więc zwróci true
20 <= 20; // mniejszy równy (jest też >= większy równy). W tym wypadku 20 jest mniejsze-równe 20 (nie jest mniejsze ale jest równe), czyli true.

//operator porównania (czy są równe)
// == sprawdź czy dane wartości (wyrazenia )sa równe. Dopuszcza konwersje. Jeśli są równe zwraca true, jeśli nie są równe to zwraca flase\
"tekst" == "tekst2"; //false
2 == 2.2; //false
"2" == 2; // dokonuje konwersji typów, zamienia "2" na 2 i zwraca true (bo wtedy rzeczywiście sa równe)
// === - porównanie, które nie dopuszcza konwersji typów
"2" === 2; //bez konkwersji typów, a więc "2" nie jest równe 2 i zwraca false

// KOLEJNOŚĆ OPERATORÓW
2 + 3 * 5; //mnożenie przed dzielenie
(2 + 3) * (5 - 4); //nawiasy dają pierwszeńtstow (zaurzają kolejność wykonywania operatorów)
"2" + 3 * 5; //konwersja nie zaburza kolejności ale wpływa na efekt końcowy. W tym wypadku najpeirw mnożenie a więc "2" + 15, a z tego drugiego działania mamy "215"


//OPERATOR WARUNKOWY (trójargumentowy) - na teraz ciekawostka
// warunek? zrobToJakPrawda : zrobToJanFałsz
3 > 2 ? "tak" : "nie";
// Sprawdzamy warunek. Jeśli jest prawidłowy interpreter wykonuje kod po lewej stronie (w przykładzie "tak") i pomija ten po prawej, jeśli warunek zwróci false, ty pominięty zostanie kod po lewej stronie a wykonany zostanie kod po prawej (w przykładzie "nie")