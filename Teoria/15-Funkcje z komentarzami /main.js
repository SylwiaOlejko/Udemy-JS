// WARTOŚCI DOMYŚLNE W FUNKCJI (ES6)

// jeśli nie podamy argumentu na etapie wywołania to funckja weźmie argumenty domyślne

// Tworzenie funkcji z pomocą fat arrow
const addTwoNumbers = (x = 0, y = 0) => {
    const result = x + y;
    console.log(result);
    return result;
   }
   
   
   // Deklaracja funkcji (to samo ale inny sposób tworzenie) 
   // const addTwoNumbers = function(x = 0, y = 0) {
   //  const result = x + y;
   //  console.log(result);
   //  return result;
   // }
   
   // Bez wartości domyślnych gdybyśmy nie podali argumentów otrzymalibyśmy undefined w miejscu ich wykorzystania.
   
   
   /* ---------------------------------------- */
   