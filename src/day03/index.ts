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

  const priority = (x: string) => alphabet.indexOf(x) + 1

  const res = input
    .map((sacks) =>
      Array.from(sacks[0]).reduce(
        (accum, current) => (sacks[1].includes(current) ? current : accum),
        "",
      ),
    )
    .reduce((accum, current) => {
      console.log(priority(current))

      return accum + priority(current)
    }, 0)

  return res
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
  onlyTests: false,
})
