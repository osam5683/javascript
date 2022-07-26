// less than 0

// var a
// a = 25
// if (a<0)
// {
// console.log('less than 0')
// }
// else if ("a>30")
// {
//     console.log('more than 30')
// }
// else if ("a<=10")
// {
//     console.log('0-5-10')
// }
// else if ("a<=20")
// {
//     console.log('11-15-20')
// }


var
a='30'
b='30'
if (+a && +b)
{
    if (a<=b){
         if (a<b){
            console.log('a < b')
         }
         else{
            console.log('a==b')
         }
    }
    else {
        console.log('a > b')
    }
}
else
{
    console.log('NAN')
}