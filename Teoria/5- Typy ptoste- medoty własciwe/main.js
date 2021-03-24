const txt = 'jakiś tekst nowy1';
let score = 12.55;
//te dwie zmienne przydadzą nam się w dalszych przykładach w pliku

"zbiór znaków w cudzysłowie"; 1222; true; null; undefined;
// Każdy typ prosty (poza Symbol) można stworzyć za pomocą literału. Literał to zestaw znaków, które zostaną rozpoznane przez interpreter

//literał łancucha, literał liczby ... 
// na przyszłość: literał obiektu "{}", literał tablicy "[]"

/* Typy proste nie są obiektami, to jednak mozemy na nich (number, string, boolean) wykonywać metody i właściwości, które to są domeną obiektów */


// właściwość - informacje o stanie (wartości)
// metoda - działania (na wartości), które najczęściej zwraca nową wartość  w oparciu o działanie na wartości.

// Właściwości
txt.length; //właściwość zawierająca informacje o długości stringa
txt[2]; //pobranie znaku, kótry znajduje się pod danym indeksem


//Metody (nie dokonują zmiany, tylko zwracają). Metody muszą być wywołane (()), bez wywołania zobaczymy tylko czym są a nie ich działanie
// metoda(argument)

txt.toUpperCase; //zwraca funkcje (czyli bez wywowałania kieruje do funkcji (metodą określamy funkcję, która jest przypisana do obiektu - oczywiście będziemy o tym jeszcze rozmawiać)
txt.toUpperCase(); //wywołanie metody dla string
score.toFixed(); //wywołanie metody dla number (typy nie mają tych samych metod, tylkjo różne)
txt.indexOf('ś'); //metoda sprawdzająca czy w danym stringu jest wskazany znak, a jeśli tak to na jakiej pozycji (o jakim indeksie, licząć od zera)