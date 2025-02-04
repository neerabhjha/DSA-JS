class Solution {
    //count digits 
    countDigits(n) {
        let count = 0;
        while (n > 0) {
            n = Math.floor(n / 10);
            count++;
        }
        return count;
    }

    //absolute
    //TC: O(1), SC: O(1)
    absolute(i) {
        return Math.abs(i)
    }

    //Convert Celsius To Fahrenheit
    //TC: O(1), SC: O(1)
    celsiToFah(c) {
        return (9 * c / 5) + 32
    }

    //roots of a quadratic equation
    //TC: O(1), SC: O(1)
    findRoots(a, b, c) {
        let discriminant = b * b - 4 * a * c;
        if (discriminant < 0) return -1 //imaginary roots possible
        root1 = Math.floor((-b + Math.sqrt(discriminant)) / (2 * a))
        root2 = Math.floor((-b - Math.sqrt(discriminant)) / (2 * a))
        if (root1 < root2) {
            return [root2, root1]
        } else {
            return [root1, root2];
        }
    }

    //factorial (METHOD -1)
    //TC:O(N); SC:O(N)
    factorialByRecursion(n) {
        if (n == 0 || n == 1) return 1
        return n * solution.factorialByRecursion(n - 1);
    }

    //factorial (METHOD -2)
    //TC:O(N); SC:O(1)
    factorialByLoop(n) {
        let fact = 1;
        for (let index = 2; index <= n; index++) {
            fact = fact * index
        }
        return fact;
    }

    //count digits in factorial
    //TC:O(N); SC:O(1)
    countFactorial(n) {
        let count = 0;
        for (let i = 2; i <= n; i++) {
            count += Math.log10(i)
        }
        return Math.floor(count) + 1
    }

    findTrailingZeros(n) {
        if (n < 0) return -1;
        let count = 0;
        for (let i = 5; n / i >= 1; i *= 5) {
            count += Math.floor(n / i)
        }
        return count
    }

    //GCD OR HCF of two numbers
    //TC:O(min(a,b))
    findHCF(a, b) {
        const minNum = Math.min(a, b);
        for (let i = minNum; i >= 1; i--) {
            if (a % i == 0 && b % i == 0) return i;
        }
    }

    //GCD using EUCLIDEN ALGO (METHOD - 1)
    //TC: O(log min(a,b)), SC: O(1)
    findHCFUsingEucliden(a, b) {
        while (b !== 0) {
            a = a % b;
            [a, b] = [b, a] //swapping both numbers
        }
        return a;
    }
    //GCD using EUCLIDEN ALGO (METHOD - 2)
    //TC == SC == O(log min(a,b)), 
    findHCFRecursive(a, b) {
        if (b == 0) return a;
        return (b, a % b);
    }

    gcd(a, b) {
        // Everything divides 0
        if (a === 0) return b;
        if (b === 0) return a;

        // base case
        if (a === b) return a;

        // a is greater
        if (a > b) return gcd(a - b, b);
        return solution.gcd(a, b - a);
    }

    //LCM OF TWO NUMBERS
    //TC: O(lcm - max(a,b))
    findLCM(a, b){
        let lcm = Math.max(a,b);
        while(true){
            if(lcm % a == 0 && lcm % b == 0) return lcm;
            lcm++;
        }
    }

    //LCM OF TWO NUMBERS USING GCD 
    //TC: O(log min(a,b))
    findLcmBetterApproach(a,b){
        return (a * b) / solution.findHCFUsingEucliden(a,b)
    }

    //CHECK IF NUMBER IS PRIME OR NOT(naive method)
    //TC: O(n); SC:O(1)
    checkPrime(n){
        if(n == 1) return false;
        for(let i = 2; i <= n - 1; i++){
            if(n % i == 0) return false
        }
        return true
    }

}

const solution = new Solution();

console.log(`number of digits in 987345 is ::`, solution.countDigits(987345));
console.log(`absolute of -90 is ::`, solution.absolute(-90));
console.log(`32'c in fahrenheit is ::`, solution.celsiToFah(32));
console.log(`Roots of eqation is ::`, solution.findRoots(2, 5, 6));
console.log(`Factorial using recursion is ::`, solution.factorialByRecursion(4));
console.log(`Factorial using loop is ::`, solution.factorialByLoop(4));
console.log(`Count factorial is ::`, solution.countFactorial(10));
console.log(`Count of trailing 0s in 100 is ${solution.findTrailingZeros(100)}`);
console.log(`HCF of two numbers is ${solution.findHCF(100, 200)}`);
console.log(`HCF of two numbers using EUCLIDEN ALGO is ${solution.findHCF(2, 4)}`);
console.log(`HCF of two numbers using EUCLIDEN ALGO (METHOD-2) is ${solution.findHCF(15, 45)}`);
console.log(`HCF of two numbers is :: `,solution.gcd(15, 45));
console.log(`LCM of two numbers is :: `,solution.findLCM(15, 45));
console.log(`LCM of two numbers using better approach is :: `,solution.findLcmBetterApproach(2, 8));
