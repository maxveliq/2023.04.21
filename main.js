let i = 1
do {
    wys(i)
    i++
} while (i <= 100);

function wys(i) {
    if (i % 2 === 1) {
        console.log(i + ' jest nie liczbą parzystą')
    }
    else {
        console.log(i + ' jest liczbą parzystą')
    }
}