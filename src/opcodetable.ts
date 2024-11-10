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
    'sound_playuntildone': {
        inputs: [
            {name: 'SOUND_MENU', inputFieldType: InputFieldType.MENU, reference: 'sound_sounds_menu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sound_sounds_menu': {
        inputs: [],
        fields: [
            {name: 'SOUND_MENU', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'sound_play': {
        inputs: [
            {name: 'SOUND_MENU', inputFieldType: InputFieldType.MENU, reference: 'sound_sounds_menu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sound_stopallsounds': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sound_changeeffectby': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['PITCH', 'PAN']}
        ],
        mutationType: MutationType.NONE
    },
    'sound_seteffectto': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['PITCH', 'PAN']}
        ],
        mutationType: MutationType.NONE
    },
    'sound_cleareffects': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sound_changevolumeby': {
        inputs: [
            {name: 'VOLUME', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sound_setvolumeto': {
        inputs: [
            {name: 'VOLUME', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sound_volume': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
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
        mutationType: MutationType.HAS_CHILDREN
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
    'sensing_touchingobject': {
        inputs: [
            {name: 'TOUCHINGOBJECTMENU', inputFieldType: InputFieldType.MENU, reference: 'sensing_touchingobjectmenu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_touchingobjectmenu': {
        inputs: [],
        fields: [
            {name: 'TOUCHINGOBJECTMENU', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_touchingcolor': {
        inputs: [
            {name: 'COLOR', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_coloristouchingcolor': {
        inputs: [
            {name: 'COLOR', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null},
            {name: 'COLOR2', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_distanceto': {
        inputs: [
            {name: 'DISTANCETOMENU', inputFieldType: InputFieldType.MENU, reference: 'sensing_distancetomenu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_distancetomenu': {
        inputs: [],
        fields: [
            {name: 'DISTANCETOMENU', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_askandwait': {
        inputs: [
            {name: 'QUESTION', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_answer': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_keypressed': {
        inputs: [
            {name: 'KEY_OPTION', inputFieldType: InputFieldType.MENU, reference: 'sensing_keyoptions', validValues: ['space', 'up arrow', 'down arrow', ' right arrow', ' left arrow', 'any', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_keyoptions': {
        inputs: [],
        fields: [
            {name: 'KEY_OPTION', validValues: ['space', 'up arrow', 'down arrow', ' right arrow', ' left arrow', 'any', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_mousedown': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_mousex': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_mousey': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_setdragmode': {
        inputs: [],
        fields: [
            {name: 'DRAG_MODE', validValues: ['draggable', 'not draggable']}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_loudness': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_timer': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_resettimer': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_of': {
        inputs: [
            {name: 'OBJECT', inputFieldType: InputFieldType.MENU, reference: 'sensing_of_object_menu', validValues: null}
        ],
        fields: [
            {name: 'PROPERTY', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_of_object_menu': {
        inputs: [],
        fields: [
            {name: 'OBJECT', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_current': {
        inputs: [],
        fields: [
            {name: 'CURRENTMENU', validValues: ['YEAR', 'MONTH', 'DATE', 'DAYOFWEEK', 'HOUR', 'MINUTE', 'SECOND']}
        ],
        mutationType: MutationType.NONE
    },
    'sensing_dayssince2000': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'sensing_username': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_add': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.ANY, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_subtract': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.ANY, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_multiply': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.ANY, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_divide': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.ANY, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_random': {
        inputs: [
            {name: 'FROM', inputFieldType: InputFieldType.ANY, reference: null, validValues: null},
            {name: 'TO', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_gt': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_lt': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_equals': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_and': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_or': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_not': {
        inputs: [
            {name: 'OPERAND', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_join': {
        inputs: [
            {name: 'STRING1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'STRING2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_letter_of': {
        inputs: [
            {name: 'LETTER', inputFieldType: InputFieldType.INTEGER, reference: null, validValues: null},
            {name: 'STRING', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_length': {
        inputs: [
            {name: 'STRING', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_contains': {
        inputs: [
            {name: 'STRING1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'STRING2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_mod': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.ANY, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_round': {
        inputs: [
            {name: 'NUM', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'operator_mathop': {
        inputs: [
            {name: 'NUM', inputFieldType: InputFieldType.ANY, reference: null, validValues: null}
        ],
        fields: [
            {name: 'OPERATOR', validValues: ['abs', 'floor', 'ceiling', 'sqrt', 'sin', 'cos', 'tan', 'acos', 'asin', 'atan', 'ln', 'log', 'e ^', '10 ^']}
        ],
        mutationType: MutationType.NONE
    },
    'data_setvariableto': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_changevariableby': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_showvariable': {
        inputs: [],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_hidevariable': {
        inputs: [],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_addtolist': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_deleteoflist': {
        inputs: [
            {name: 'INDEX', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_deletealloflist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_insertatlist': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'INDEX', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_replaceitemoflist': {
        inputs: [
            {name: 'INDEX', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_itemoflist': {
        inputs: [
            {name: 'INDEX', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_itemnumoflist': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_lengthoflist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_listcontainsitem': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_showlist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'data_hidelist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE
    },
    'procedures_definition': {
        inputs: [
            {name: 'custom_block', inputFieldType: InputFieldType.MENU, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE
    },
    'procedures_prototype': {
        inputs: [],
        fields: [],
        mutationType: MutationType.PROCEDURE_PROTOTYPE
    },
    'argument_reporter_string_number': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'argument_reporter_boolean': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
    'procedures_call': {
        inputs: [],
        fields: [],
        mutationType: MutationType.PROCEDURE_CALL
    },
    '': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE
    },
};