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

const parseInput = (rawInput: string) => rawInput.split("\n\n")

const part1 = (rawInput: string) => {
  const res = parseInput(rawInput)
  .map(line => line.split('\n'))
  .map(sum => sum.reduce((accum, current) => Number(accum)+Number(current), 0))

  return Math.max(...res)
}

const part2 = (rawInput: string) => {

  const res = parseInput(rawInput)
  .map(line => line.split('\n'))
  .map(sum => sum.reduce((accum, current) => Number(accum)+Number(current), 0))
  .sort().reverse()

  return res[0] + res[1] + res[2]
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
