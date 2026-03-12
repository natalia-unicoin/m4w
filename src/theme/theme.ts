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
            main: '#FED141', // Limencello (Yellow)
        },
        secondary: {
            main: '#B1E4E3', // Summer Green
        },
        info: {
            main: '#EBDEFC', // Soft Lavender
        },
        background: {
            default: '#F8F8FA', // Off-white
            paper: '#F8F8FA',
        },
        text: {
            primary: '#1A1A1A', // Dark Text 
            secondary: '#4B5563', // Dark Gray
        },
        common: {
            black: '#1A1A1A',
            white: '#ffffff', // White
        }
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#1A1A1A', // Dark
        },
        h2: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#1A1A1A',
        },
        h3: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#1A1A1A',
        },
        h4: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#1A1A1A',
        },
        h5: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#1A1A1A',
        },
        h6: {
            fontFamily: inter.style.fontFamily,
            fontWeight: 700,
            color: '#1A1A1A',
        },
        body1: {
            fontFamily: inter.style.fontFamily,
            color: '#1A1A1A',
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
                    color: '#1A1A1A',
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
                    backgroundColor: '#FED141',
                    color: '#1A1A1A',
                    '&:hover': {
                        backgroundColor: '#E5BC3A',
                    },
                },
                containedSecondary: {
                    backgroundColor: '#B1E4E3',
                    color: '#1A1A1A',
                    '&:hover': {
                        backgroundColor: '#9FCDCC',
                        color: '#1A1A1A',
                    },
                },
            },
        },
    },
});

export default theme;
