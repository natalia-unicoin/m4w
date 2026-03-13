'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { mainTheme, altTheme } from './theme';
import { CustomThemeProvider, useThemeContext } from './ThemeContext';

function ThemeConsumer({ children }: { children: React.ReactNode }) {
    const { mode } = useThemeContext();
    const currentTheme = mode === 'alt' ? altTheme : mainTheme;

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <CustomThemeProvider>
                <ThemeConsumer>
                    {children}
                </ThemeConsumer>
            </CustomThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
