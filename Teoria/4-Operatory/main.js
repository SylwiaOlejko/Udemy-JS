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