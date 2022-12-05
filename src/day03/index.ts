import run from "aocrunner"

const sampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`

const parseInput = (rawInput: string) => rawInput.split("\n")

const alphabet = Array.from(Array(26))
  .map((_, i) => i + 97)
  .map((char) => String.fromCharCode(char))
  .concat(
    Array.from(Array(26))
      .map((_, i) => i + 65)
      .map((char) => String.fromCharCode(char)),
  )

const priority = (x: string) => alphabet.indexOf(x) + 1

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).map((str) => [
    str.substring(0, str.length / 2),
    str.substring(str.length / 2),
  ])

  return input
    .map((sacks) =>
      Array.from(sacks[0]).reduce(
        (accum, current) => (sacks[1].includes(current) ? current : accum),
        "",
      ),
    )
    .reduce((accum, current) => accum + priority(current), 0)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).reduce(
    (accum, current, index, array) =>
      (index + 1) % 3 === 0
        ? [...accum, [array[index - 2], array[index - 1], current]]
        : accum,
    [] as string[][],
  )

  return input
    .map((trio) =>
      priority(
        Array.from(trio[0]).reduce(
          (accum, current) =>
            trio[1].includes(current) && trio[2].includes(current)
              ? current
              : accum,
          "",
        ),
      ),
    )
    .reduce((a, b) => a + b)
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
        expected: 70,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
