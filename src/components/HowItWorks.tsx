'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './HowItWorks.styles';
import { useModal } from '@/context/ModalContext';

const SystemSection = () => {
    const { classes } = useStyles();
    const { openMasterclass } = useModal();

    return (
        <section id="system" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.textWrapper}>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={classes.overTitle}
                    >
                        FROM INCOME TO WEALTH
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className={classes.title}
                    >
                        The Wealth Operating System for High-Performing Women
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={classes.leadText}
                    >
                        Money4Women introduces a structured approach to building wealth&nbsp;intentionally.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={classes.description}
                    >
                        Inside the program, you develop a clear view of your finances, install systems that support long-term growth, and learn disciplined investment frameworks across traditional and digital&nbsp;assets.<br /><br />
                        The goal is simple: help you transform financial success into lasting financial&nbsp;strength.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <button onClick={openMasterclass} className={classes.ctaButton}>
                            Register for the Masterclass
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SystemSection;
