'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/context/ModalContext';
import { useStyles } from './TokenSection.styles';

const FoundingOfferSection = () => {
    const { classes } = useStyles();
    const { openJoinModal } = useModal();

    const offerCategories = [
        {
            title: "The Program",
            icon: "📚",
            color: "#2A2671", // Purple
            items: [
                "6-Week Financial Capability sprint.",
                "Direct access to the core team.",
                "Live working sessions.",
                "Lifetime access to the curriculum."
            ]
        },
        {
            title: "The Community",
            icon: "🤝",
            color: "#B79DEC", // Light Purple
            items: [
                "Global network of peers.",
                "Private member directory.",
                "Investment circles.",
                "Matchmaking & introductions."
            ]
        },
        {
            title: "The Experience",
            icon: "✨",
            color: "#BFD35B", // Lime Green
            items: [
                "Early access to Unicoin allocations.",
                "Tickets to global Money4Women events.",
                "Priority access to new initiatives.",
                "Founding Member digital ID."
            ]
        }
    ];

    return (
        <section id="offer" className={classes.section}>
            <div className={classes.container}>
                {/* Header */}
                <div className={classes.header}>
                    <h2 className={classes.title}>
                        Founding Member Offer
                    </h2>
                    <p className={classes.description}>
                        Join the first cohort and gain lifetime value.
                    </p>
                </div>

                {/* Offer Grid */}
                <div className={classes.grid}>
                    {offerCategories.map((category, index) => (
                        <div key={index} className={`${classes.card} group`}>
                            <div
                                className={`${classes.blurCircle} group-hover:opacity-100`}
                                style={{ backgroundColor: `${category.color}15` }}
                            />

                            <div className={classes.cardHeader}>
                                <span className={classes.icon}>{category.icon}</span>
                                <h3 className={classes.cardTitle}>
                                    {category.title}
                                </h3>
                            </div>

                            <ul className={classes.list}>
                                {category.items.map((item, i) => (
                                    <li key={i} className={classes.listItem}>
                                        <div className={classes.dot} style={{ backgroundColor: category.color }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={classes.ctaWrapper}>
                    <motion.button
                        onClick={openJoinModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={classes.button}
                    >
                        Apply for the Founding Cohort
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default FoundingOfferSection;
