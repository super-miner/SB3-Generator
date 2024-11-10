import {createBlock, createCostume, createProject, createSound, createSprite, createVariable} from './sb3Generator';

createProject('Test Project')
    .withSprite(
        createSprite('Stage')
            .asStage()
            .withCostume(
                createCostume('TestCostume.png')
            )
            .withSound(
                createSound('TestSound.wav')
            )
    )
    .build(true);
