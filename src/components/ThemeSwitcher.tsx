'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

export default function ThemeSwitcher() {
    const pathname = usePathname();
    const router = useRouter();

    if (pathname === '/colortest') return null;

    const isPastel = pathname === '/alternate';

    const toggleTheme = () => {
        if (isPastel) {
            router.push('/');
        } else {
            router.push('/alternate');
        }
    };

    return (
        <Box sx={{ position: 'fixed', top: 24, left: 24, zIndex: 9999 }}>
            <Tooltip title={isPastel ? "MAIN COLOR" : "ALTERNATE"} placement="right">
                <Box
                    onClick={toggleTheme}
                    sx={{
                        backgroundColor: isPastel ? '#2A2671' : '#CAD83B',
                        color: isPastel ? '#ffffff' : '#2C2C2C',
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transition: 'transform 0.2s',
                        '&:hover': {
                            transform: 'scale(1.1)'
                        }
                    }}
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                    </svg>
                </Box>
            </Tooltip>
        </Box>
    );
}
