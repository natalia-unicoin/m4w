'use client';

import React from 'react';
import { useThemeContext } from '@/theme/ThemeContext';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';

export default function ColorTestPage() {
    const { mode, setThemeMode } = useThemeContext();
    const theme = useTheme();

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.background.default, color: theme.palette.text.primary, pt: 12, pb: 12 }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                        Brand Palette &mdash; Testing Suite
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontSize: '1.5rem', color: theme.palette.text.secondary }}>
                        Select a design direction below to preview the color configuration across the entire site instantly.
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {/* Main Theme Option */}
                    <Grid item xs={12} md={6}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Box
                                onClick={() => setThemeMode('main')}
                                sx={{
                                    p: 4,
                                    borderRadius: '24px',
                                    border: mode === 'main' ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                                    backgroundColor: mode === 'main' ? 'rgba(0,0,0,0.02)' : '#ffffff',
                                    boxShadow: mode === 'main' ? theme.shadows[4] : theme.shadows[1],
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 3
                                }}
                            >
                                <Typography variant="h4">Main Design (Navy & Lavender)</Typography>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#2A2671', border: '1px solid #ddd' }} />
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#BFD35B', border: '1px solid #ddd' }} />
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#B79DEC', border: '1px solid #ddd' }} />
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2, pointerEvents: 'none' }}
                                >
                                    Primary CTA Example
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Alternate Theme Option */}
                    <Grid item xs={12} md={6}>
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Box
                                onClick={() => setThemeMode('alt')}
                                sx={{
                                    p: 4,
                                    borderRadius: '24px',
                                    border: mode === 'alt' ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                                    backgroundColor: mode === 'alt' ? 'rgba(0,0,0,0.02)' : '#ffffff',
                                    boxShadow: mode === 'alt' ? theme.shadows[4] : theme.shadows[1],
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 3
                                }}
                            >
                                <Typography variant="h4">Alternative (Pastels & Limencello)</Typography>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#FED141', border: '1px solid #ddd' }} />
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#B1E4E3', border: '1px solid #ddd' }} />
                                    <Box sx={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: '#EBDEFC', border: '1px solid #ddd' }} />
                                </Box>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2, pointerEvents: 'none' }}
                                >
                                    Primary CTA Example
                                </Button>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>

                <Box textAlign="center" mt={8}>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href="/"
                        sx={{ borderRadius: '9999px', borderWidth: '2px' }}
                    >
                        &larr; Return to Home to see changes
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
