import run from "aocrunner"

const sampleInput = [
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
  "bvwbjplbgvbhsrlpgdmjqwftvncz",
  "nppdvjthqldpwncqszvftbrmjlhg",
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
  "bvwbjplbgvbhsrlpgdmjqwftvncz",
  "nppdvjthqldpwncqszvftbrmjlhg",
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
]

const parseInput = (rawInput: string) => rawInput //.split("")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const array = Array.from(input)

  for (let index = 4; index < array.length; index++) {
    const last4 = input.substring(index - 4, index)
    const hasDuplicates = new Set(last4).size < 4

    if (!hasDuplicates) {
      return index
    }
  }
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const array = Array.from(input)

  for (let index = 14; index < array.length; index++) {
    const last14 = input.substring(index - 14, index)
    const hasDuplicates = new Set(last14).size < 14

    if (!hasDuplicates) {
      return index
    }
  }
}

run({
  part1: {
    tests: [
      {
        input: sampleInput[0],
        expected: 7,
      },
      {
        input: sampleInput[1],
        expected: 5,
      },
      {
        input: sampleInput[2],
        expected: 6,
      },
      {
        input: sampleInput[3],
        expected: 10,
      },
      {
        input: sampleInput[4],
        expected: 11,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: sampleInput[5],
        expected: 19,
      },
      {
        input: sampleInput[6],
        expected: 23,
      },
      {
        input: sampleInput[7],
        expected: 23,
      },
      {
        input: sampleInput[8],
        expected: 29,
      },
      {
        input: sampleInput[9],
        expected: 26,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
