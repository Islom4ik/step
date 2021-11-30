do {
    var a = +prompt('Введите число ниже')
} while (isNaN(a) ||  a == 0 );

var b = +prompt( 'Введите степень ниже');

let c = 1

if (b == 0 || isNaN(b)){
    c = a * a
}else{
     for( let i = 1; i <= b ; i++){
        c = c * a
}
}

alert(c)

  