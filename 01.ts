import * as fs from 'fs';

const textFile = fs.readFileSync('./01.input', 'utf-8');

const sampleInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`


console.log(sampleInput.split("\n\n"));


const separatedLines = (str: string) => str.split(/\r?\n|\r|\n/g);
const inputArray = separatedLines(sampleInput);

const maxOfSums = (array: string[]) => {    
    const res: number[] = array.reduce((accumulator, current, index) => {
        const localSum = Number(current) + accumulator[1]
        const maxTotal = (localSum > accumulator[0]) ? localSum : accumulator[0]

        if (!current) {
            // console.log(index, accumulator,  [maxTotal, 0],  `***${current}Empty***`);
            return [maxTotal, 0]
        }

        // console.log(index, accumulator, [maxTotal, localSum], `***${current}***`);
        return [maxTotal, localSum]
    }, [0, 0])

    return res[0]
}

const topThree = (array: string[]) => {
    const res = array.reduce((accumulator, current, index) => {
        const localMax = Number(current) + accumulator?.localMax
        const maxes = {
            max1: (localMax > accumulator.max1) ? localMax : accumulator.max1,
            max2: (localMax > accumulator.max2 && localMax < accumulator.max2) ? localMax : accumulator.max2,
            max3: (localMax > accumulator.max3 && localMax < accumulator.max3) ? localMax : accumulator.max3,
            localMax
        }

        if (!current) {
            // console.log(index, accumulator,  [maxTotal, 0],  `***${current}Empty***`);
            return {...maxes, localMax: 0}
        }

        // console.log(index, accumulator, [maxTotal, localSum], `***${current}***`);
        return {...maxes, localMax}
    }, {max1: 0, max2: 0, max3: 0, localMax: 0})

    console.log(res);
    

    return res
}




// console.log("------", maxOfSums(separatedLines)[0]);
// console.log("Max: ", maxOfSums(inputArray));
console.log("Top 3: ", topThree(inputArray));
 
