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
        if (endVal === undefined) {
            endVal = startVal;
            startVal = 0;
        } else if (startVal > endVal) {
            let temp = startVal;
            startVal = endVal;
            endVal = temp;
        }

        if (number < startVal) {
            return false;
        } else if (number >= endVal) {
            return false;
        } else if (number >= startVal && number < endVal) {
            return true;
        }
    },

    // words method
    words(str) {
        // readability
        const words = str.split(" ");
        return words;

        // clean code
        return str.split(" ");
    },

    // pad method
    pad(str, length) {
        if (str.length >= length) {
            return str;
        }
        const strLength = str.length;
        const startPad = Math.floor((length - strLength) / 2);
        const endPad = length - strLength - startPad;
        return " ".repeat(startPad) + str + " ".repeat(endPad);
    },

    // has method
    has(object, key) {
        return object[key] !== undefined;
    },

    // invert method
    invert(object) {
        let invertedObject = {};
        for (const key in object) {
            const originalValue = object[key];
            invertedObject = { originalValue: key };
        }
        return invertedObject;
    },

    // findKey method
    findKey(object, predicate) {
        for (const key in object) {
            const value = object[key];
            const predicateReturnValue = predicate(value);
            return predicateReturnValue ? key : undefined;
        }
    },

    // drop method
    drop(arr, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = arr.slice(n,arr.length);
        return droppedArray;
    }
};

// Do not write or modify code below this line.
module.exports = _;