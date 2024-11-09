import {createBlock, createCostume, createProject, createSprite, createVariable} from './sb3Generator';

const testVariable = createVariable('TestVariable')
                        .withValue(10);

createProject('Test Project')
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
                        createBlock('control_if_else', [
                            createBlock('looks_goforwardbackwardlayers', ['10'], ['backward']),
                            createBlock('control_stop', [], ['other scripts in sprite'])
                                .withNextBlock(
                                    createBlock('looks_goforwardbackwardlayers', ['10'], ['backward'])
                                )
                        ])
                    )
            )
    )
    .build(true);
