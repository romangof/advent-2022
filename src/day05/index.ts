import run from "aocrunner"

const sampleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3   4 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

const parseInput = (rawInput: string) => rawInput.split("\n\n")

const part1 = (rawInput: string) => {
  const [inputMap, inputInstr] = parseInput(rawInput)
  const matrix = inputMap
    .split("\n")
    .map((line) =>
      Array.from(line.replace(/[\[\]]+/g, " ").replace(/\s{3}/g, ""))
        .slice(0, -1)
        .slice(1),
    )
    .reverse()
    // Turn axis and tranform to string
    .reduce((accum, current) =>
      accum.map((box, index) =>
        current[index] ? (box + current[index]).replace(" ", "") : box,
      ),
    )

  const instructions = inputInstr.split("\n").map((x) => x.split(" "))

  // console.log(matrix)
  // console.log(instructions)

  const res = instructions
    .reduce((matrix, set) => {
      const boxesAmount = Number(set[1])
      const origin = Number(set[3]) - 1
      const destination = Number(set[5]) - 1

      matrix[destination] =
        matrix[destination] +
        matrix[origin].slice(-boxesAmount).split("").reverse().join("")
      matrix[origin] = matrix[origin].slice(0, -boxesAmount)
      // console.log(matrix)

      return matrix
    }, matrix)
    .reduce(
      (accum, current) =>
        isNaN(Number(current.slice(-1))) ? accum + current.slice(-1) : accum,
      "",
    )

  // console.log(res)

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
        expected: "CMZ",
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
  trimTestInputs: false,
  onlyTests: false,
})
