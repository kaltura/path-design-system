export interface Theme {
    colors: {
        grayscale1: string;
        grayscale2: string;
        grayscale3: string;
        grayscale4: string;
        grayscale5: string;
        grayscale6: string;
        grayscale7: string;
        grayscale8: string;
        success: string;
        danger: string;
        acknowledgement: string;
        red: string;
        orange: string;
        yellow: string;
        lime: string;
        green: string;
        deepcyan: string;
        cyan: string;
        royalblue: string;
        white: string;
    };
    button: {
        borderRadius: string;
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
    };
    input: {
        borderRadius: string;
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
    };
}
export declare const theme: Theme;
