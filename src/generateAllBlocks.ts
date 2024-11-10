/**
 * @module createAllBlocksProject
 */

import { Block } from "./block";
import { Broadcast } from "./broadcast";
import { InputFieldType } from "./inputFieldType";
import { opcodeTable } from "./opcodeTable";
import { createBlock, createBroadcast, createCostume, createList, createProject, createSprite, createVariable } from "./sb3Generator";
import { Variable } from "./variable";

/**
 * Creates a project containing all of the blocks in one sprite.
 *
 * @export
 * @param {string} outputDirectory
 */
export function createAllBlocksProject(outputDirectory: string) {
    let project = createProject('All Blocks Project', outputDirectory)
                    .withSprite(
                        createSprite('Stage')
                            .asStage()
                            .withCostume(
                                createCostume('TestCostume.png')
                            )
                        );
    
    let sprite = createSprite('All Blocks Sprite')
                    .withCostume(
                        createCostume('TestCostume.png')
                    );

    const conditionBlock = createBlock('operator_equals', ['', '']);
    const substackBlock = createBlock('motion_movesteps', ['']);
    const broadcast = createBroadcast('Test Broadcast');
    const variable = createVariable('Test Variable');
    const list = createList('Test List');

    project.withSprite(sprite);
    sprite.withVariable(variable);
    sprite.withList(list);
    
    let y = 0;
    let referencedBlocks: string[] = [];
    Object.keys(opcodeTable).forEach(key => {
        if (!(key == '' || key.includes('procedures') || key.includes('argument') || referencedBlocks.includes(key))) {
            let block = opcodeTable[key];
            const finalY = y;

            const inputs: (string|Variable|Block|null)[] = [];
            const fields: (string|Broadcast|Variable)[] = [];

            block.inputs.forEach(input => {
                if (input.reference && input.reference != null) {
                    referencedBlocks.push(input.reference);
                }

                if (input.inputFieldType == InputFieldType.BLOCK) {
                    if (input.name.includes('SUBSTACK')) {
                        inputs.push(substackBlock);
                        y += 80;
                    }
                    else {
                        inputs.push(conditionBlock);
                    }
                }
                else if (input.inputFieldType == InputFieldType.COLOR) {
                    inputs.push('#000000');
                }
                else {
                    inputs.push(input.validValues && input.validValues != null ? input.validValues[0] : '');
                }
            });

            block.fields.forEach(field => {
                if (field.name.includes('BROADCAST')) {
                    fields.push(broadcast);
                }
                else if (field.name.includes('VARIABLE')) {
                    fields.push(variable);
                }
                else if (field.name.includes('LIST')) {
                    fields.push(list);
                }
                else {
                    fields.push(field.validValues && field.validValues != null ? field.validValues[0] : '');
                }
            });

            let currentBlock = createBlock(key, inputs, fields);

            sprite.withBlock(
                currentBlock,
                0,
                finalY
            );

            y += 80;
        }
    });

    const customBlockPrototype = createBlock('procedures_prototype', [
        'true',
        'Test Function',
        createBlock('argument_reporter_string_number', [], ['String or Number']),
        createBlock('argument_reporter_boolean', [], ['Boolean']),
        'Label'
    ]);

    sprite.withBlock(createBlock('procedures_definition', [customBlockPrototype]), 0, y);

    y += 80;

    sprite.withBlock(
        createBlock('procedures_call', [customBlockPrototype, '', conditionBlock]),
        0,
        y
    );

    return project;
}