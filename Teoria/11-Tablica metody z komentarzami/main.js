// TABLICA - METODY

const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
//console.log(italianUsers);

// PUSH - dodaj element na końcu tablicy

 //italianUsers.push("Alessandra");
 //console.log(italianUsers);


 // UNSHIFT - dodaj element na początku tablicy

 //italianUsers.unshift("Tommaso");
 //console.log(italianUsers);

 // POP - Usuń ostatni element tablicy
// Usunięcie wartości i indeksu (nie tylko wartości)

//const deletedUser = italianUsers.pop()
//console.log(italianUsers);

//delete italianUsers[italianUsers.length - 1] //zmiana wartości ostatniego  na udenfined

/* ---------------------------------  */

// SHIFT - Usuń pierwszy element
// Usunięcie wartości i indeksu (nie tylko wartości)

//italianUsers.shift();
//italianUsers.shift();
//console.log(italianUsers);
//delete italianUsers[0] //zmiana wartości pierwszego na udenfined

// CO ZWRACAJĄ TE METODY (BO OPRÓCZ TEGO, ŻE COŚ ROBIĄ /POWYŻEJ/ TO COŚ ZWRACAJĄ)

// const removedLastElement = italianUsers.pop(); //metoda zwraca element (ostatni element tablicy), który został usunięty

// const removedFirstElement = italianUsers.shift(); //metoda zwraca element (pierwszy element tablicy), który został usunięty.

const lengthArrayAfterPush = italianUsers.push("Vito"); //metoda zwraca długoś tablicy jaką ma tablica po jej wykonaniu
const lengthArrayAfterUnshift = italianUsers.unshift("Apollonia"); //też zwraca długoś po dodaniu


/* ------------------------------------ */
