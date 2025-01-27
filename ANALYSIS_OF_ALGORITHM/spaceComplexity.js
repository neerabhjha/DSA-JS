// SC - O(1)
let a = 1 
console.log('Some String!')
let arr = [1, 'string', 34]
let arr2D = [[1,2,3], ['string', 797]]
console.log(arr, arr2D)

//Different space complexity.
//take inputs from user (N inputs)
//let say length of arr in N -->> SC = O(N)
//2d array of dimension N*M -->>  SC = O(N*M)
//stack, linked list, queue, tree, heap, graph etc.. -->> = O(N)
//string of length N -->> SC = O(N)


//FIBONACCI 

//SC -->> O(2^N)
function fiboRecursion(n) {
    if(n <= 1) return n;
    return fiboRecursion(n-1) + fiboRecursion(n-2);
}
console.log(`fiboRecursion for ${10}->>`, fiboRecursion(10))

//SC -->> O(N)
function fiboWithArray(n) {
    if(n <= 1) return n;
    const fib = [0,1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}
console.log(`fiboWithArray for ${10}->>`, fiboWithArray(10))

//SC -->> O(1)
function fiboWithConstant(n){
    if(n <= 1) return n;

    let prev = 0; curr = 1;
    for(let i = 2; i <= n; i++ ){
        const next = prev+curr;
        prev = curr;
        curr = next;
    }
    return curr;
}
console.log(`fiboWithConstant for ${10}->>`, fiboWithConstant(10))