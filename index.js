const cats= [];{
cats.length=0;
}
//console.log(cats.length)
cats.push("Milo", "Otis", "Garfield");
// cats.push()
function destructivelyAppendCat (){
cats.push ('Ralph');
}
//destructivelyAppendCat ()
//console.log(cats)
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
//destructivelyPrependCat()
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(){
return [... cats,"Broom" ];

}
function prependCat(){
    return ["Arnold",...cats ]
}
function removeLastCat(){
    return cats.slice(0,- 1)
}
function removeFirstCat(){
    return cats.slice(1)
}
console.log(cats.length)
// let cats=['Milo', 'Otis', 'Garfield']

