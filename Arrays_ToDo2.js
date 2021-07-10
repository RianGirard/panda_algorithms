// Reverse:
// Given a numerical array, reverse order of values, in-place. This means don't create a second array to accomplish the task. Don't use any built-in functions.
function reverse(arr){
    for (var i=0; i<(arr.length/2); i+=1){      // only go through the first half (left-side) of the array
        var temp = arr[i];                      // store array value as temp;
        arr[i] = arr[arr.length-1-i];           // replace left-side array value with corresponding match from "right" side
        arr[arr.length-1-i] = temp;             // right-side value gets temp to complete the reversal
    }
return arr;
}
// console.log(JSON.stringify(reverse([1,2,3,4,5,6])));
// console.log(JSON.stringify(reverse([-1])));
// console.log(JSON.stringify(reverse([])));
// console.log(JSON.stringify(reverse([1,2,3,4,5])));


// Rotate: 
// Given an array and an offset value, shift array's values to the right by the offset amount. "Wrap-around" andy values that shift off the array's end so that no data is lost. Given ([1,2,3], 1) return ([3,1,2]). Don't use any built-in functions. 
function offset(arr, shift){
    console.log(arr);
    if (shift >=0){     // if the shift is a positive number
        for (var i=arr.length-1; i>=0; i-=1){       // loop backwards through array
            arr[i+shift] = arr[i];                  // array [i + shift] is equal to array [i] -- this puts a (shift) number of extra fields into the array
        }
        for (var j=0; j<shift; j+=1){               // loop through the number of shifts 
            var temp = arr[arr.length-1];           // store that number on the end into temp
            arr.pop();                              // delete it from array
            arr[shift-1-j] = temp;                  // wrap it around to the front! 
        }
        return arr;
    }
    for (var i=0; i<arr.length; i+=1){      // otherwise, the shift is negative... loop forwards through array
        if (i<shift*-1){                    // shift is left this time; for those numbers that need to wrap-around...
            arr[arr.length] = arr[i];       // push them over to the right
        }
        arr[i] = arr[i+(shift*-1)];         // now move all index values to the left by (shift) number of spaces
    }
    for (var j=0; j<shift*-1; j+=1){        // pop for number of times you have shifts
        arr.pop();                          // all done!
    }
    return arr;
}
// console.log(JSON.stringify(offset([1,2,3,4,5], 2)));

// Filter Range: 
// Given an array and min/max values, return only the array values between the min/max. Work in place with values kept in original order; don't use built-in functions
function filterRange(arr, min, max){
    var origLen = arr.length;                 // array may grow, so need original length
    for (var i=0; i<origLen; i+=1){           // loop through looking for indexes between the min/max
        if (arr[i] > min && arr[i] < max){
            arr[arr.length] = arr[i];         // qualifying values are appended to the end, and...
        }
    }
    for (var j=origLen; j<arr.length; j+=1){    // loop through the qualifying values at end of array
        arr[j-origLen] = arr[j];                // duplicate those values at far left of array
    }
    for (var k=0; k<origLen; k+=1){             // pop all original array values -- those on far left will be preserved
        arr.pop();
    }
    return arr;
}
// console.log(JSON.stringify(filterRange([10,20,-30,40,50], 10, 45)));
// console.log(JSON.stringify(filterRange([10], 10, 45)));
// console.log(JSON.stringify(filterRange([], -1, 1)));
// console.log(JSON.stringify(filterRange([10,20,-30,40,50], 1, 10)));
// console.log(JSON.stringify(filterRange([10,20,-30,40,50], 0, 11)));
// console.log(JSON.stringify(filterRange([110,120,-130,140,150], 100, 145)));


// Concat: 
// Accect two input arrays and return a conjoined array with the first array's elements, followed by the second array's elements in order. 
function concat(arrOne, arrTwo){
    var newArr = [];
    for (var i=0; i<arrOne.length; i+=1){
        newArr.push(arrOne[i]);
    }
    for (var j=0; j<arrTwo.length; j+=1){
        newArr.push(arrTwo[j]);
    }
    return newArr;
}
console.log(JSON.stringify(concat(['a', 'b'], [1,2])));
console.log(JSON.stringify(concat([], [1,2])));
console.log(JSON.stringify(concat(['a', 'b'], [true, "bill the cat"])));
console.log(JSON.stringify(concat(['a', 'b'], ["c", "d", "efg"])));
console.log(JSON.stringify(concat([], [])));