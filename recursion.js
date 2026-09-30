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