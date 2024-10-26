export type Input = {
    name: string;
    reference: string|null;
}

export type Field = {
    name: string;
}

export type FieldData = {
    inputs: Input[];
    fields: Field[];
}

export const opcodeTable: {[id: string]: FieldData} = {
    'motion_movesteps': {inputs: [{name: 'STEPS', reference: null}], fields: []},
    'motion_turnright': {inputs: [{name: 'DEGREES', reference: null}], fields: []},
    'motion_turnleft': {inputs: [{name: 'DEGREES', reference: null}], fields: []},
    'motion_goto': {inputs: [{name: 'TO', reference: 'motion_goto_menu'}], fields: []},
    'motion_goto_menu': {inputs: [], fields: [{name: 'TO'}]},
    'motion_gotoxy': {inputs: [{name: 'X', reference: null}, {name: 'Y', reference: null}], fields: []},
    'motion_glideto': {inputs: [{name: 'SECS', reference: null}, {name: 'TO', reference: 'motion_glideto_menu'}], fields: []},
    'motion_glideto_menu': {inputs: [], fields: [{name: 'TO'}]},
    'event_whenflagclicked': {inputs: [], fields: []}
};