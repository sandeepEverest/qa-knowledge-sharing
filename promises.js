let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open =  false;


//let order = (time, work) => {return new Promise( (resolve, reject)=>{} )}


/*let order = (time, work) => {
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            resolve( work())
        }else{
            reject(console.log("Our Shop is closed"))
        }
    } )
}*/
//setTimeout(()=>{},time)


/*
let order = (time, work) => {
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{resolve( work())},time)
        }else{
            reject(console.log("Our Shop is closed"))
        }
    } )
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`));*/


let order = (time, func) => {
    return new Promise( (resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{resolve( func())},time)
        }else{
            reject(console.log("Our Shop is closed"))
        }
    } )
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
    .then(()=>{
        return order(0o000,()=>console.log("Production Has started"))
    })
    .then(()=>{
        return order(2000,()=>console.log("The fruit was chooped"))
    })
    .then(()=>{
        return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
    })
    .then(()=>{
        return order(1000,()=>console.log("Start the machine."))
    })
    .then(()=>{
        return order(2000,()=>console.log(`${stocks.holder[0]} was selected as base for ice cream`))
    })
    .then(()=>{
        return order(2000,()=>console.log(`${stocks.toppings[0]} was selected as base for ice cream`))
    })
    .then(()=>{
        return order(2000,()=>console.log("Ice cream was served"));
    })
    .catch(()=> {
        console.log("Customer left")
    })

    .finally(()=>{
        console.log("Day ended, our shop is closed.")
    })