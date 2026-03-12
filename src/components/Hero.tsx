'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './Hero.styles';

const Hero = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            {/* Background Image */}
            <div className={classes.bgWrapper} />

            {/* Content */}
            <div className={classes.content}>
                <motion.h1
                    className={classes.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    Women Shaping<br />
                    the Future of <span className={classes.highlight}>Wealth</span>
                </motion.h1>

                <motion.p
                    className={classes.subtitle}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    Build wealth with clarity, structure, disciplined investing, and the support of a powerful global community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={classes.ctaContainer}
                >
                    <button
                        onClick={openJoinModal}
                        className={classes.ctaButton}
                    >
                        Join Money4Women
                    </button>
                    <button
                        className={classes.secondaryButton}
                    >
                        Register for the Masterclass
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
