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
                <div className={classes.bentoGrid}>
                    {/* Text Block */}
                    <motion.div
                        className={`${classes.bentoBlock} ${classes.bentoBlockText}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={classes.bentoPill}>FROM INCOME TO WEALTH</span>
                        <h2 className={classes.bentoTitle}>
                            The Wealth Operating System for High{'\u2011'}Performing Women
                        </h2>
                        <p className={classes.bentoDescription}>
                            Inside the program, you develop a clear view of your finances, install systems that support long-term growth, and learn disciplined investment frameworks across traditional and digital assets.
                            <br /><br />
                            The goal is simple: help you transform financial success into lasting financial strength.
                        </p>
                        <button onClick={openMasterclass} className={classes.bentoButton}>
                            Register for the Masterclass
                        </button>
                    </motion.div>

                    {/* Top Right Placeholder */}
                    <motion.div
                        className={`${classes.bentoBlock} ${classes.bentoImageTopRight}`}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />

                    {/* Bottom Right Placeholder */}
                    <motion.div
                        className={`${classes.bentoBlock} ${classes.bentoImageBottomRight}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </div>
            </div>
        </section>
    );
};

export default SystemSection;
