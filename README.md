# SB3 Generator
SB3 Generator is a node library that generates `.sb3` ([Scratch 3](https://scratch.mit.edu)) project files.

## Installation:
```powershell
npm i sb3-generator
```

## Example:
Here is an example of how you can use this library to generate a simple project.
```js
import {createCostume, createProject, createSprite, createVariable} from './sb3Generator.ts';

createProject('TestProject')
    .withSprite(
        createSprite('Stage')
            .asStage()
            .withVariable(
                createVariable('TestVariable')
                    .withValue(10)
            )
            .withCostume(
                createCostume('TestCostume.png')
            )
    )
    .build();
```

## Docs:
You can find the documentation in the [DOCS.md](DOCS.md) file.
