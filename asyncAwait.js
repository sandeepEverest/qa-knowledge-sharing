/*
-async/await functions are like promises.
-async returns a promise or a more common term is "response".
-await waits for a response (promise) from async before await it can do it's thing.
-javascript is a synchronous language meaning it's going to run all the code you wrote all at once.
-to avoid the previous point, you want to use either use a promise or async/await functions to basically tells your code to "hold while I finish doing this thing"
*/

sequence();
async function sequence() {
    await kitchen();

    console.log("doing the dishes")
    console.log("cleaning the tables")
    console.log("taking orders")

}

async function toppings_choice (){
    setTimeout(()=>{
        ( console.log("which topping would you love?") )
    },3000)
}


async function kitchen(){

    console.log("A")
    console.log("B")
    console.log("C")

    await toppings_choice()

    console.log("D")
    console.log("E")

}



/*let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open =  true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }else{
            reject(console.log('Shop is closed'))
        }
    })
}

async function kitchen(){
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} is selected`);

        await time(0o000)
        console.log("Start the production");

        await time(2000)
        console.log("Cut the fruit");

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time(1000)
        console.log("Start the machine");

        await time(2000)
        console.log(`${stocks.holder[0]} is selected as holder`);

        await time(3000)
        console.log(`${stocks.toppings[0]} was added`);

        await time(2000)
        console.log("Serve the ice cream");
    }catch (error) {
        console.log("Customer left "+ error)
    }finally{
        console.log("Day Ended, shop is closed")
    }
}

kitchen();*/






