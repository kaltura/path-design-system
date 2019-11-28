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
        disabled: string;
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

export const theme: Theme = {
    colors: {
        greyscale1: '#333333',
        greyscale2: '#888888',
        greyscale3: '#999999',
        greyscale4: '#cccccc',
        greyscale5: '#d9d9d9',
        greyscale6: '#ebebeb',
        greyscale7: '#f2f2f2',
        greyscale8: '#f4f4f4',
        success: '#29BE86',
        danger: '#FF5F65',
        acknowledgement: '#01ACCD',
        red: '#DB1F26',
        orange: '#F9A71B',
        yellow: '#fdd304',
        lime: '#b2d238',
        green: '#009444',
        deepcyan: '#00a784',
        cyan: '#01accd',
        royalblue: '#1c4b98',
        disabled: '#F5F5F5',
    },
    button: {
        borderRadius: '4px',
        fontFamily: 'Lato, Arial, Helvetica',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    input: {
        borderRadius: '4px',
        fontFamily: 'Lato, Arial, Helvetica',
        fontWeight: 'normal',
        fontSize: '14px',
    }
};
