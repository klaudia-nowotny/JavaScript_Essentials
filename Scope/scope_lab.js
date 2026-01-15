// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
//console.log(blockVar);
//console.log(blockLet);
function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();
//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError
{
    var newBlockVar = "I am new block var";
    let newBlockLet = "I am new block let";
    const newBlockConst = "I am new block const";
    newBlockVar = "newer var";
    //newBlockConst = "newer const";
    newBlockLet = "newer let";
    console.log(newBlockVar);
    console.log(newBlockLet);
}
newBlockVar = "new new var";
console.log(newBlockVar);
//newBlockLet = "new new let";
//console.log(newBlockLet);
//newBlockConst = "new new const";
//console.log(newBlockConst);