// Test data
const strArray1 = ["aaa", "bbb", "ccc", "ddd"];
const numArray = [45, 7, 6, 32, 5, 3, 6, 3, 2, 4, 6, 4, 2];
const strArray2 = ["hello", "world", "I", "am", "a", "JS", "developer"];

// Functions for onclick event
function test1() {
    let resArr = ["lll", "mmm"];
    arrayCopy(strArray1, 1, resArr, 0, 3);
    console.log(resArr); // expected ["bbb","ccc","ddd","lll","mmm"]
    resArr = ["lll", "mmm"];
    arrayCopy(strArray1, 3, resArr, 1, 1);
    console.log(resArr); // expected ["lll","ddd","mmm"]
}

function test2() {
    console.log(count(strArray1, "ddd")); // expected 1
    console.log(count(numArray, 6)); // expected 3
    console.log(count(numArray, -10)); // expected 0
}

function test3() {
    displayOccurrences(strArray1);
    displayOccurrences(numArray);
}

function test4() {
    const res = ulSurround(strArray1);
    console.log(res);
}

function test5() {
    const res = lengthSort(strArray2);
    console.log(res); // expected ["I","a","am","JS","hello","world","developer"]
}

// Function for implementation

function arrayCopy(src, srcPos, dst, dstPos, length) {
    let push = src.slice(srcPos, srcPos[length])
    return dst.splice(dstPos, 0, ...push)
}

function count(array, str) {
    let counter = 0
    array.reduce(function (val, nextVal) {
        if (nextVal === str) {
            counter++;
        }
    })
    return counter
}

function displayOccurrences(array) {
    //
    let counter = array.reduce(function (storage, value) {
        storage[value] = (storage[value] || 0) + 1
        return storage
    }, {})
    console.log(counter)
}

function ulSurround(strings) {
    let array = ["<ul>", "</ul>"]
        let innerValues = strings.map(function (value) {
            return '<li>' + value + '</li>'
        })
        array.splice(1, 0, ...innerValues)
    return array
}

function lengthSort(array) {
    return array.sort(function (a, b) {
        if (a.length > b.length) {
            return 1
        }
        if (a.length < b.length) {
            return -1
        }
        return 0
    })
}
