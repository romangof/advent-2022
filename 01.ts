import * as fs from 'fs';

const textFile = fs.readFileSync('./input', 'utf-8');

// console.log(text);


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

const separatedLines = (str: string) => str.split(/\r?\n|\r|\n/g);

const maxOfSums = (str: string[]) => {    
    const res: number[] = str.reduce((accumulator, current, index) => {
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

// console.log("------", maxOfSums(separatedLines)[0]);
console.log("------", maxOfSums(separatedLines(textFile)));
 
