'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';

type ThemeMode = 'main' | 'alt';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    setThemeMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    mode: 'main',
    toggleTheme: () => { },
    setThemeMode: () => { },
});

export const useThemeContext = () => useContext(ThemeContext);

export const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>('main');

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === 'main' ? 'alt' : 'main'));
    };

    const setThemeMode = (newMode: ThemeMode) => {
        setMode(newMode);
    }

    const value = useMemo(() => ({ mode, toggleTheme, setThemeMode }), [mode]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
