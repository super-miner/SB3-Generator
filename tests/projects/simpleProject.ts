import {createBlock, createCostume, createProject, createSprite, createVariable} from '../../src/sb3Generator.ts';

createProject('Simple Project')
    .withSprite(
        createSprite('Stage')
            .asStage()
            .withVariable(
                createVariable('TestVariable')
                    .withValue(10)
            )
            .withCostume(
                createCostume('tests/res/TestCostume.png')
            )
            .withBlock(
                createBlock('motion_movesteps', ['10'])
            )
    )
    .build();
