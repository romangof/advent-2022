import run from "aocrunner"

const sampleInput = `A Y
B X
C Z`

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  enum Shapes {
    A = 1, // Rock
    X = 1,
    B = 2, // Paper
    Y = 2,
    C = 3, // Scissors
    Z = 3,
  }

  type Shape = keyof typeof Shapes

  const input = parseInput(rawInput).map((round) =>
    round.split(" "),
  ) as Shape[][]

  return input.reduce((score, round) => {
    const myShape = Shapes[round[1]]
    const opponent = Shapes[round[0]]
    let result = 3

    if (myShape !== opponent) {
      result = myShape === opponent + 1 || myShape + 2 === opponent ? 6 : 0
    }

    return score + myShape + result
  }, 0)
}

const part2 = (rawInput: string) => {
  enum Shapes {
    A = 1, // Rock
    B = 2, // Paper
    C = 3, // Scissors
  }
  const cheatSheet = {
    lose: "X",
    draw: "Y",
    win: "Z",
  }

  type Shape = keyof typeof Shapes

  const input = parseInput(rawInput).map((round) =>
    round.split(" "),
  ) as Shape[][]

  const match = input.reduce((totalSum, round) => {
    const opponent = round[0]
    const cheatCode = round[1]

    let result = 3 + Shapes[opponent]

    if (cheatCode !== cheatSheet.draw) {
      result =
        cheatCode === cheatSheet.lose
          ? Shapes[opponent] - 1 || 3
          : 6 + (Shapes[opponent] > 2 ? 1 : Shapes[opponent] + 1)
    }

    return totalSum + result
  }, 0)

  return match
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
        expected: 12,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
