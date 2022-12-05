import run from "aocrunner"

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).map((str) => [
    str.substring(0, str.length / 2),
    str.substring(str.length / 2),
  ])

  const alphabet = Array.from(Array(26))
    .map((_, i) => i + 97)
    .map((char) => String.fromCharCode(char))
    .concat(
      Array.from(Array(26))
        .map((_, i) => i + 65)
        .map((char) => String.fromCharCode(char)),
    )

  const priority = (x: string) => alphabet.indexOf(x)

  // console.log(alphabet.indexOf("Z") + 1)

  // console.log(Array.from(input[0][0]))

  const res = input.map((sacks) => {
    // console.log(1111, sacks, Array.from(sacks[1]))

    const repeated = Array.from(sacks[0]).reduce(
      (accum, current) => (sacks[1].includes(current) ? current : accum),
      "",
    )

    console.log(3333, repeated)

    return repeated
  })

  console.log(2222, res)

  // console.log(input)

  return
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
}

run({
  part1: {
    tests: [
      {
        input: sampleInput,
        expected: 157,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: sampleInput,
        expected: "",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: true,
})
