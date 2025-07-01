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
    extension: string|null;
}

export const opcodeTable: {[id: string]: FieldData} = {
    'motion_movesteps': {
        inputs: [
            {name: 'STEPS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
        extension: null
    },
    'motion_turnright': {
        inputs: [
            {name: 'DEGREES', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
        extension: null
    },
    'motion_turnleft': {
        inputs: [
            {name: 'DEGREES', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_goto': {
        inputs: [
            {name: 'TO', inputFieldType: InputFieldType.NUMBER, reference: 'motion_goto_menu', validValues: ['_random_', '_mouse_', '']}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_goto_menu': {
        inputs: [], 
        fields: [
            {name: 'TO', validValues: ['_random_', '_mouse_', '']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_gotoxy': {
        inputs: [
            {name: 'X', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}, 
            {name: 'Y', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_glideto': {
        inputs: [
            {name: 'SECS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}, 
            {name: 'TO', inputFieldType: InputFieldType.NUMBER, reference: 'motion_glideto_menu', validValues: ['_random_', '_mouse_', '']}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_glideto_menu': {
        inputs: [], 
        fields: [
            {name: 'TO', validValues: ['_random_', '_mouse_', '']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_glidesecstoxy': {
        inputs: [
            {name: 'SECS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}, 
            {name: 'X', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}, 
            {name: 'Y', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_pointindirection': {
        inputs: [
            {name: 'DIRECTION', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_pointtowards': {
        inputs: [
            {name: 'TOWARDS', inputFieldType: InputFieldType.NUMBER, reference: 'motion_pointtowards_menu', validValues: ['_mouse_', '']}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_pointtowards_menu': {
        inputs: [], 
        fields: [
            {name: 'TOWARDS', validValues: ['_mouse_', '']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_changexby': {
        inputs: [
            {name: 'DX', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_setx': {
        inputs: [
            {name: 'X', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_changeyby': {
        inputs: [
            {name: 'DY', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_sety': {
        inputs: [
            {name: 'Y', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_ifonedgebounce': {
        inputs: [], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_setrotationstyle': {
        inputs: [], 
        fields: [
            {name: 'STYLE', validValues: ['left-right', 'don\'t rotate', 'all around']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_xposition': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_yposition': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'motion_direction': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_sayforsecs': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'SECS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_say': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_thinkforsecs': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'SECS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_think': {
        inputs: [
            {name: 'MESSAGE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_switchcostumeto': {
        inputs: [
            {name: 'COSTUME', inputFieldType: InputFieldType.NUMBER, reference: 'looks_costume', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_costume': {
        inputs: [],
        fields: [
            {name: 'COSTUME', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_nextcostume': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_switchbackdropto': {
        inputs: [
            {name: 'BACKDROP', inputFieldType: InputFieldType.NUMBER, reference: 'looks_backdrops', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_backdrops': {
        inputs: [],
        fields: [
            {name: 'BACKDROP', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_nextbackdrop': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_changesizeby': {
        inputs: [
            {name: 'CHANGE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_setsizeto': {
        inputs: [
            {name: 'SIZE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_changeeffectby': {
        inputs: [
            {name: 'CHANGE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['COLOR', 'FISHEYE', 'WHIRL', 'PIXELATE', 'MOSAIC', 'BRIGHTNESS', 'GHOST']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_seteffectto': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['COLOR', 'FISHEYE', 'WHIRL', 'PIXELATE', 'MOSAIC', 'BRIGHTNESS', 'GHOST']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_cleargraphiceffects': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_show': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_hide': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_gotofrontback': {
        inputs: [],
        fields: [
            {name: 'FRONT_BACK', validValues: ['front', 'back']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_goforwardbackwardlayers': {
        inputs: [
            {name: 'NUM', inputFieldType: InputFieldType.INDEX, reference: null, validValues: null}
        ],
        fields: [
            {name: 'FORWARD_BACKWARD', validValues: ['forward', 'backward']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_costumenumbername': {
        inputs: [],
        fields: [
            {name: 'NUMBER_NAME', validValues: ['number', 'name']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_backdropnumbername': {
        inputs: [],
        fields: [
            {name: 'NUMBER_NAME', validValues: ['number', 'name']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'looks_size': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_playuntildone': {
        inputs: [
            {name: 'SOUND_MENU', inputFieldType: InputFieldType.MENU, reference: 'sound_sounds_menu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_sounds_menu': {
        inputs: [],
        fields: [
            {name: 'SOUND_MENU', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_play': {
        inputs: [
            {name: 'SOUND_MENU', inputFieldType: InputFieldType.MENU, reference: 'sound_sounds_menu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_stopallsounds': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_changeeffectby': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['PITCH', 'PAN']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_seteffectto': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'EFFECT', validValues: ['PITCH', 'PAN']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_cleareffects': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_changevolumeby': {
        inputs: [
            {name: 'VOLUME', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_setvolumeto': {
        inputs: [
            {name: 'VOLUME', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sound_volume': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_whenflagclicked': {
        inputs: [], 
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_whenkeypressed': {
        inputs: [],
        fields: [
            {name: 'KEY_OPTION', validValues: ['space', 'up arrow', 'down arrow', ' right arrow', ' left arrow', 'any', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_whenthisspriteclicked': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_whenbackdropswitchesto': {
        inputs: [],
        fields: [
            {name: 'BACKDROP', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_whengreaterthan': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'WHENGREATERTHANMENU', validValues: ['LOUDNESS', 'TIMER']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_whenbroadcastreceived': {
        inputs: [],
        fields: [
            {name: 'BROADCAST_OPTION', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_broadcast': {
        inputs: [
            {name: 'BROADCAST_INPUT', inputFieldType: InputFieldType.BROADCAST, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'event_broadcastandwait': {
        inputs: [
            {name: 'BROADCAST_INPUT', inputFieldType: InputFieldType.BROADCAST, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_wait': {
        inputs: [
            {name: 'DURATION', inputFieldType: InputFieldType.POSITIVE_NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_repeat': {
        inputs: [
            {name: 'TIMES', inputFieldType: InputFieldType.INTEGER, reference: null, validValues: null},
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_forever': {
        inputs: [
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_if': {
        inputs: [
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_if_else': {
        inputs: [
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'SUBSTACK2', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_wait_until': {
        inputs: [
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_repeat_until': {
        inputs: [
            {name: 'CONDITION', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'SUBSTACK', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_stop': {
        inputs: [],
        fields: [
            {name: 'STOP_OPTION', validValues: ['all', 'this script', 'other scripts in sprite']}
        ],
        mutationType: MutationType.HAS_CHILDREN,
        extension: null
    },
    'control_start_as_clone': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_create_clone_of': {
        inputs: [
            {name: 'CLONE_OPTION', inputFieldType: InputFieldType.MENU, reference: 'control_create_clone_of_menu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_create_clone_of_menu': {
        inputs: [],
        fields: [
            {name: 'CLONE_OPTION', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'control_delete_this_clone': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_touchingobject': {
        inputs: [
            {name: 'TOUCHINGOBJECTMENU', inputFieldType: InputFieldType.MENU, reference: 'sensing_touchingobjectmenu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_touchingobjectmenu': {
        inputs: [],
        fields: [
            {name: 'TOUCHINGOBJECTMENU', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_touchingcolor': {
        inputs: [
            {name: 'COLOR', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_coloristouchingcolor': {
        inputs: [
            {name: 'COLOR', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null},
            {name: 'COLOR2', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_distanceto': {
        inputs: [
            {name: 'DISTANCETOMENU', inputFieldType: InputFieldType.MENU, reference: 'sensing_distancetomenu', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_distancetomenu': {
        inputs: [],
        fields: [
            {name: 'DISTANCETOMENU', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_askandwait': {
        inputs: [
            {name: 'QUESTION', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_answer': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_keypressed': {
        inputs: [
            {name: 'KEY_OPTION', inputFieldType: InputFieldType.MENU, reference: 'sensing_keyoptions', validValues: ['space', 'up arrow', 'down arrow', ' right arrow', ' left arrow', 'any', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_keyoptions': {
        inputs: [],
        fields: [
            {name: 'KEY_OPTION', validValues: ['space', 'up arrow', 'down arrow', ' right arrow', ' left arrow', 'any', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_mousedown': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_mousex': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_mousey': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_setdragmode': {
        inputs: [],
        fields: [
            {name: 'DRAG_MODE', validValues: ['draggable', 'not draggable']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_loudness': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_timer': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_resettimer': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_of': {
        inputs: [
            {name: 'OBJECT', inputFieldType: InputFieldType.MENU, reference: 'sensing_of_object_menu', validValues: null}
        ],
        fields: [
            {name: 'PROPERTY', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_of_object_menu': {
        inputs: [],
        fields: [
            {name: 'OBJECT', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_current': {
        inputs: [],
        fields: [
            {name: 'CURRENTMENU', validValues: ['YEAR', 'MONTH', 'DATE', 'DAYOFWEEK', 'HOUR', 'MINUTE', 'SECOND']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_dayssince2000': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'sensing_username': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_add': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_subtract': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_multiply': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_divide': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_random': {
        inputs: [
            {name: 'FROM', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'TO', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_gt': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_lt': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_equals': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_and': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_or': {
        inputs: [
            {name: 'OPERAND1', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null},
            {name: 'OPERAND2', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_not': {
        inputs: [
            {name: 'OPERAND', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_join': {
        inputs: [
            {name: 'STRING1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'STRING2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_letter_of': {
        inputs: [
            {name: 'LETTER', inputFieldType: InputFieldType.INTEGER, reference: null, validValues: null},
            {name: 'STRING', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_length': {
        inputs: [
            {name: 'STRING', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_contains': {
        inputs: [
            {name: 'STRING1', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'STRING2', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_mod': {
        inputs: [
            {name: 'NUM1', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null},
            {name: 'NUM2', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_round': {
        inputs: [
            {name: 'NUM', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'operator_mathop': {
        inputs: [
            {name: 'NUM', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [
            {name: 'OPERATOR', validValues: ['abs', 'floor', 'ceiling', 'sqrt', 'sin', 'cos', 'tan', 'acos', 'asin', 'atan', 'ln', 'log', 'e ^', '10 ^']}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_setvariableto': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_changevariableby': {
        inputs: [
            {name: 'VALUE', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_showvariable': {
        inputs: [],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_hidevariable': {
        inputs: [],
        fields: [
            {name: 'VARIABLE', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_addtolist': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_deleteoflist': {
        inputs: [
            {name: 'INDEX', inputFieldType: InputFieldType.INDEX, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_deletealloflist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_insertatlist': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'INDEX', inputFieldType: InputFieldType.INDEX, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_replaceitemoflist': {
        inputs: [
            {name: 'INDEX', inputFieldType: InputFieldType.INDEX, reference: null, validValues: null},
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_itemoflist': {
        inputs: [
            {name: 'INDEX', inputFieldType: InputFieldType.INDEX, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_itemnumoflist': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_lengthoflist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_listcontainsitem': {
        inputs: [
            {name: 'ITEM', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_showlist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'data_hidelist': {
        inputs: [],
        fields: [
            {name: 'LIST', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'procedures_definition': {
        inputs: [
            {name: 'custom_block', inputFieldType: InputFieldType.BLOCK, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: null
    },
    'procedures_prototype': {
        inputs: [],
        fields: [],
        mutationType: MutationType.PROCEDURE_PROTOTYPE,
        extension: null
    },
    'argument_reporter_string_number': {
        inputs: [],
        fields: [
            {name: 'VALUE', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'argument_reporter_boolean': {
        inputs: [],
        fields: [
            {name: 'VALUE', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: null
    },
    'procedures_call': {
        inputs: [],
        fields: [],
        mutationType: MutationType.PROCEDURE_CALL,
        extension: null
    },
    'music_playDrumForBeats': {
        inputs: [
            {name: 'DRUM', inputFieldType: InputFieldType.MENU, reference: 'music_menu_DRUM', validValues: Array.from(Array(19), (_, i) => i.toString())},
            {name: 'BEATS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_menu_DRUM': {
        inputs: [],
        fields: [
            {name: 'DRUM', validValues: Array.from(Array(19), (_, i) => i.toString())}
        ],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_restForBeats': {
        inputs: [
            {name: 'BEATS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_playNoteForBeats': {
        inputs: [
            {name: 'NOTE', inputFieldType: InputFieldType.MENU, reference: 'note', validValues: Array.from(Array(133), (_, i) => i.toString())},
            {name: 'BEATS', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'note': {
        inputs: [],
        fields: [
            {name: 'NOTE', validValues: Array.from(Array(133), (_, i) => i.toString())}
        ],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_setInstrument': {
        inputs: [
            {name: 'INSTRUMENT', inputFieldType: InputFieldType.MENU, reference: 'music_menu_INSTRUMENT', validValues: Array.from(Array(22), (_, i) => i.toString())},
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_menu_INSTRUMENT': {
        inputs: [],
        fields: [
            {name: 'INSTRUMENT', validValues: Array.from(Array(22), (_, i) => i.toString())}
        ],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_setTempo': {
        inputs: [
            {name: 'TEMPO', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_changeTempo': {
        inputs: [
            {name: 'TEMPO', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'music_getTempo': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'music'
    },
    'pen_clear': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_stamp': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_penDown': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_penUp': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_setPenColorToColor': {
        inputs: [
            {name: 'COLOR', inputFieldType: InputFieldType.COLOR, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_changePenColorParamBy': {
        inputs: [
            {name: 'COLOR_PARAM', inputFieldType: InputFieldType.MENU, reference: 'pen_menu_colorParam', validValues: ['color', 'saturation', 'brightness', 'transparency']},
            {name: 'VALUE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_menu_colorParam': {
        inputs: [],
        fields: [
            {name: 'colorParam', validValues: ['color', 'saturation', 'brightness', 'transparency']}
        ],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_setPenColorParamTo': {
        inputs: [
            {name: 'COLOR_PARAM', inputFieldType: InputFieldType.MENU, reference: 'pen_menu_colorParam', validValues: ['color', 'saturation', 'brightness', 'transparency']},
            {name: 'VALUE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_changePenSizeBy': {
        inputs: [
            {name: 'SIZE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'pen_setPenSizeTo': {
        inputs: [
            {name: 'SIZE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'pen'
    },
    'videoSensing_whenMotionGreaterThan': {
        inputs: [
            {name: 'REFERENCE', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'videoSensing_videoOn': {
        inputs: [
            {name: 'ATTRIBUTE', inputFieldType: InputFieldType.MENU, reference: 'videoSensing_menu_ATTRIBUTE', validValues: ['motion', 'direction']},
            {name: 'SUBJECT', inputFieldType: InputFieldType.MENU, reference: 'videoSensing_menu_SUBJECT', validValues: ['this sprite', 'stage']}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'videoSensing_menu_ATTRIBUTE': {
        inputs: [],
        fields: [
            {name: 'ATTRIBUTE', validValues: ['motion', 'direction']}
        ],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'videoSensing_menu_SUBJECT': {
        inputs: [],
        fields: [
            {name: 'SUBJECT', validValues: ['this sprite', 'stage']}
        ],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'videoSensing_videoToggle': {
        inputs: [
            {name: 'VIDEO_STATE', inputFieldType: InputFieldType.MENU, reference: 'videoSensing_menu_VIDEO_STATE', validValues: ['on', 'off', 'on flipped']}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'videoSensing_menu_VIDEO_STATE': {
        inputs: [],
        fields: [
            {name: 'VIDEO_STATE', validValues: ['on', 'off', 'on flipped']}
        ],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'videoSensing_setVideoTransparency': {
        inputs: [
            {name: 'TRANSPARENCY', inputFieldType: InputFieldType.NUMBER, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'videoSensing'
    },
    'text2speech_speakAndWait': {
        inputs: [
            {name: 'WORDS', inputFieldType: InputFieldType.STRING, reference: null, validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'text2speech'
    },
    'text2speech_setVoice': {
        inputs: [
            {name: 'VOICE', inputFieldType: InputFieldType.MENU, reference: 'text2speech_menu_voices', validValues: ['ALTO', 'TENOR', 'SQUEAK', 'GIANT', 'KITTEN']}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'text2speech'
    },
    'text2speech_menu_voices': {
        inputs: [],
        fields: [
            {name: 'voices', validValues: ['ALTO', 'TENOR', 'SQUEAK', 'GIANT', 'KITTEN']}
        ],
        mutationType: MutationType.NONE,
		extension: 'text2speech'
    },
    'text2speech_setLanguage': {
        inputs: [
            {name: 'LANGUAGE', inputFieldType: InputFieldType.MENU, reference: 'text2speech_menu_languages', validValues: null} // TODO: At some point all the language codes need to be filed in for the valid values.
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'text2speech'
    },
    'text2speech_menu_languages': {
        inputs: [],
        fields: [
            {name: 'languages', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: 'text2speech'
    },
    'translate_getTranslate': {
        inputs: [
            {name: 'WORDS', inputFieldType: InputFieldType.STRING, reference: null, validValues: null},
            {name: 'LANGUAGE', inputFieldType: InputFieldType.MENU, reference: 'translate_menu_languages', validValues: null}
        ],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'translate'
    },
    'translate_menu_languages': {
        inputs: [],
        fields: [
            {name: 'languages', validValues: null}
        ],
        mutationType: MutationType.NONE,
		extension: 'translate'
    },
    'translate_getViewerLanguage': {
        inputs: [],
        fields: [],
        mutationType: MutationType.NONE,
		extension: 'translate'
    },
};
