'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { getImagePath } from '@/utils/image';
import { useStyles } from './Hero.styles';

const Hero = () => {
    const { classes } = useStyles();
    const { openJoinModal, openMasterclass } = useModal();
    const { scrollYProgress } = useScroll();

    // Transform scroll progress to a height percentage for the side tracker
    const sideTrackerHeight = useTransform(scrollYProgress, [0, 0.2], ['0%', '100%']);
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
                    Build wealth with clarity, structure, disciplined investing, and the support of a powerful global community of women.
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
                        Join <strong>Money4Women</strong>
                    </button>
                    <button
                        onClick={openMasterclass}
                        className={classes.secondaryButton}
                    >
                        Register for the Masterclass
                    </button>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator (Mouse shape with moving wheel) */}
            <motion.div
                className={classes.scrollIndicatorContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className={classes.scrollMouse}>
                    <motion.div
                        className={classes.scrollWheel}
                        animate={{
                            y: [0, 15, 0],
                            opacity: [1, 0, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>

            {/* Side Scroll Tracker (Right side line) */}
            <div className={classes.sideTracker}>
                <motion.div
                    className={classes.sideTrackerFill}
                    style={{ height: sideTrackerHeight }}
                />
            </div>
        </section>
    );
};

export default Hero;
