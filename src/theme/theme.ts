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

const commonSettings = {
    breakpoints: {
        values: { xs: 0, sm: 768, md: 1024, lg: 1200, xl: 1440 },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: { fontFamily: inter.style.fontFamily, fontWeight: 700, lineHeight: 1.1 },
        h2: { fontFamily: inter.style.fontFamily, fontWeight: 700 },
        h3: { fontFamily: inter.style.fontFamily, fontWeight: 700 },
        h4: { fontFamily: inter.style.fontFamily, fontWeight: 700 },
        h5: { fontFamily: inter.style.fontFamily, fontWeight: 700 },
        h6: { fontFamily: inter.style.fontFamily, fontWeight: 700 },
        body1: { fontFamily: inter.style.fontFamily },
        subtitle1: { fontFamily: caveat.style.fontFamily },
    },
};

export const mainTheme = createTheme({
    ...commonSettings,
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: '#F8F8FA',
                    color: '#2A2671',
                    textWrap: 'balance', // Globably fix widows
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
                    backgroundColor: '#2A2671',
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: '#6E61E7',
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
    palette: {
        mode: 'light',
        primary: { main: '#2A2671' },
        secondary: { main: '#BFD35B' },
        info: { main: '#B79DEC' },
        background: { default: '#F8F8FA', paper: '#F8F8FA' },
        text: { primary: '#2A2671', secondary: '#6E61E7' },
        common: { black: '#2A2671', white: '#ffffff' }
    },
});


// Default to mainTheme to avoid breaking external direct imports (if any)
export default mainTheme;
