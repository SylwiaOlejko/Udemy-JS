/* CZYM JEST DOM */

//  -- reprezentacja dokumentu HTML w przeglądarce.
//  -- elementy strony (tag,tekst, atrybut) są węzłami, które mogą być pobrane, modyfifowane. Mozna też usuwać węzły i tworzyć nowe.
//  -- Struktura DOM przypomina drzewo. Na szczycie (na początku) jest obiekt document.
//  -- DOM nie jest częścią JS, ale JS umożliwia pracę z DOM


/* POBIERANIE ELEMENTÓW ZE STRONY */

// właściowości obiektu document
document.documentElement // dostęp do węzła html
document.body // dostęp do węzła body
document.images  //dostęp do obiektu (HTMLCollection -obiekt tablicopodobny) zawierającego wszystkie img w dokumencie (jeśli ich nie ma to obiekt jest pusty). Obiekt ten przypomina tablicę ponieważ ma length i do poszczególnych elementów można się dostać za pomocą notacje tablicy). 

// Taki obiekt łatwo przerobić na tablicę na dwa sposoby:
const imgs = Array.from(document.images);
const imgs2 = [...document.images];
