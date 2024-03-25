#!/usr/bin/env node
const { execSync } = require("child_process")

const runCommand = command => {
  try {
    execSync(command, { stdio: "inherit" })
  } catch (error) {
    console.error(`Failed to execute ${command}`, error)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/natnaelengeda/nodets-express-starter ${repoName}`
const installDepsCommand = `cd ${repoName} && npm install`
const removeGitCommand = `cd ${repoName} && rd /s /q .git`
const removebinCommand = `cd ${repoName} && rd /s /q bin`

console.log(`Cloning the repository with name ${repoName}`)
const checkedOut = runCommand(gitCheckoutCommand)

if (!checkedOut) {
  process.exit(1)
}

console.log(`Removing .git directory for ${repoName}`)
const removeGit = runCommand(removeGitCommand)

if (!removeGit) {
  process.exit(1)
}

console.log(`Removing bin directory for ${repoName}`)
const removeBin = runCommand(removebinCommand)

if (!removeBin) {
  process.exit(1)
}

console.log(`Installing dependencies for ${repoName}`)
const installedDeps = runCommand(installDepsCommand)

if (!installedDeps) {
  process.exit(1)
}

console.log(
  "Congratulations! You are ready. Follow the following commands to start"
)
console.log(`cd ${repoName} && npm start`)
