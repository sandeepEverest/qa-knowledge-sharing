//let order = ()=> {};

//let production = ()=>{};

//let order = (call_production)=> {};

/*let order = (call_production)=> {
    call_production()
};*/

//order(production)


/*let order = (call_production)=> {
    console.log("Order Placed, please call production")
    call_production()
};

let production = ()=>{
    console.log(" Order Received. Start production")
};

order(production)*/

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let order = (fruit_name,holder_option,toppings_option,call_production)=> {
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} was selected.`)
        call_production(holder_option,toppings_option)
    },2000)
};

let production = (holder_option,toppings_option)=>{
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=> {
            console.log("the fruit has been chopped")
            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added.`)
                setTimeout(()=>{
                    console.log("Machine was started")
                    setTimeout(()=>{
                        console.log(`${stocks.holder[holder_option]} was used as per the order.`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[toppings_option]} was added to the ice cream as per order`)
                            setTimeout(()=>{
                                console.log("Hurray!! Ice cream is ready to be served")
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    })
};

order(0,0,0,production)