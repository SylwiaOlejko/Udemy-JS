// Literał tekstowy - sposób tworzenia wartości tpyu prostego


// STRING - kolekcja znaków znajdujących się wewnątrz cudzysłowów (pojedyńczych (apostrof) (''), podwójnych ("") i grawisa (``)) Ps. grawis jest w tym samym kalwiszu co tylda (~) czyli zazwyczaj pod "ESC";


// String na polski: łańcuch zanków, ciąg znaków, zbiór znaków, lub po prostu "lańcuch"

const userName = "Tomasz Niewierny";
const userName2 = 'Miszko Pierwszy'
const userName3 = `Jaś Fasola` // super string od ES6 - innym razem bedzie na ten temat  materiał 

// Możliwośc pobrania konkretnego znaku wg indeksu (pierwsza litera ma indeks 0)
const secondLetter = userName[1]; // jak z  tablicy - poznasz przy tablicy

//tworzenie instancji (obiektu) String

const objUserName = new String(userName); // obiekt
const primitiveUserName = userName; // typ prosty

//typ prosty
const emptyString = "";

// obiekt, będący instyancją String
const emptyObjectString = new Object("");
const emptyObjectString2 = new String();

const stringExample = new String ("dasdas");
const stringExample2 = new String (200.2); //"200.2"

// METODY  dla typu string
userName.toUpperCase();
userName.toLowerCase();
//console.log(userName.toUpperCase());
//console.log(userName)

const userNameUpperCase = userName.toUpperCase();

// metody - coś robią Metody wywołujemy ( )
// właściwości - coś zawierają 


// Metody i właściwości, które warto znać
// właściwość zawierająca długośc łancucha, przy okazji zobaczymy, że do właściwości nm
userName.length; // notacja kropkowa
userName['length']; // ten sposob okreslamy noracją tablicową czy notacją z nawiasami

// Pobranie konkretnego znaku
userName.charAt(2);
userName[2];
userName['2'];

//Łączenie stringowe

userName.concat(" - fajne imię! " , " i super!")
//alternatywnie, bo robi to samo, możemy użyć operatora dodawania na stringu, mamy wtedy konkatencje (concatenation)
userName + ' - fajne imię!';
`${userName} - fajne imię`; // Nowy sposób - jeszcze omówimy (tzw. super string czy łańcuch szblonowy)

// Który indeks ma dany znak (i czy występuje), zwraca nam w którym miejscu jest dana litera/znak
userName.indexOf('d') //pierwszy pasujący znak zwraca, właściwie jego indeks, chyba że nie ma to -1 (wielkość liter ma znaczenie)
userName.lastIndexOf('d') //to samo ale szukanie od końca

//Czy dany znak występuje w danym łańcuchu, zwraca czy są takie litery
userName.includes('O'); //false
userName.includes('o'); //true

//Pozbądź sie białych znaków na początku i na końcu łańcucha
const afterTrim = "   słowo   ".trim()

// Skopiuj łańcuch tyle razy ile podamy w argumencie
const repeatString = "word".repeat(5);

// Zwróć fragment łańcucha. Jako pierwszy argument gdzie ma zacząć, jako drugi gdzie ma skończyć (bez tego). Łiczba, którą podajemy jest indeksem
const slideWord = userName.slice(1,2); // od drugiego znaku (bo mamy indeks 1) do trzeciego znaku (ale bez niego). Czyli zwróci nam tylko drugi znak


//konkretna litera zwrócona
const character = "litery".charAt(2) // zwraca literę (liczone o 0)

//cudzysłowy w środku stringa
//const singleQuoteExample = 'i'm Magda' // nie można użyć takiego samego cudzysłowa  w środku jak do otwarcia
//const singleQuoteExample = "i'm Magda"
const singleQuoteExample = 'i\'m Magda' //(\) backslash to ten drugi to (/) forward slash
// const slash = 'ktoś\\cos'
const longText = 'tekst \n tekst'


//konwersja innego typu na stringa
String(1000000) //"1000000"

// Druga metoda .toString którą możemy zmienić typ number na string
200..toString()

//można też wskazać na jaki system ma zmienić (domyślnie system dziesiętny)
200..toString(16)

// Sztuczka z wykorzystaniem niejawnej konwersji
"" + 200; // "200"
"" + true // "true"

//Zapamiętaj takze o właściwościach string związanych z typem boolean i konwersji string na boolean:


// - Pusty string ("") jest zaminiany na wartość falce
// - String z jakimś znakiem(znakami) w srodku jest zamieniany na true
Booleam() // konwersja na wartość typu Boolean. Funkcja Boolean działa podobmnie jak znane już String i Number (tylko zmienia na inny typ) 
// console.log(Boolean(emptyString)) //false
// console.log(Boolean(emptyObjectString)) //true
