/* FUNKCJE */

// Co o funkcjach trzeba wiedzieć na początek:

// -- są obiektami (jak tablica, któą już poznaliśmy)

// -- można je wywołać (jedyny obiekt, który można wywołać) -- nazwaFunkcji()

// -- o funkcjach należy myśleć jako o małych programach które coś robią z danymi lub coś zwracają (lub robią i to i to). Funkcja może modyfikować program (nazywamy to efektem ubocznym) lub go nie modifikować a jedynie przetwarzać elementy zwracajać nową wartość (służy do tego słowo kluczowe return).

// -- funkcje są wielokrotnego użytku (funkcja może być wywołana/uruchomiona wielokrotnie) 

// -- można ich używać tam gdzie innych obiektów (są first-class objects, czyli są pełnoprawnymi obiektami) np. przypisać do zmiennych, jako argumentu w innej funkcji czy jako wartość zwracana z funkcji.

// JAK STWORZYĆ FUNKCJE


// 1. WYRAŻENIE FUNKCYJNE (funkcja bez nazwy - do funkcji odwołujemy się za pomocą zmiennej). Po angielsku Function Expression.

// Szkielet funkcji 
// const nazwaFunkcjiCoRobi = function() {} ;

const showMessage = function() {
    console.log("wywołałem funkcję showMessage")
   }
   
   // showMessage()
   
   // taka funkcja bez nazwy określana jest funkcją anonimową.
   