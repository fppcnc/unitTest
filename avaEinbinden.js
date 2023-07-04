//test.js
const test = require('ava');

//beispiel funktion zum Testen
function add(a,b) {
   return a + b;
}

// testfall
test('Addition von zwei Zahlen', t => {
    const result = add(2,3);
    t.is(result, 5); //überprüfung, ob das Ergebnis 5 ist
})