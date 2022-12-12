import run from "aocrunner"

const sampleInput = `30373
25512
65332
33549
35390`

const parseInput = (rawInput: string) => rawInput.split("\n")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).map((treeline) =>
    treeline.split("").map((tree) => Number(tree)),
  )

  const heigth = input.length
  const width = input[0].length

  let visibleTrees = heigth * 2 - 4

  console.log(input)

  for (let yIndex = 1; yIndex < input.length - 1; yIndex++) {
    const treeLine = input[yIndex]
    let tallest = treeLine[0]

    for (let xIndex = 1; xIndex < treeLine.length - 1; xIndex++) {
      const tree = treeLine[xIndex]

      if (tree > tallest) {
        tallest = tree
        visibleTrees++
        continue
      }

      console.log(tree, input[yIndex - 1][xIndex])

      if (tree < treeLine[xIndex - 1] || tree < treeLine[xIndex - 1]) {
      }

      // console.log("***", tree)
    }
  }

  input.forEach((treeLine) => {})

  // console.log(visibleTrees)

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
        expected: 21,
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
