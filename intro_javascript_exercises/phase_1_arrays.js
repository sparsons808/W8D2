Array.prototype.uniq = function() {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
            arr.push(this[i]);
        }   
    }
    return arr;
}

// console.log([1, 2, 2, 3, 3, 3].uniq()) // => [1, 2, 3]

Array.prototype.twoSum = function(target) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[i] + this[j] === target && i < j) {
                result.push(this[i], this[j]);
            } 
        }
    }
    return result;
};

console.log([1, -1, 5, 0, 3, -3].twoSum(0))