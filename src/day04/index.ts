import run from "aocrunner"

const sampleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
9-71,8-8
77-78,17-77`

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).map((line) => line.split(/[-,]+/))

  return input.reduce((accumulator, current) => {
    const firstStart = Number(current[0])
    const firstEnd = Number(current[1])
    const lastStart = Number(current[2])
    const lastEnd = Number(current[3])

    if (
      (firstStart <= lastStart && firstEnd >= lastEnd) ||
      (lastStart <= firstStart && lastEnd >= firstEnd)
    ) {
      return ++accumulator
    }

    return accumulator
  }, 0)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).map((line) => line.split(/[-,]+/))

  return input.reduce((accumulator, current) => {
    const firstStart = Number(current[0])
    const firstEnd = Number(current[1])
    const lastStart = Number(current[2])
    const lastEnd = Number(current[3])

    if (
      (firstStart < lastStart && firstEnd < lastStart) ||
      (firstStart > lastEnd && firstEnd > lastEnd)
    ) {
      return accumulator
    }

    return ++accumulator
  }, 0)
}

run({
  part1: {
    tests: [
      {
        input: sampleInput,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: sampleInput,
        expected: 5,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
