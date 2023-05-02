//  Created by Alexander Matheson
//  Created on 2023-May-02
//  Version 1.0
//  Copyright (c) 2023 Alexander Matheson. All rights reserved.
//
//  This program finds the lowest num of a line.
const fs = require('fs');

// Function to determine the lowest num of an array.
function findMin(line, index) {
    // Base case: The end of the array is reached, return the last element.
    if (index == line.length - 1) {
        return parseInt(line[index]);
    }

    // Find the lowest element in the rest of the array
    let lowest = parseInt(findMin(line, index + 1));

    // Check if the element is lower than the current lowest element.
    if (parseInt(line[index]) < lowest) {
        return parseInt(line[index]);
    } else {
        return lowest;
    }
}

// Read the input file and create an array of each line.
const input = fs.readFileSync('input.txt', 'utf8');
const fileArr = input.split(/\r?\n/);

// Loop to send each line to function
let minStr = "";
for (const position of fileArr) {
    let temp = findMin(position.split(" "), 0);
    if (isNaN(temp)) {
        minStr = minStr + "Cannot convert line to int.\n";
    } else {
        minStr = minStr + temp + "\n";
    }
}

// Write to the output file
fs.writeFileSync('output.txt', minStr);

// Write to the console
console.log(minStr);
