class Solution {
    //count digits 
    countDigits(n) {

    }

    //absolute
    absolute(i) {
        return Math.abs(i)
    }

    //Convert Celsius To Fahrenheit
    celsiToFah(c){
        return (9*c/5)+32
    }

}

const solution = new Solution();

console.log(`number of digits in 987345 is ::`, solution.countDigits(987345));
console.log(`absolute of -90 is ::`, solution.absolute(-90));
console.log(`32'c in fahrenheit is ::`, solution.celsiToFah(32));