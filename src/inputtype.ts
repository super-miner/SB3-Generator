export enum InputType {
    INCLUDES_LITERAL  = 0b0001, // 1
    INCLUDES_VARIABLE = 0b0010, // 2
    CUSTOM_LITERAL    = 0b0100, // 4
    CUSTOM_VARIABLE   = 0b1000  // 8
}