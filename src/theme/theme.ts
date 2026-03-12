import { createTheme, PaletteColorOptions } from '@mui/material/styles';
import { Inter, Caveat } from 'next/font/google';

const inter = Inter({
    weight: ['400', '500', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const caveat = Caveat({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 1024,
            lg: 1200,
            xl: 1440,
        },
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#6E61E7', // Primary Purple
        },
        secondary: {
            main: '#BFD35B', // Lime Green
        },
        info: {
            main: '#B79DEC', // Light Purple
        },
        background: {
            default: '#F8F8FA', // Off-white
            paper: '#F8F8FA',
        },
        text: {
            primary: '#2A2671', // Dark Indigo
            secondary: '#6E61E7', // Primary Purple
        },
        common: {
            black: '#2A2671',
            white: '#ffffff', // White
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#2A2671', // Indigo
        },
        h2: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#2A2671',
        },
        h3: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#2A2671',
        },
        h4: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#2A2671',
        },
        h5: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#2A2671',
        },
        h6: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#2A2671',
        },
        body1: {
            fontFamily: inter.style.fontFamily,
            color: '#2A2671',
        },
        subtitle1: {
            fontFamily: caveat.style.fontFamily,
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F8F8FA',
                    color: '#2A2671',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 9999,
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    padding: '12px 24px',
                },
                containedPrimary: {
                    backgroundColor: '#6E61E7',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#2A2671',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#BFD35B',
                    color: '#2A2671',
                    '&:hover': {
                        backgroundColor: '#2A2671',
                        color: '#BFD35B',
                    },
                },
            },
        },
    },
});

export default theme;
