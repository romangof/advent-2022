import run from "aocrunner"
import { type } from "os"

const sampleInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.split(" "))

const navigateAndAddDir = (
  sysInfo: Record<string, {}>,
  stackPos: string[],
  newDir: string,
) => {
  // if (!stackPos.length) return
  let currentDir = sysInfo

  for (let prop of stackPos) {
    currentDir = currentDir && currentDir[prop]
  }

  !currentDir[newDir] && (currentDir[newDir] = { files: [] })
}

const navigateAndAddFile = (
  sysInfo: Record<string, {}>,
  stackPos: string[],
  fileSize: number,
) => {
  let currentDir = sysInfo

  for (let prop of stackPos) {
    currentDir = currentDir && (currentDir[prop] as Folder)
  }

  Array.isArray(currentDir.files) && currentDir.files.push(fileSize)
}

const navigateAndSumFiles = (
  sysInfo: Folder,
  totalSum: number[] = [],
): number => {
  // totalSum.length > 0 &&
  //   (totalSum = [...totalSum, totalSum.reduce((a, b) => a + b)])
  // console.log(totalSum)

  let index = 0
  for (let folder in sysInfo) {
    if (!sysInfo.hasOwnProperty(folder)) continue

    console.log(totalSum, folder)
    if (Array.isArray(sysInfo.files)) {
      sysInfo.files = sysInfo.files.reduce((a, b) => a + b)
      totalSum.push(sysInfo.files)
      index++
      console.log("xxx", index, sysInfo.files)
    } else {
      totalSum[index] <= 100000 &&
        (totalSum[index] += navigateAndSumFiles(
          sysInfo[folder] as Folder,
          totalSum,
        ))

      index--
      navigateAndSumFiles(sysInfo[folder] as Folder, totalSum)
      // totalSum[totalSum.length-1] += sum
      console.log("---", folder, index, sysInfo.files)
    }

    // index++
  }

  // console.log(totalSum)

  return +sysInfo.files
}

type Folder = { [property: string]: number | number[] | Folder }

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const maxDirSize = 100000
  const stackPos: string[] = []
  const sysInfo: Folder = { "/": { files: [] } }

  input.map((line) => {
    if (line[0] === "$" && line[2]) {
      line[2] === ".." ? stackPos.pop() : stackPos.push(line[2])
    } else if (line[0] === "dir") {
      navigateAndAddDir(sysInfo, stackPos, line[1])
    } else if (Number(line[0])) {
      navigateAndAddFile(sysInfo, stackPos, Number(line[0]))
    }
  })

  const sum: number[] = []
  navigateAndSumFiles(sysInfo, sum)

  console.log(511011, sum)

  console.log("end Sys", JSON.stringify(sysInfo, undefined, 2))

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
        expected: 95437,
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
