'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './FourWays.styles';

import { getImagePath } from '../utils/image';

const FourWays = () => {
    const { classes } = useStyles();
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [expandedCard, setExpandedCard] = React.useState<number | null>(null);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const ways = [
        {
            title: "Clarity",
            description: "You see your financial reality clearly, your income, priorities, and long-term direction.",
            color: "#2A2671", // M4W Primary Purple
        },
        {
            title: "Structure",
            description: "You install a personal wealth system that organizes your money and strengthens your decision-making.",
            color: "#B79DEC" // M4W Light Purple
        },
        {
            title: "Investment Discipline",
            description: "You learn to evaluate opportunities with frameworks across traditional and digital assets, without hype or guesswork.",
            color: "#BFD35B", // M4W Lime Green
            image: '/3.png'
        },
        {
            title: "Leadership",
            description: "You turn financial capability into greater ownership, influence, and impact in your life and career.",
            color: "#2A2671", // M4W Dark Indigo
            image: '/4.png'
        }
    ];

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const width = scrollContainerRef.current.offsetWidth;
            const index = Math.round(scrollLeft / width);
            setActiveIndex(index);
        }
    };

    return (
        <section id="benefits" className={classes.section}>
            <div className={classes.container}>
                {/* Header */}
                <div className={classes.header}>
                    <div className={classes.titleWrapper}>
                        <h2 className={classes.title}>
                            What You Gain
                        </h2>
                    </div>
                </div>

                {/* Responsive Layout: Horizontal Scroll on Mobile, Grid on Desktop */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className={classes.scrollContainer}
                >
                    {ways.map((card, index) => (
                        <div
                            key={index}
                            className={classes.cardWrapper}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={classes.card}
                                onMouseEnter={() => setExpandedCard(index)}
                                onMouseLeave={() => setExpandedCard(null)}
                                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                            >
                                {/* Background Image Placeholder or Real Image */}
                                {card.image ? (
                                    <img 
                                        src={getImagePath(card.image)} 
                                        alt={card.title} 
                                        className={classes.cardImagePlaceholder} 
                                        style={{ objectFit: 'cover' }} 
                                    />
                                ) : (
                                    <div className={classes.cardImagePlaceholder} />
                                )}

                                {/* Overlay */}
                                <div
                                    className={classes.overlay}
                                    style={{ backgroundColor: expandedCard === index ? 'rgba(0, 0, 0, 0.6)' : 'rgba(42, 38, 113, 0.4)' }}
                                />

                                {/* Content */}
                                <div className={classes.content}>
                                    <h3 className={classes.cardTitle}>
                                        {card.title}
                                    </h3>

                                    <div
                                        className={classes.descriptionContainer}
                                        style={{
                                            maxHeight: expandedCard === index ? '200px' : '0',
                                            opacity: expandedCard === index ? 1 : 0
                                        }}
                                    >
                                        <p
                                            className={classes.cardDescription}
                                            style={{
                                                transform: expandedCard === index ? 'translateY(0)' : 'translateY(1rem)'
                                            }}
                                        >
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Arrow/Indicator - Top Right */}
                                    <div
                                        className={classes.arrowButton}
                                        style={{
                                            color: expandedCard === index ? '#000' : card.color,
                                            backgroundColor: expandedCard === index ? '#fff' : 'rgba(255, 255, 255, 0.2)',
                                            transform: expandedCard === index ? 'rotate(0deg)' : 'rotate(-45deg)'
                                        }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator */}
                <div className={classes.mobileIndicators}>
                    {ways.map((_, index) => (
                        <div
                            key={index}
                            className={classes.indicatorDot}
                            style={{
                                width: activeIndex === index ? '32px' : '8px',
                                backgroundColor: activeIndex === index ? '#2A2671' : '#e0e0e0'
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FourWays;
