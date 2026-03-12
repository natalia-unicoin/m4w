'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getImagePath } from '@/utils/image';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './FoundingMember.styles';
import { Box } from '@mui/material';

const FoundingMember = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {/* Image Side - Placeholder */}
                    <div className={classes.imageColumn}>
                        <div className={classes.imageWrapper}>
                            <img
                                src={getImagePath("assets/founding-member-phone.jpg")}
                                alt="Founding Member App Experience"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%' }}
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className={classes.contentColumn}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className={classes.title}>
                                Become a Founding Member
                            </h2>
                            <p className={classes.leadText}>
                                Join the first cohort of leaders building wealth with clarity, discipline, and long-term strategy.
                            </p>
                            <p className={classes.description}>
                                <span className={classes.bold}>Money4Women</span> is designed for high-performing professionals who want to move from earning well to building wealth intentionally.<br /><br />
                                As a founding member, you gain early access to the program, connect with a global community of ambitious women, and help shape the future of the movement.
                            </p>

                            <motion.button
                                onClick={openJoinModal}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={classes.button}
                            >
                                Join Money4Women
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundingMember;
