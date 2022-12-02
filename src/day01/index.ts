import run from "aocrunner"

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

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  const res = parseInput(rawInput).reduce((accumulator, current, index) => {
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

const part2 = (rawInput: string) => {
  const res = parseInput(rawInput).reduce((accumulator, current, index) => {
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
  

  return
}

run({
  part1: {
    tests: [
      {
        input: sampleInput,
        expected: 24000,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: sampleInput,
        expected: 45000,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
