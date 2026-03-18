'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './JoinFlow.styles';

const JoinFlow = () => {
    const { classes } = useStyles();
    const { openJoinModal, openMasterclass } = useModal();
    return (
        <section className={classes.section}>
            <div 
                className={classes.bgWrapper} 
                style={{ backgroundImage: `url(${getImagePath('/bg-cta.png')})` }}
            >
                <div className={classes.gradientOverlay} />
            </div>

            <div className={classes.container}>
                <div className={classes.contentWrapper}>
                    <motion.h2
                        className={classes.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Build Wealth With<br />
                        <span className={classes.highlight}>Strategy.</span>
                    </motion.h2>

                    <motion.h3
                        className={classes.subtitle}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Your career created opportunity.<br />
                        Now build a financial system that supports your future.
                    </motion.h3>

                    <motion.p
                        className={classes.description}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Money4Women helps you structure your finances, invest with discipline, and connect with a community committed to long-term&nbsp;growth.
                    </motion.p>

                    <motion.div
                        className={classes.buttonGroup}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <button
                            onClick={openJoinModal}
                            className={classes.primaryButton}
                        >
                            Join <strong>Money4Women</strong>
                        </button>
                        <button onClick={openMasterclass} className={classes.secondaryButton}>
                            Register for the Masterclass
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default JoinFlow;
