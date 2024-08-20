/* let i=0;
for (i=0; i<10; i++)
    {
        console.log(i)
        if (i==3)
        {
            break
        }

    } 
// Above program prints 0,1, 2, 3 because if condition is after the print statement

let i=0;
for (i=0; i<10; i++)
    {
        if (i==3)
            {
                break } 
                console.log(i)
        
    } 
// Above program prints 0,1, 2 because if condition is before the print statement
*/
let i=0;
for (i=0; i<10; i++)
    {
        if (i==3)
            {
                continue } 
                console.log(i)
        
    } 
    //above program prints 0, 1, 2, 4 , 5, 6, 7, 8 ,9 

    let j=0
    for (j=0;j<10;j++)
    {
        console.log(j)
        if (j==3)
        {
            continue
        }
    }
    //above program not skipping 3 but printing 0 to 9. Correct,condition is checked after printing 3.
    