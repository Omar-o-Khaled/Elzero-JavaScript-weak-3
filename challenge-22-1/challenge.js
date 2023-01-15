let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
/*
    (11 + 20 + 80 - 11 = 100)

    ++a => preincrement => a = 11
    + => add
    +b++ => +b =>unary operator => b++ => post Increment => 11 + 20 = 31
    + => add
    +c++ => +c =>unary operator => c++ => post Increment => 31 + 80 = 111
    - => subtract
    +a => unary operator 
    a++ => (a = 11) post Increment a = 12 => 111 -11 = 100

    a=12
    b=21
    c=81
*/
console.log("");
console.log(a);
console.log(b);
console.log(c);
console.log("");

console.log(++a + -b + +c++ - -a++ + +a);
/*
    (13 -21 +81 + 13 + 14 = 100)

    ++a => preincrement => a=13;
    + => add;
    -b => unary operator => -21;
    +c++ => +c =>unary operator => c++ => post Increment = 81;
    - => subtract;
    -a++ => -a (unary operator) => a++ => post Increment = -13;
    + => add;
    +a => a=14

    a=14; 
    b=21; 
    c=82;

*/
console.log("");
console.log(a);
console.log(b);
console.log(c);
console.log("");


console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
/*
    81 + 21 + 13*21 - 22*13 + 12 - 1 = 100

    --c => predecrement; 81  ;      c=81
    + => add; +
    +b=> unary operator; 21
    + => add; +
    --a => predecrement; 13 ;      
    * => multiplication
    +b++ => +b =>unary operator => b++ => post Increment => 21;     b=22
    - => subtract;
    +b=> unary operator; 22
    * => multiplication
    a => a=13
    + => add; +
    --a =  predecrement; 12 ;       a=12
    - => subtract;
    +true =>unary operator;      1

    81+21-14+12=114+14 =100

    a=12
    b=22
    c=81
*/
console.log("");
console.log(a);
console.log(b);
console.log(c);
console.log("");
