export interface Theme {
    colors: {
        greyscale1: string;
        greyscale2: string;
        greyscale3: string;
        greyscale4: string;
        greyscale5: string;
        greyscale6: string;
        greyscale7: string;
        greyscale8: string;
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
    };
    button: {
        borderRadius: string;
        fontFamily: string;
        fontWeight: string;
        fontSize: string;
    };
}
export declare const theme: Theme;
