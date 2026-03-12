'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './LedBySection.styles';

const LedBySection = () => {
    const { classes } = useStyles();

    return (
        <section id="led-by" className={classes.section}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {/* Image Side */}
                    <div className={classes.imageColumn}>
                        <motion.div
                            className={classes.imageWrapper}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src="/assets/silvina-moschini-2.jpg"
                                alt="Silvina Moschini"
                                className={classes.image}
                            />
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className={classes.contentColumn}>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={classes.title}
                        >
                            Led by Silvina Moschini
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className={classes.textContent}
                        >
                            <p className={classes.leadText}>
                                Money4Women is led by technology entrepreneur and investor Silvina Moschini.
                            </p>
                            <p className={classes.description}>
                                She is known for building and scaling global companies, including a remote-work platform that achieved a $1B valuation during the pandemic.
                            </p>
                            <p className={classes.description}>
                                Through her work and advocacy, she has consistently championed financial empowerment and entrepreneurship for women around the world.
                            </p>
                            <p className={classes.description}>
                                Money4Women expands that mission through education, community, and long-term wealth building.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LedBySection;
