'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './WhyThisMomentMatters.styles';
import { getImagePath } from '@/utils/image';

const WhyThisMomentMatters = () => {
    const { classes } = useStyles();

    return (
        <section
            id="why-now"
            className={classes.section}
            style={{ backgroundImage: `url('${getImagePath('images/violet.png')}')` }}
        >
            <div className={classes.container}>
                <div className={classes.textWrapper}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className={classes.overTitle}>FROM INCOME TO WEALTH</div>
                        <h2 className={classes.title}>
                            Why This Moment<br />Matters
                        </h2>
                    </motion.div>

                    <motion.div
                        className={classes.textContent}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className={classes.leadText}>
                            A historic wealth transfer is underway. In the coming decade, women are expected to control a significant share of global investable wealth.
                        </p>
                        <p className={classes.middleText}>
                            <strong>Money4Women</strong> exists to ensure you are prepared to navigate that shift with clarity, knowledge, and long-term strategy.
                        </p>
                        <p className={classes.description}>
                            This movement focuses on financial education, disciplined systems, and responsible investing principles.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyThisMomentMatters;
