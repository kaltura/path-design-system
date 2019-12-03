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
        grayscale1: '#333333',
        grayscale2: '#888888',
        grayscale3: '#999999',
        grayscale4: '#cccccc',
        grayscale5: '#d9d9d9',
        grayscale6: '#ebebeb',
        grayscale7: '#f2f2f2',
        grayscale8: '#f4f4f4',
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
