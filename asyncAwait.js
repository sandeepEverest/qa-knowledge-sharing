kitchen();


async function toppings_choice (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve( console.log("which topping would you love?") )

        },3000)
    })
}

//toppings_choice()
// Trigger the function



async function kitchen(){

    console.log("A")
    console.log("B")
    console.log("C")

    await toppings_choice()

    console.log("D")
    console.log("E")

}



console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")