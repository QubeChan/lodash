const _ = {
    // clamp method
    clamp(number, lowBound, upperBound) {
        // // my solution for readability
        // if (number < lowBound) {
        //     return lowBound;
        // } else if (number > upperBound) {
        //     return upperBound;
        // } else if (number > lowBound && number < upperBound) {
        //     return number;
        // }

        // // my solution for clean code
        // return (number < lowBound) ? lowBound : (number > upperBound) ? upperBound : (number > lowBound && number < upperBound) ? number : false;

        // // my solution using Math Object for readability
        // const clampLow = Math.max(number,lowBound);
        // const clampUpper= Math.min(clampLow,upperBound);
        // return clampUpper;

        // my solution using Math Object for clean code
        return Math.min(Math.max(number, lowBound), upperBound);
    },

    // inRange method
    inRange(number, startVal, endVal) {
        if (endVal === undefined){
            endVal = startVal;
            startVal = 0;
        } else if(startVal>endVal){
            let temp = startVal;
            startVal = endVal;
            endVal = temp;
        }

        if (number < startVal) {
            return false;
        } else if (number >= endVal) {
            return false;
        } else if (number >= startVal && number < endVal){
            return true;
        }
    },

    // words method
    words(str){
        // readability
        const words = str.split(" ");
        return words;

        // clean code
        return str.split(" ");
    },
    
    // pad method
    pad(str, length){
        
    }
};


const test1 = _.clamp(10, -5, 5);
const test2 = _.clamp(-10, -5, 5);
const test3 = _.clamp(0, -5, 5);
console.log(test1);
console.log(test2);
console.log(test3);

console.log(_.inRange(3, 2, 4));
console.log(_.inRange(4, 8));

// Do not write or modify code below this line.
module.exports = _;