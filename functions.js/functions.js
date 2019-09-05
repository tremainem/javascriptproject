// // const pressgrindbeans = () => {console.log("Grinding for 20 seconds");}
// // pressgrindbeans();

// let coffieIsGrinding = false;
// const pressGrindBeans = () => { 
//     if (coffieIsGrinding) {console.log("stopping the grind");
//     coffieIsGrinding = false;
// } else {console.log("grinding is to begin")}
// coffieIsGrinding = true;}

// pressGrindBeans();

// let cashwithdrawal = (amount,accnum =>)
// let acountNumber = 12345678
// let acountPin = 1234
// let balance = 1000
// const cashWithdrawal = (pin, amount) => {
//    if (pin == acountPin){
//        if (balance >= amount){
//        console.log(withdraw £${amount} from ${acountNumber})
//        displayBalance(amount)
//        console.log(Your new balance is £${balance})
//        }
//        else{
//        console.log("not enough funds in acount")
//        console.log(Your balance is £${balance})
//        }
//    }
//    else{
//        console.log("invalid pin entered")
//    }
// }
// const displayBalance = (amount) => {
//    return balance = balance - amount
// }
// cashWithdrawal(1254, 100)
// cashWithdrawal(1234, 100)
// cashWithdrawal(1234, 900)
// cashWithdrawal(1234, 100)

const makeSandwhich = (breadType,fill1,fill2,fill3,fill4,fill5)=> {
    console.log (`here is your ${breadType} with ${fill1},${fill2},${fill3},${fill4} "&" ${fill5}`);
}
makeSandwhich("tigerbread","Chicken Breast","cheese","lettuce","cucumber","sweetcorn")

let acountNumber = 12345678
let acountPin = 1234
let balance = 1000
const cashWithdrawal = (pin, amount) => {
    if (pin == acountPin){
        if (balance >= amount){
        console.log(`withdraw £${amount} from ${acountNumber}`)
        displayBalance(amount)
        console.log(`Your new balance is £${balance}`)
        }
        else{
        console.log("not enough funds in acount")
        console.log(`Your balance is £${balance}`)
        }
    }
    else{
        console.log("invalid pin entered")
    }
}
const displayBalance = (amount) => {
    return balance = balance - amount 
} 
cashWithdrawal(1254, 100)
cashWithdrawal(1234, 100)
cashWithdrawal(1234, 900)
cashWithdrawal(1234, 100)

for( i)