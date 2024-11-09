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
    let skipNext = false;
    Object.keys(opcodeTable).forEach(key => {
        if (skipNext || key == '') {
            skipNext = false;
        }
        else {
            let block = opcodeTable[key];
            const finalY = y;

            const inputs: (string|Variable|Block|null)[] = [];
            const fields: (string|Broadcast|Variable)[] = [];

            block.inputs.forEach(input => {
                if (input.reference && input.reference != null) {
                    skipNext = true;
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
                else if (input.name.includes('COLOR')) {
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

            console.log(key + ': ' + currentBlock._uid);

            sprite.withBlock(
                currentBlock,
                0,
                finalY
            );

            y += 80;
        }
    });

    return project;
}