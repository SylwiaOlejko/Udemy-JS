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

