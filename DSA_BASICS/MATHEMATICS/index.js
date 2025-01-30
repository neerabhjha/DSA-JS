class Solution {
    //count digits 
    
    countDigits(n) {

    }

    //absolute
    //TC: O(1), SC: O(1)
    absolute(i) {
        return Math.abs(i)
    }

    //Convert Celsius To Fahrenheit
    //TC: O(1), SC: O(1)
    celsiToFah(c){
        return (9*c/5)+32
    }

    //roots of a quadratic equation
    //TC: O(1), SC: O(1)
    findRoots(a,b,c){
        let discriminant = b * b - 4 * a * c;
        if(discriminant < 0) return -1 //imaginary roots possible
        root1 = Math.floor((-b + Math.sqrt(discriminant)) / (2 * a))
        root2 = Math.floor((-b - Math.sqrt(discriminant)) / (2 * a))
        if(root1 < root2){
            return [root2, root1]
        } else {
            return [root1, root2];
        }
    }

    //factorial (METHOD -1)

    //factorial (METHOD -2)

}

const solution = new Solution();

console.log(`number of digits in 987345 is ::`, solution.countDigits(987345));
console.log(`absolute of -90 is ::`, solution.absolute(-90));
console.log(`32'c in fahrenheit is ::`, solution.celsiToFah(32));
console.log(`Roots of eqation is ::`, solution.findRoots(2, 5, 6));

