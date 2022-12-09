import run from "aocrunner"

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
dir y
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

interface Folder {
  name: string
  size?: number
  files?: number[]
  subFolders?: Folder[]
}

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.split(" "))

const navigateAndAdd = (
  sysInfo: Folder,
  stackPos: string[],
  toAdd: Folder | number,
) => {
  let currentDir = sysInfo

  for (const currentFolder of stackPos) {
    currentDir =
      currentDir.subFolders?.find((folder) => folder.name === currentFolder) ||
      currentDir
  }

  if (typeof toAdd === "number") {
    return currentDir.files
      ? currentDir.files?.push(toAdd)
      : (currentDir.files = [toAdd])
  }

  currentDir.subFolders
    ? currentDir.subFolders?.push(toAdd)
    : (currentDir.subFolders = [toAdd])
}

const calcFolderSize = (folder: Folder): number => {
  folder.size = folder.files?.reduce((a, b) => a + b, 0) || 0

  if (folder.subFolders?.length) {
    return (folder.size += folder.subFolders.reduce(
      (accum, current) => accum + calcFolderSize(current),
      0,
    ))
  }

  return folder.size
}

const navigateAndSumFiles = (folder: Folder, accumulator: number[]) => {
  folder.size && folder.size <= 100000 && accumulator.push(folder.size)

  if (folder.subFolders?.length) {
    folder.subFolders.map((subFolder) =>
      navigateAndSumFiles(subFolder, accumulator),
    )
  }
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const stackPos: string[] = []
  const sysInfo: Folder = { name: "/" }
  const sum: number[] = []

  input.map((line) => {
    if (line[0] === "$" && line[2]) {
      line[2] === ".." ? stackPos.pop() : stackPos.push(line[2])
    } else if (line[0] === "dir") {
      navigateAndAdd(sysInfo, stackPos, { name: line[1] })
    } else if (Number(line[0])) {
      navigateAndAdd(sysInfo, stackPos, Number(line[0]))
    }
  })

  calcFolderSize(sysInfo)
  navigateAndSumFiles(sysInfo, sum)
  console.log("end Sys", JSON.stringify(sysInfo, undefined, 2))

  console.log(sum)

  return sum.reduce((a, b) => a + b)
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
  onlyTests: false,
})
