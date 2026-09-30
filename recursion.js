// Print number by recusrivly

function num(n){
if(n==0) return

num  (n-1)
console.log(n)

}

num(5)

//  factorial by Using recusrion

function fact(n){
 
    if(n==0) return 1

    return n * fact(n-1)

}

console.log(fact(5))


// fabbonaci

// function fabbo(n){
//     if(n==0) return 0;
//     if(n==1) return 1

//     return fabbo(n-1)+ fabbo(n-2)
// }

// console.log(fabbo(6))

// sum of digit

function sumofDigit(num){
    if(num==0) return 0

    return (num%10) + sumofDigit(Math.floor(num/10))
}

console.log(sumofDigit(123))


// power of n

// function pow(a,b){
//     if(b==0) return 1

//  return a * pow(a,b-1)
// }

// console.log(pow(2,2))