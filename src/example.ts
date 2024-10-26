import {createBlock, createCostume, createProject, createSprite, createVariable} from './sb3Generator';

const testVariable = createVariable('TestVariable')
                        .withValue(10);

createProject('TestProject')
    .withSprite(
        createSprite('Stage')
            .asStage()
            .withCostume(
                createCostume('TestCostume.png')
            )
            .withVariable(
                createVariable('IsThisGlobal?')
                    .withValue('Global?')
            )
    )
    .withSprite(
        createSprite('Test Sprite')
            .withVariable(
                testVariable
            )
            .withCostume(
                createCostume('TestCostume.png')
            )
            .withBlock(
                createBlock('event_whenflagclicked', [])
                    .withNextBlock(
                        createBlock('motion_goto', ['_random_'])
                    )
                    .withNextBlock(
                        createBlock('motion_goto', [testVariable])
                    )
            )
    )
    .build(true);
