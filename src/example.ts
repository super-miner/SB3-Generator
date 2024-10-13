import {createBlock, createCostume, createProject, createSprite, createVariable} from './sb3Generator';

const testVariable = createVariable('TestVariable').withValue(10);

createProject('TestProject')
    .withSprite(
        createSprite('Stage')
            .asStage()
            .withCostume(
                createCostume('TestCostume.png')
            )
    )
    .withSprite(
        createSprite('Regular Sprite')
            .withVariable(
                testVariable
            )
            .withCostume(
                createCostume('TestCostume.png')
            )
            .withBlock(
                createBlock('event_whenflagclicked', [])
                    .withChildBlock(
                        createBlock('motion_movesteps', [testVariable])
                    )
            )
    )
    .build();
