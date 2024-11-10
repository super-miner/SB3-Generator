import {createBlock, createCostume, createProject, createSound, createSprite, createVariable} from './sb3Generator';

const testVariable = createVariable('TestVariable')
                        .withValue(10);

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
