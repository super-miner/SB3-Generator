# Contributing:

Thank you for taking the time to make a contribution to this project. Your help and/or suggestions are much appreciated. This page will go over the process, rules, and guidelines for making issues and creating pull requests.

For a general overview of the project you can read the [README](README.md). After that you can get started on contributing by working on some issues marked with https://github.com/super-miner/SB3-Generator/labels/good%20first%20issue.

## Issues:

If you have a suggestion or would like to report a bug you can create an [Issue](https://github.com/super-miner/SB3-Generator/issues).

## Pull Requests:

If you would like to solve an [Issue](https://github.com/super-miner/SB3-Generator/issues) you can do so by making a Pull Request.

### Creating a Pull Request:
1. Make a fork of the repository
2. Create a branch on your forked version of the repository named `<issue number>_<issue name>` *If no Issue exists for the problem you would like to solve, please create one*.
3. Solve the issue on the branch that you created
4. Create a Pull Request on this repository

## Running the Project:
Once you have your fork of the project ready you can start by running some of the provided test code.
```powershell
npx tsx tests/project/allBlocks.ts
```
Running this from within the project folder should generate a `.sb3` file in `<ProjectFolder>/output`. To verify that the process worked you can try loading the project in [Scratch](https://scratch.mit.edu).

## Running Unit Tests:
Before you create a pull request you should make sure that all of the unit tests still pass, you can do this by running:
```powershell
npx jest --detectOpenHandles
```

## Regenerating the Documentation:
Another thing you should do before a pull request is regenerate the documentation if you have changed, added, or removed any of it. This can be done using the following command:
```powershell
npx jsdoc2md --configure jsdoc2md.json "src/**/*.ts" > DOCS.md
```
