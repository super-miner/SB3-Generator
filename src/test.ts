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
