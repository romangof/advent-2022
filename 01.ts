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

let separatedLines: string[] = sampleInput.split(/\r?\n|\r|\n/g);

const maxOfSums = (str: string[]) => {
    console.log('separated: ', separatedLines);
    
    const res = separatedLines.reduce((accumulator, current, index) => {
        const localSum = Number(current) + accumulator[1]
        const maxTotal = (localSum > accumulator[0]) ? localSum : accumulator[0]

        if (!current) {
            console.log(index, accumulator,  [maxTotal, 0],  `***${current}Empty***`);

            return [maxTotal, 0]
        }

        console.log(index, accumulator, [maxTotal, localSum], `***${current}***`);
        
        return [maxTotal, localSum]

    }, [0, 0])

    console.log('\nreduced: ', res, "res: ", res[0]);
}

console.log("------", maxOfSums(separatedLines));
 
