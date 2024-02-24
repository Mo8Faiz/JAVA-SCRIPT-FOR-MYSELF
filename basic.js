//VARIABLES : 
const PI=3.14; // const variables must be assigned before use
console.log(PI);
//CANNOT REASSIGN A const variable
// PI=5;
// console.log(PI);
let t=5;
{
    let v=8;
    console.log(v);
    // Variable 'v' 's scope is limited only till this block.

}
//let t=9; Cannot REDECLARE 'let' variables
console.log(t);
const emp_ID=22231151;
let name="Martin";
let age=34;
console.table([emp_ID,name,age]);

//var can be reassigned : 
//scope independent
var b=7;
{
    var b=10;
}
console.log(b);


