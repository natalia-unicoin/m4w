'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';

const MasterclassModal = () => {
    const { isMasterclassOpen, closeMasterclass } = useModal();
    const [formData, setFormData] = useState({
        name: '',
        profession: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log('Masterclass Registration:', formData);
        closeMasterclass();
        setFormData({ name: '', profession: '', email: '' });
    };

    return (
        <AnimatePresence>
            {isMasterclassOpen && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeMasterclass}
                        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(42, 38, 113, 0.6)', backdropFilter: 'blur(8px)' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '480px',
                            backgroundColor: '#ffffff',
                            borderRadius: '24px',
                            padding: '40px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            margin: '16px'
                        }}
                    >
                        {/* Close button */}
                        <IconButton
                            onClick={closeMasterclass}
                            style={{ position: 'absolute', top: '16px', right: '16px', color: '#666' }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </IconButton>

                        <Typography variant="h4" component="h2" style={{ fontWeight: 700, color: '#2A2671', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
                            Register for the Masterclass
                        </Typography>
                        <Typography variant="body1" style={{ color: '#666', marginBottom: '32px', lineHeight: 1.6 }}>
                            Secure your spot to learn the frameworks for building lasting wealth.
                        </Typography>

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        '&:hover fieldset': { borderColor: '#2A2671' },
                                        '&.Mui-focused fieldset': { borderColor: '#2A2671' }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': { color: '#2A2671' }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Profession / Role"
                                name="profession"
                                value={formData.profession}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        '&:hover fieldset': { borderColor: '#2A2671' },
                                        '&.Mui-focused fieldset': { borderColor: '#2A2671' }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': { color: '#2A2671' }
                                }}
                            />
                            <TextField
                                fullWidth
                                label="Email Address"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: '12px',
                                        '&:hover fieldset': { borderColor: '#2A2671' },
                                        '&.Mui-focused fieldset': { borderColor: '#2A2671' }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': { color: '#2A2671' }
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    marginTop: '12px',
                                    backgroundColor: '#2A2671',
                                    color: '#fff',
                                    padding: '16px',
                                    borderRadius: '9999px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    boxShadow: 'none',
                                    '&:hover': {
                                        backgroundColor: '#2A2671',
                                        boxShadow: 'none',
                                    }
                                }}
                            >
                                Registrate
                            </Button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default MasterclassModal;
