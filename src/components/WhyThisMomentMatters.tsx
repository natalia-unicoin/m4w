'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './WhyThisMomentMatters.styles';

const WhyThisMomentMatters = () => {
    const { classes } = useStyles();

    return (
        <section id="why-now" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.textWrapper}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={classes.title}
                    >
                        Why This Moment Matters
                    </motion.h2>

                    <div className={classes.textContent}>
                        <p className={classes.leadText}>
                            A historic wealth transfer is underway. In the coming decade, women are expected to control a significant share of global investable wealth.
                        </p>
                        <p className={classes.description}>
                            <strong>Money4Women</strong> exists to ensure you are prepared to navigate that shift with clarity, knowledge, and long-term strategy.<br /><br />
                            This movement focuses on financial education, disciplined systems, and responsible investing principles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyThisMomentMatters;
