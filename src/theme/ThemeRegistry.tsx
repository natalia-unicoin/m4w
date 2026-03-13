'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { mainTheme, altTheme } from './theme';
import { CustomThemeProvider, useThemeContext } from './ThemeContext';

import { usePathname } from 'next/navigation';

function ThemeConsumer({ children }: { children: React.ReactNode }) {
    const { mode, setThemeMode } = useThemeContext();
    const pathname = usePathname();

    const isPastelPath = pathname === '/alternate';
    const currentTheme = isPastelPath ? altTheme : (mode === 'alt' ? altTheme : mainTheme);

    // Sync context state if navigated directly
    React.useEffect(() => {
        if (isPastelPath && mode !== 'alt') {
            setThemeMode('alt');
        } else if (pathname === '/' && mode !== 'main') {
            setThemeMode('main');
        }
    }, [pathname, isPastelPath, mode, setThemeMode]);

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
