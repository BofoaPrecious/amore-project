let johnHeight1 = 1.95
let markHeight2 = 1.88
let markMass1 = 78
let johnMass2 = 85 
let markMass2 = 95
let johnMass1 = 92
let johnHeight2 =1.76
let markHeight1 = 1.69
let bmi = johnMass1/johnHeight1*johnHeight1**2
let bmi2 = johnMass2/johnHeight2*johnHeight2**2
let bmi3 = markMass1/markHeight1*markHeight1**2
let bmi4 = markMass2/markHeight2*markHeight2**2 
const best = 179.4
const bestNew = `john has a higher body index of ${best}`
const johnBodyMassIndex = 179.4
const highestBodyMass = johnBodyMassIndex >= 179.4;
console.log(highestBodyMass);
if (highestBodyMass){
    console.log(bestNew);
}else {
    const markBodyMassIndex = 147.5;
    console.log("mark has a lesser body index");
}
//let hbm = bmi
function johnBodyMass1(){
    let johnBodyMass1= bmi
    console.log(johnBodyMass1)
}
johnBodyMass1()
function johnBodyMass2() {
    let johnBodyMass2 = bmi2
    console.log(johnBodyMass2)
}
johnBodyMass2()
function markBodyMass1() {
    let markBodyMass1= bmi3
    console.log(markBodyMass1)
    
}
markBodyMass1()
function markBodyMass2(){
    let markBodyMass2= bmi4
    console.log(markBodyMass2)
}
//markBodyMass2()
//function markBodyMass() {
  //  let markBodyMass = hbm
    //console.log(markBodyMass)
    
//}
//function highestBodyMass(){
  //  let highestBodyMass = hbm
    //console.log(highestBodyMass)
//}
//highestBodyMass()
