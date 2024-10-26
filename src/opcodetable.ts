export type Input = {
    name: string;
    reference: string|null;
    validValues: string[]|null;
}

export type Field = {
    name: string;
    validValues: string[]|null;
}

export type FieldData = {
    inputs: Input[];
    fields: Field[];
}

export const opcodeTable: {[id: string]: FieldData} = {
    'motion_movesteps': {
        inputs: [
            {name: 'STEPS', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_turnright': {
        inputs: [
            {name: 'DEGREES', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_turnleft': {
        inputs: [
            {name: 'DEGREES', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_goto': {
        inputs: [
            {name: 'TO', reference: 'motion_goto_menu', validValues: ['_random_', '_mouse_', '']}
        ], 
        fields: []
    },
    'motion_goto_menu': {
        inputs: [], 
        fields: [
            {name: 'TO', validValues: ['_random_', '_mouse_', '']}
        ]
    },
    'motion_gotoxy': {
        inputs: [
            {name: 'X', reference: null, validValues: null}, 
            {name: 'Y', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_glideto': {
        inputs: [
            {name: 'SECS', reference: null, validValues: null}, 
            {name: 'TO', reference: 'motion_glideto_menu', validValues: ['_random_', '_mouse_', '']}
        ], 
        fields: []
    },
    'motion_glideto_menu': {
        inputs: [], 
        fields: [
            {name: 'TO', validValues: ['_random_', '_mouse_', '']}
        ]
    },
    'motion_glidesecstoxy': {
        inputs: [
            {name: 'SECS', reference: null, validValues: null}, 
            {name: 'X', reference: null, validValues: null}, 
            {name: 'Y', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_pointindirection': {
        inputs: [
            {name: 'DIRECTION', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_pointtowards': {
        inputs: [
            {name: 'TOWARDS', reference: 'motion_pointtowards_menu', validValues: ['_mouse_', '']}
        ], 
        fields: []
    },
    'motion_pointtowards_menu': {
        inputs: [], 
        fields: [
            {name: 'TOWARDS', validValues: ['_mouse_', '']}
        ]
    },
    'motion_changexby': {
        inputs: [
            {name: 'DX', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_setx': {
        inputs: [
            {name: 'X', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_changeyby': {
        inputs: [
            {name: 'DY', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_sety': {
        inputs: [
            {name: 'Y', reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_ifonedgebounce': {
        inputs: [], 
        fields: []
    },
    'motion_setrotationstyle': {
        inputs: [], 
        fields: [
            {name: 'STYLE', validValues: ['left-right', 'don\'t rotate', 'all around']}
        ]
    },
    'motion_xposition': {
        inputs: [],
        fields: []
    },
    'motion_yposition': {
        inputs: [],
        fields: []
    },
    'motion_direction': {
        inputs: [],
        fields: []
    },
    'event_whenflagclicked': {
        inputs: [], 
        fields: []
    }
};