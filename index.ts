#! /usr/bin/env node

import inquirer from "inquirer"
const currency: any={
    USD:1,
    EUR:0.94,
    SaudiRiyal:3.75,
    GBP:0.81,
    PKR:278,

};


let converterAnswer = await inquirer.prompt([
    {
    name : "from",
    type :"list",
message:"Enter from currency",
choices:["USD","EUR","SaudiRiyal","GBP","PKR"],
},
{
    name : "to",
    type :"list",
message:"Enter to currency",
choices:["USD","EUR","SaudiRiyal","GBP","PKR"],
},
{
    name : "amount",
    type :"number",
message:"Enter your amount",
}


])
console.log(converterAnswer)

let convertedfromcurrency=converterAnswer.from
let convertedtocurrency=converterAnswer.to

let fromAmount = currency[convertedfromcurrency]
let toAmount = currency[convertedtocurrency]
let amount = converterAnswer.amount
let baseAmount= amount/ fromAmount
let convertedAmount= baseAmount* toAmount

console.log(convertedAmount)

