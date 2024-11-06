import { InputFieldType } from "./inputFieldType";
import { MutationType } from "./mutationType";

export type Input = {
    name: string;
    inputFieldType: InputFieldType;
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
    mutationType: MutationType;
}

export const opcodeTable: {[id: string]: FieldData} = {
    'motion_movesteps': {
        inputs: [
            {name: 'STEPS', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_turnright': {
        inputs: [
            {name: 'DEGREES', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_turnleft': {
        inputs: [
            {name: 'DEGREES', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_goto': {
        inputs: [
            {name: 'TO', inputFieldType: InputFieldType.ANY, reference: 'motion_goto_menu', validValues: ['_random_', '_mouse_', '']}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_goto_menu': {
        inputs: [], 
        fields: [
            {name: 'TO', validValues: ['_random_', '_mouse_', '']}
        ],
        mutationType: MutationType.NONE
    },
    'motion_gotoxy': {
        inputs: [
            {name: 'X', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}, 
            {name: 'Y', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_glideto': {
        inputs: [
            {name: 'SECS', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}, 
            {name: 'TO', inputFieldType: InputFieldType.ANY, reference: 'motion_glideto_menu', validValues: ['_random_', '_mouse_', '']}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_glideto_menu': {
        inputs: [], 
        fields: [
            {name: 'TO', validValues: ['_random_', '_mouse_', '']}
        ],
        mutationType: MutationType.NONE
    },
    'motion_glidesecstoxy': {
        inputs: [
            {name: 'SECS', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}, 
            {name: 'X', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}, 
            {name: 'Y', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_pointindirection': {
        inputs: [
            {name: 'DIRECTION', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_pointtowards': {
        inputs: [
            {name: 'TOWARDS', inputFieldType: InputFieldType.ANY, reference: 'motion_pointtowards_menu', validValues: ['_mouse_', '']}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_pointtowards_menu': {
        inputs: [], 
        fields: [
            {name: 'TOWARDS', validValues: ['_mouse_', '']}
        ],
        mutationType: MutationType.NONE
    },
    'motion_changexby': {
        inputs: [
            {name: 'DX', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_setx': {
        inputs: [
            {name: 'X', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_changeyby': {
        inputs: [
            {name: 'DY', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_sety': {
        inputs: [
            {name: 'Y', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_ifonedgebounce': {
        inputs: [], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_setrotationstyle': {
        inputs: [], 
        fields: [
            {name: 'STYLE', validValues: ['left-right', 'don\'t rotate', 'all around']}
        ],
        mutationType: MutationType.NONE
    },
    'motion_xposition': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_yposition': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'motion_direction': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_sayforsecs': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'SECS', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_say': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_thinkforsecs': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'SECS', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_think': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_switchcostumeto': {
        inputs: [
            {name: 'COSTUME', inputFieldType: InputFieldType.ANY, reference: 'looks_costume', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_costume': {
        inputs: [],
        fields: [
            {name: 'COSTUME', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'looks_nextcostume': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_switchbackdropto': {
        inputs: [
            {name: 'BACKDROP', inputFieldType: InputFieldType.ANY, reference: 'looks_backdrops', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_backdrops': {
        inputs: [],
        fields: [
            {name: 'BACKDROP', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'looks_nextbackdrop': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_changesizeby': {
        inputs: [
            {name: 'CHANGE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_setsizeto': {
        inputs: [
            {name: 'SIZE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_changeeffectby': {
        inputs: [
            {name: 'CHANGE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['COLOR', 'FISHEYE', 'WHIRL', 'PIXELATE', 'MOSAIC', 'BRIGHTNESS', 'GHOST']}
        ],
        mutationType: MutationType.NONE
    },
    'looks_seteffectto': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['COLOR', 'FISHEYE', 'WHIRL', 'PIXELATE', 'MOSAIC', 'BRIGHTNESS', 'GHOST']}
        ],
        mutationType: MutationType.NONE
    },
    'looks_cleargraphiceffects': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_show': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_hide': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'looks_gotofrontback': {
        inputs: [],
        fields: [
            {name: 'FRONT_BACK', validValues: ['front', 'back']}
        ],
        mutationType: MutationType.NONE
    },
    'looks_goforwardbackwardlayers': {
        inputs: [
            {name: 'NUM', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'FORWARD_BACKWARD', validValues: ['forward', 'backward']}
        ],
        mutationType: MutationType.NONE
    },
    'looks_costumenumbername': {
        inputs: [],
        fields: [
            {name: 'NUMBER_NAME', validValues: ['number', 'name']}
        ],
        mutationType: MutationType.NONE
    },
    'looks_backdropnumbername': {
        inputs: [],
        fields: [
            {name: 'NUMBER_NAME', validValues: ['number', 'name']}
        ],
        mutationType: MutationType.NONE
    },
    'looks_size': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    // TODO: Implement sound blocks
    'event_whenflagclicked': {
        inputs: [], 
        fields: [],
        mutationType: MutationType.NONE
    },
    'event_whenkeypressed': {
        inputs: [],
        fields: [
            {name: 'KEY_OPTION', validValues: ['space', 'up arrow', 'down arrow', ' right arrow', ' left arrow', 'any', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
        ],
        mutationType: MutationType.NONE
    },
    'event_whenthisspriteclicked': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'event_whenbackdropswitchesto': {
        inputs: [],
        fields: [
            {name: 'BACKDROP', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'event_whengreaterthan': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'WHENGREATERTHANMENU', validValues: ['LOUDNESS', 'TIMER']}
        ],
        mutationType: MutationType.NONE
    },
    'event_whenbroadcastreceived': {
        inputs: [],
        fields: [
            {name: 'BROADCAST_OPTION', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'event_broadcast': {
        inputs: [
            {name: 'BROADCAST_INPUT', inputFieldType: InputFieldType.BROADCAST, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'event_broadcastandwait': {
        inputs: [
            {name: 'BROADCAST_INPUT', inputFieldType: InputFieldType.BROADCAST, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_wait': {
        inputs: [
            {name: 'DURATION', inputFieldType: InputFieldType.POSITIVE_NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_repeat': {
        inputs: [
            {name: 'TIMES', inputFieldType: InputFieldType.INTEGER, reference: null, validValues: null},
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_forever': {
        inputs: [
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_if': {
        inputs: [
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_if_else': {
        inputs: [
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'SUBSTACK2', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_wait_until': {
        inputs: [
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_repeat_until': {
        inputs: [
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_stop': {
        inputs: [],
        fields: [
            {name: 'STOP_OPTION', validValues: ['all', 'this script', 'other scripts in sprite']}
        ],
        mutationType: MutationType.MUTATION
    },
    'control_start_as_clone': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_create_clone_of': {
        inputs: [
            {name: 'CLONE_OPTION', inputFieldType: InputFieldType.MENU, reference: 'control_create_clone_of_menu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'control_create_clone_of_menu': {
        inputs: [],
        fields: [
            {name: 'CLONE_OPTION', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'control_delete_this_clone': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    '': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
};