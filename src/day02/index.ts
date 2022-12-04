import run from "aocrunner"

const sampleInput = `A Y
B X
C Z`

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  enum Shapes {
    A = 1, // piedra
    X = 1,
    B = 2, // papel
    Y = 2,
    C = 3, // tijera
    Z = 3,
  }

  const Shapex = [, "Piedra", "papel", "tijera"]

  type Shape = keyof typeof Shapes

  const input = parseInput(rawInput).map((round) =>
    round.split(" "),
  ) as Shape[][]

  const match = input.reduce((score, round) => {
    let result = 3 // here

    const myShape = Shapes[round[1]]
    const opponent = Shapes[round[0]]

    if (myShape !== opponent) {
      result = myShape === opponent + 1 || myShape + 2 === opponent ? 6 : 0
    }

    console.log(
      `yo: ${Shapex[myShape]} vs ${Shapex[opponent]}, resultado: ${result} + ${
        Shapes[round[1]]
      }`,
    )

    return score + myShape + result
  }, 0)

  return match
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
        expected: 15,
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
