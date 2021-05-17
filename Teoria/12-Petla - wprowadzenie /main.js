//  LOOPS - PĘTLE

// Pętla umożliwia wielokrotne wykonanie kodu.
// Pętla pozwala wykonywać blok kodu wielokrotnie, tyle razy ile spełniony jest określony warunek.
// Pętla pozwala pracować na elementach tablicy czy obiektu.
// Pętla opiera się na sprawdzeniu warunku. Pętla jest tak długo wykonywana jak spełniony jest warunek

// FOR

/* for (inicjalizacja iteratora; warunek; zwiększenie iteratora) {
 blok kodu
} */
// for - słowo kluczowe

for (let i = 0; i < 10; i++) {
    console.log("wyświetlenie " + i);
   }
   

   // Działanie
// 1 - inicjalizacja następuje raz (konwencja mówi, że nazywamy iterator zmienną i. Powinien to być let, a nie var czy bez deklaracji). Najczęściej deklarujemy iterator jako 0.
// 2 - warunek jest sprawdzany za każdym razem (przed wykoneniem bloku). Warunek jest konwertowany do true/flase. Jeśli false pętla kńczy działanie a program idzie dalej. Jeśli true, program idzie do bloku kodu
// 3 - Wykonanie kodu ( o ile warunek jest prawdziwy)
// 4 - po wykonaniu bloku zwiększa iterator (najczęsciej o 1 za pomocą inkrementacji, ale nie jest to konieczne)
// DALEJ: Nowa pętla od punktu 2 (inicjalizacja jest robiona tylko raz)
