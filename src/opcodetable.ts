import { BitMaskType } from "./bitMaskType";

export type Input = {
    name: string;
    bitMaskType: BitMaskType;
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
            {name: 'STEPS', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_turnright': {
        inputs: [
            {name: 'DEGREES', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_turnleft': {
        inputs: [
            {name: 'DEGREES', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_goto': {
        inputs: [
            {name: 'TO', bitMaskType: BitMaskType.ANY, reference: 'motion_goto_menu', validValues: ['_random_', '_mouse_', '']}
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
            {name: 'X', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}, 
            {name: 'Y', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_glideto': {
        inputs: [
            {name: 'SECS', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}, 
            {name: 'TO', bitMaskType: BitMaskType.ANY, reference: 'motion_glideto_menu', validValues: ['_random_', '_mouse_', '']}
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
            {name: 'SECS', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}, 
            {name: 'X', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}, 
            {name: 'Y', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_pointindirection': {
        inputs: [
            {name: 'DIRECTION', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_pointtowards': {
        inputs: [
            {name: 'TOWARDS', bitMaskType: BitMaskType.ANY, reference: 'motion_pointtowards_menu', validValues: ['_mouse_', '']}
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
            {name: 'DX', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_setx': {
        inputs: [
            {name: 'X', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_changeyby': {
        inputs: [
            {name: 'DY', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ], 
        fields: []
    },
    'motion_sety': {
        inputs: [
            {name: 'Y', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
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
    'looks_sayforsecs': {
        inputs: [
            {name: 'MESSAGE', bitMaskType: BitMaskType.STRING, reference: null, validValues: null},
            {name: 'SECS', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: [],
    },
    'looks_say': {
        inputs: [
            {name: 'MESSAGE', bitMaskType: BitMaskType.STRING, reference: null, validValues: null}
        ],
        fields: []
    },
    'looks_thinkforsecs': {
        inputs: [
            {name: 'MESSAGE', bitMaskType: BitMaskType.STRING, reference: null, validValues: null},
            {name: 'SECS', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: []
    },
    'looks_think': {
        inputs: [
            {name: 'MESSAGE', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: []
    },
    'looks_switchcostumeto': {
        inputs: [
            {name: 'COSTUME', bitMaskType: BitMaskType.ANY, reference: 'looks_costume', validValues: null}
        ],
        fields: []
    },
    'looks_costume': {
        inputs: [],
        fields: [
            {name: 'COSTUME', validValues: null}
        ]
    },
    'looks_nextcostume': {
        inputs: [],
        fields: []
    },
    'looks_switchbackdropto': {
        inputs: [
            {name: 'BACKDROP', bitMaskType: BitMaskType.ANY, reference: 'looks_backdrops', validValues: null}
        ],
        fields: []
    },
    'looks_backdrops': {
        inputs: [],
        fields: [
            {name: 'BACKDROP', validValues: null}
        ]
    },
    'looks_nextbackdrop': {
        inputs: [],
        fields: []
    },
    'looks_changesizeby': {
        inputs: [
            {name: 'CHANGE', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: []
    },
    'looks_setsizeto': {
        inputs: [
            {name: 'SIZE', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: []
    },
    'looks_changeeffectby': {
        inputs: [
            {name: 'CHANGE', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['COLOR', 'FISHEYE', 'WHIRL', 'PIXELATE', 'MOSAIC', 'BRIGHTNESS', 'GHOST']}
        ]
    },
    'looks_seteffectto': {
        inputs: [
            {name: 'VALUE', bitMaskType: BitMaskType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['COLOR', 'FISHEYE', 'WHIRL', 'PIXELATE', 'MOSAIC', 'BRIGHTNESS', 'GHOST']}
        ]
    },
    'looks_cleargraphiceffects': {
        inputs: [],
        fields: []
    },
    'looks_show': {
        inputs: [],
        fields: []
    },
    'looks_hide': {
        inputs: [],
        fields: []
    },
    'looks_gotofrontback': {
        inputs: [],
        fields: [
            {name: 'FRONT_BACK', validValues: ['front', 'back']}
        ]
    },
    'looks_goforwardbackwardlayers': {
        inputs: [
            {name: 'NUM', bitMaskType: BitMaskType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'FORWARD_BACKWARD', validValues: ['forward', 'backward']}
        ]
    },
    'looks_costumenumbername': {
        inputs: [],
        fields: [
            {name: 'NUMBER_NAME', validValues: ['number', 'name']}
        ]
    },
    'looks_backdropnumbername': {
        inputs: [],
        fields: [
            {name: 'NUMBER_NAME', validValues: ['number', 'name']}
        ]
    },
    'looks_size': {
        inputs: [],
        fields: []
    },
    '': {
        inputs: [],
        fields: []
    },
    'event_whenflagclicked': {
        inputs: [], 
        fields: []
    }
};