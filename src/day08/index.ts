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

  let visibleTrees = input.length * 4 - 4

  for (let yIndex = 1; yIndex < input.length - 1; yIndex++) {
    const treeLine = input[yIndex]

    for (let xIndex = 1; xIndex < treeLine.length - 1; xIndex++) {
      const tree = treeLine[xIndex]
      const subArrLeft = treeLine.slice(0, xIndex)
      const subArrRight = treeLine.slice(xIndex + 1)

      if (tree > Math.max(...subArrLeft) || tree > Math.max(...subArrRight)) {
        visibleTrees++
        continue
      }

      const subArrTop = []
      const subArrBottom = []

      for (let yyIndex = 0; yyIndex < yIndex; yyIndex++) {
        subArrTop.push(input[yyIndex][xIndex])
      }
      for (let yyIndex = yIndex + 1; yyIndex < input.length; yyIndex++) {
        subArrBottom.push(input[yyIndex][xIndex])
      }

      if (tree > Math.max(...subArrTop) || tree > Math.max(...subArrBottom)) {
        visibleTrees++
      }
    }
  }

  return visibleTrees
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).map((treeline) =>
    treeline.split("").map((tree) => Number(tree)),
  )

  let highestScore = 0

  for (let yIndex = 1; yIndex < input.length - 1; yIndex++) {
    const treeLine = input[yIndex]

    for (let xIndex = 1; xIndex < treeLine.length - 1; xIndex++) {
      const tree = treeLine[xIndex]
      const score: [number, number, number, number] = [0, 0, 0, 0]

      const subArrays: Record<string, number[]> = {
        left: treeLine.slice(0, xIndex),
        top: [],
        right: treeLine.slice(xIndex + 1),
        bottom: [],
      }

      for (let yyIndex = 0; yyIndex < yIndex; yyIndex++) {
        subArrays.top.push(input[yyIndex][xIndex])
      }
      for (let yyIndex = yIndex + 1; yyIndex < input.length; yyIndex++) {
        subArrays.bottom.push(input[yyIndex][xIndex])
      }

      subArrays.left.reverse().find((x) => {
        score[0]++
        return tree <= x
      })

      subArrays.top.reverse().find((x) => {
        score[1]++
        return tree <= x
      })

      subArrays.right.find((x) => {
        score[2]++
        return tree <= x
      })

      subArrays.bottom.find((x) => {
        score[3]++
        return tree <= x
      })

      const currentTreeScore = score.reduce((a, b) => a * b)

      currentTreeScore > highestScore && (highestScore = currentTreeScore)
    }
  }

  return highestScore
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
        expected: 8,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
