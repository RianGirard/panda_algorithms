// Push Front: 
// Given an array and a value, insert this value at the beginning of the array. Don't use any built-in array methods.
function insertValue(arr, x) {
    for (var i=(arr.length); i>=0; i-=1){
        if (i == 0){
            arr[i] = x;
        }
        else arr[i] = arr[i-1];
    }
    return arr;
}
// console.log(JSON.stringify(insertValue([-1, 3, -5, 7, 9, 1343], 10)));

// Pop Front: 
// Given an array, remove and return the value at the beginning of the array. Don't use any built-in methods, except for pop().
function removeFront(arr){
    var x = arr[0];
    for (var i=0; i<arr.length; i+=1){
        if (i == arr.length-1){
            arr.pop([i]);
        }
        else arr[i] = arr[i+1];
    }
    return x;
}
// console.log(removeFront([-1, 3, -5, 7, 9, 1343]));

// Insert At:
// Given an array, index and additional value, insert the value into the array at the given index. Don't use any built-in methods. 
function insertValueAt(arr, x, y) {
    for (var i=(arr.length); i>=0; i-=1){
        if (i > x){
            arr[i] = arr[i-1];
        }
        else if (i == (x)){
            arr[i] = y;
        } 
    }
    return arr;
}
// console.log(JSON.stringify(insertValueAt([-1, 3, -5, 7, 9, 1343], 3, 10)));

// Remove At: 
// Given an array and an index, remove and return the array value at that index. Don't use any built-in methods, except for pop().
function removeAt(arr, y){
    var x = arr[y];
    for (var i=0; i<=arr.length; i+=1){
        if (i == arr.length){
            arr.pop();
        }
        else if (i >= y){
            arr[i] = arr[i+1];
        }
    }
    return x;
}
//console.log(removeAt([-1, 3, -5, 7, 9, 1343], 2));

// Swap Pairs:
// Swap positions of successive pairs of values of a given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]; for [1,2,3,4,5], return [2,1,4,3,5]
function swapPairs(arr){
    for (var i=1; i<arr.length; i+=1){
        if (i % 2 != 0){
            var x = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = x;
        }
    }
    return arr;
}
// console.log(swapPairs(["fish", "chips", "salsa", 1, 5]));

// Remove Duplicates: 
// Remove the duplicates from an alphabetically sorted array. 
function removeDuplicates(arr){
    var del = [];       // array to hold the indexes of duplicates to be deleted
    for(var i=0; i<arr.length-1; i+=1){
        if (arr[i] == arr[i+1]){
            del.push(i+1);      // loop through and add index of duplicates into array
        }
    }
    var pops = 0        // variable to track the number of pops
    for(var i=0; i<del.length; i+=1){   // go through del array
        var item = del[i] - pops;       // index to be deleted is from del array, but also subtract the number of pops
        for (var j=0; j<=arr.length; j+=1){         // loop through main array
            if (j == arr.length-1){              // a pop happens if something has been deleted (the array has been shortened)
                arr.pop();
                pops+=1
            }
            else if (j >= item){                // position j begins at "item" to be deleted and all indexes to the right are shifted one left (plus a pop)
                arr[j] = arr[j+1];
            }
        }
    }
    return arr;
}
console.log(JSON.stringify(removeDuplicates(["Breathed", "Groening", "Larson", "Schultz", "Watterson", "Watterson"])))
