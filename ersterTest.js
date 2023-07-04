function division(left, right) {
    if (right !== 0){
        return left / right;
    } else {
        return ('kann nicht durch Null teilen')
    }
}

// Funktion test
// wir erwarten: division(3,4) = 0.75, division(0/5) = 0, division(8/0) = 'kann nicht durch Null teilen'

function testDivision() {
    let success = true;
    if (division(3,4) !== 0.75) {
        console.log("division(3,4) failed")
        success = false;
    };
    if (division(0,5) !== 0) {
        console.log("division(0,5) failed")
        success = false;
    };
    if (division(8,0) !== 'kann nicht durch Null teilen') {
        console.log("division(8,0) failed")
        success = false;
    };
    if (!success) {
        console.log('Unittest testDivision() hat einen Fehler entdeckt');
    } else {

    }
}

testDivision();