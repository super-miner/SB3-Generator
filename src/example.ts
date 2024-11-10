import {createBlock, createCostume, createProject, createSound, createSprite, createVariable} from './sb3Generator';

createProject('Test Project')
    .withSprite(
        createSprite('Stage')
            .asStage()
            .withCostume(
                createCostume('TestCostume.png')
            )
            .withBlock(
                createBlock('procedures_definition', [
                    createBlock('procedures_prototype', [
                        'true',
                        'Test Function',
                        createBlock('argument_reporter_string_number', [], ['String or Number']),
                        createBlock('argument_reporter_boolean', [], ['Boolean']),
                        'Label'
                    ])
                ])
            )
    )
    .build(true);
