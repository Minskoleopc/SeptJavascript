// program 2
let city = "jaipur"
switch (city) {
    case "pune":
        console.log("MH")
    case "banglore":
        console.log("KA")
    case "jaipur":
        console.log("RJ")
    default:
        console.log("Incorrect city name")

}
// program 2

let city2 = "banglore"
switch (city2) {
    case "pune":
        console.log("MH")
        break
    case "banglore":
        console.log("KA")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("Incorrect city name")

}

// program 3
let city3 = "Nagpur"
switch (city3) {
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "banglore":
    case "mysore":
        console.log("KA")
        break
    case "jaipur":
    case "updiapur":
        console.log("RJ")
        break
    default:
        console.log("Incorrect city name")

}

// program 4
let x = 100
let y = 500 
let z = 30
let isBiggest = true

switch(isBiggest){
    case x > y && x > z:
        console.log('x is greater')
        break
    case y > z && y > x:
        console.log('y is greater')
        break
    default:
        console.log("z is greater")
}

// program 5
// truthy or falsy value

// 0 , undefined , null , NaN , "",5 < 4

if(0){
    console.log("hello")
}
else {
    console.log("bye")
}

if(null){
    console.log("hello")
}
else {
    console.log("bye")
}

if(undefined){
    console.log("hello")
}
else {
    console.log("bye")
}


if(5 < 3){
    console.log("hello")
}
else {
    console.log("bye")
}

if(false){
    console.log("hello")
}
else {
    console.log("bye")
}

if(NaN){
    console.log("hello")
}
else {
    console.log("bye")
}

// {}, [], " ", "a", "A", 13,-45,78.8,8 === 8, true
console.log("--------------------------------------")
if({}){
    console.log('hello')
}
else {
    console.log("bye")
}

if(" "){
    console.log('hello')
}
else {
    console.log("bye")
}

if("a"){
    console.log('hello')
}
else {
    console.log("bye")
}

if("A"){
    console.log('hello')
}
else {
    console.log("bye")
}

if(13){
    console.log('hello')
}
else {
    console.log("bye")
}

if(13.5){
    console.log('hello')
}
else {
    console.log("bye")
}

if('&&'){
    console.log('hello')
}
else {
    console.log("bye")
}

if(8 === 8){
    console.log('hello')
}
else {
    console.log("bye")
}

if(8 > 6){
    console.log('hello')
}
else {
    console.log("bye")
}

if(true){
    console.log('hello')
}
else {
    console.log("bye")
}











