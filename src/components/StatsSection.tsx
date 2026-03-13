'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './StatsSection.styles';

const CommunitySection = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();
    const pathname = usePathname();
    const isPastel = pathname === '/alternate';

    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.wrapper}>
                    {/* Title */}
                    <div className={classes.textColumn}>
                        <h2 className={classes.title}>
                            A Global <br />
                            <span className={classes.highlight} style={isPastel ? { color: '#A88AEE' } : undefined}>Community</span><br />
                            for Builders,<br />
                            Investors, and<br />
                            Leaders.
                        </h2>
                    </div>

                    {/* Content */}
                    <div className={classes.contentColumn}>
                        <div className={classes.textContent}>
                            <p className={classes.leadText}>
                                <strong>Money4Women</strong> connects ambitious professionals across industries, cities, and disciplines.
                            </p>
                            <p className={classes.description}>
                                Inside the community you will meet builders creating new opportunities, investors developing disciplined portfolios, and leaders using financial capability to expand their impact.<br /><br />
                                This is a network designed to accelerate growth, share frameworks, and create meaningful connections.
                            </p>
                        </div>
                        <motion.button
                            onClick={openJoinModal}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={classes.button}
                            style={isPastel ? { backgroundColor: '#A88AEE', color: '#ffffff' } : undefined}
                        >
                            Apply to the Community
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
