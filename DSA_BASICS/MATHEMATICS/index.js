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
    findLCM(a, b) {
        let lcm = Math.max(a, b);
        while (true) {
            if (lcm % a == 0 && lcm % b == 0) return lcm;
            lcm++;
        }
    }

    //LCM OF TWO NUMBERS USING GCD 
    //TC: O(log min(a,b))
    findLcmBetterApproach(a, b) {
        return (a * b) / solution.findHCFUsingEucliden(a, b)
    }

    //CHECK IF NUMBER IS PRIME OR NOT(naive method)
    //TC: O(n); SC:O(1)
    checkPrime(n) {
        if (n == 1) return false;
        for (let i = 2; i <= n - 1; i++) {
            if (n % i == 0) return false
        }
        return true
    }

    //CHECK IF NUMBER IS PRIME OR NOT(sqrt method)
    //TC: O(sqrt(n)); SC:O(1)
    checkPrimeUsingSqrt(n) {
        if (n == 1) return false;
        for (let i = 2; i * i <= n; i++) {
            if (n % i == 0) return false
        }
        return true
    }

    //CHECK IF NUMBER IS PRIME OR NOT efficient approach
    //TC: O(sqrt(n)); SC:O(1) // 3x faster than above approach
    checkPrimeEfficientApproach(n) {
        if (n == 1) return false;
        if (n == 2 || n == 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        for (let i = 5; i * i <= n; i = i + 6) {
            if (n % i == 0 || n % (i + 2) == 0) return false
        }
        return true
    }

    //prime factors 
    //TC: O(n^3/2 logn)
    findPrimeFactors(n) {
        let primeFactors = []
        for (let i = 2; i < n; i++) {
            if (solution.checkPrimeEfficientApproach(i)) {
                let x = i;
                while (n % x == 0) {
                    primeFactors.push(i);
                    x = x * i;
                }
            }
        }
        return primeFactors
    }

    //prime factors method - 2
    //O(n^1/2 logn)
    findPrimeFactorsMethod2(n) {
        let results = []
        if (n <= 1) return;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            while (n % i == 0) {
                results.push(i);
                n = n / i;
            }
        }
        if (n > 1) results.push(n)
        return results
    }

    //prime factors more efficient solution
    //TC
    findPrimeFactorsEfficient(n) {
        if (n <= 1) return n;
        let results = []
        while (n % 2 == 0) {
            results.push(2);
            n = n / 2;
        }
        while (n % 3 == 0) {
            results.push(3);
            n = n / 3;
        }
        for (let i = 5; i <= Math.sqrt(n); i += 6) {
            while (n % i == 0) {
                results.push(i);
                n = n / i;
            }
            while (n % (i + 2) == 0) {
                results.push((i + 2));
                n = n / (i + 2);
            }
        }
        if (n > 3) results.push(n)
        return results
    }

    //all divisors of a number
    //TC : theta(n), sc:theta(1)
    allDivisors(n) {
        let results = []
        for (let i = 1; i <= n; i++) {
            n % i == 0 ? results.push(i) : null
        }
        return results
    }

    //all divisors of a number more efficient soln
    //TC : O(sqrt(n)), sc:O(1)
    allDivisorsEfficient(n) {
        let results = [];
        for (let i = 1; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                if (n / i === i) {
                    results.push(i)
                } else {
                    results.push(i)
                    results.push(n / i)
                }
            }
        }
        return results
    }

    //all divisors of a number more efficient soln
    //TC : O(sqrt(n)), sc:O(1)
    allDivisorsIncreasingOrder(n) {
        let i = 1, results = []
        for (i = 1; i * i < n; i++) {
            if (n % i == 0) {
                results.push(i)
            }
        }

        for (; i >= 1; i--) {
            if (n % i == 0) {
                results.push(n / i)
            }
        }
        return results
    }

    //all prime numbers less than a number
    //TC: O(N* sqrt(N))
    findPrimesLessthanN(n){
        let results = []
        for (let index = 2; index <= n; index++) {
            if(solution.checkPrimeEfficientApproach(index)) results.push(index);
        }
        return results
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
console.log(`HCF of two numbers is :: `, solution.gcd(15, 45));
console.log(`LCM of two numbers is :: `, solution.findLCM(15, 45));
console.log(`LCM of two numbers using better approach is :: `, solution.findLcmBetterApproach(2, 8));
console.log(`Check prime or not is :: `, solution.checkPrime(47));
console.log(`Check prime or not using sqrt is :: `, solution.checkPrimeUsingSqrt(67777777777));
console.log(`Check prime or not efficient approach :: `, solution.checkPrimeEfficientApproach(67777777777));
console.log(`Prime factors :: `, solution.findPrimeFactors(12));
console.log(`Prime factors method 2 :: `, solution.findPrimeFactorsMethod2(28));
console.log(`Prime factors most efficient solution :: `, solution.findPrimeFactorsEfficient(28));
console.log(`All divisors method 1 :: `, solution.allDivisors(28));
console.log(`All divisors method 2 :: `, solution.allDivisorsEfficient(28));
console.log(`All divisors method 3 :: `, solution.allDivisorsIncreasingOrder(28));
console.log(`findPrimesLessthanN:`, solution.findPrimesLessthanN(10))