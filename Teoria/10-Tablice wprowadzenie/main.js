// TABLICA - ARRAY

// Co trzeba wiedzieć o tablicy
// -- jest to obiekt wbudowany (ma więc właściwości i metody) 
// -- posiada uporządkową (kolejność jest ważna) zbiór wartości
// -- każda przechowywana wartość w tablicy ma swój indeks. Pierwsza wartość ma indeks 0

// TWORZENIE TABLICY

// Literał tablicy z podaniem zawartości

const nameList = ["Ludomir", "Żyrosław", "Gniewomir", "Myślimir"];

// Literał pustej tablicy a potem uzupełnienie za pomocą odwołania się do indeksu
const cityList = [];
cityList[0] = 'Konin';
cityList[1] = 'Zabrze';

// Konstruktor - pusta tablica
const items = [];
const gameItems = new Array();
// Konstruktor z uzupełnianonymi elementami
const colors = new Array("red", "blue");
colors[2] = "green";


// W każdym z tych sposobów powstaje instacja Tablicy o tych samych właściwościach i metodach (co widzimy po konstruktorze).
// console.log(typeof nameList);
// console.log(nameList);
// console.log(typeof colors);
// console.log(colors);


// Pamietajmy, że możemy edytować tablicę nawet jeśli jest ona przypisana do zmiennej const. Najczęściej więc wybierzemy dla tablicy zmienną const. Nie możemy jednak nic innego przypisać do tej zmiennej
const myArrayConst = [];
let myArrayLet = [];

myArrayConst[0] = "pierwszy const";
myArrayLet[0] = "pierwszy let";
// myArrayConst = "coś innego";
// myArrayLet = "coś innego";
