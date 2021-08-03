Array.prototype.myEach = function(callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index]);
        // callback(this[index], index, this); // this also worked??
    }
}

const array = [1, 2, 3];

// console.log(array.myEach((ele) => ele * 2)) // why undefined??
array.myEach((ele) => console.log(ele * 2)) // 2 4 6

Array.prototype.myMap = function(callback) {
    const new_arr = [];
    for (let index = 0; index < this.length; index++) {
        new_arr.push(callback(this[index]));
    }
    return new_arr;

    // this.myEach()
}

// console.log(array.myMap((ele) => ele * 3))

// Array#myReduce(callback[, initialValue])

Array.prototype.myReduce = function(initialValue, callback) {
    initialValue = (typeof initialValue === 'undefined') ? this.first : initialValue;
    this.myEach((ele) => callback(initialValue, ele));
}

array.myReduce(2, (ele) => ele * 2)