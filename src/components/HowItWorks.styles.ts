import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        backgroundColor: '#F8F8FA',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(6),
        color: theme.palette.text.primary,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(10), // py-20
            paddingBottom: theme.spacing(10),
        }
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '60px',
            paddingRight: '60px',
        }
    },
    textWrapper: {
        maxWidth: '800px',
        marginBottom: theme.spacing(8),
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    overTitle: {
        fontSize: '1rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        color: theme.palette.text.primary, // Or primary.main
        textTransform: 'uppercase',
        marginBottom: theme.spacing(2),
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(4),
        fontSize: '2.5rem',
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily,
        color: theme.palette.primary.main, // Purple
        fontSize: '3.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5.5rem',
        }
    },
    leadText: {
        fontSize: '1.25rem', // Larger text for the first sentence
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(4),
        lineHeight: 1.6,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    description: {
        fontSize: '1rem', // text-base
        fontWeight: 400,
        lineHeight: 1.625, // leading-relaxed
        color: theme.palette.text.primary, // use dark primary
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem', // text-lg
        }
    },
    ctaButton: {
        backgroundColor: theme.palette.primary.main, // Purple
        color: theme.palette.common.white,
        padding: '16px 36px',
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        marginTop: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.text.primary, // Dark Indigo
            transform: 'scale(1.05)',
        }
    },
    // Grid/Scroll Container
    scrollContainer: {
        display: 'flex',
        gap: theme.spacing(2),
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        paddingBottom: theme.spacing(4),
        marginLeft: theme.spacing(-2),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: theme.spacing(4),
            overflow: 'visible',
            scrollSnapType: 'none',
            paddingBottom: 0,
            margin: 0,
            padding: 0,
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: theme.spacing(4),
        }
    },
    cardWrapper: {
        display: 'block',
        minWidth: '85vw',
        scrollSnapAlign: 'center',
        [theme.breakpoints.up('md')]: {
            minWidth: 0,
        }
    },
    cardInner: {
        position: 'relative',
        height: '400px',
        width: '100%',
        cursor: 'pointer',
        perspective: '1000px',
        [theme.breakpoints.up('md')]: {
            height: '500px',
        }
    },
    cardFlipper: {
        position: 'relative',
        width: '100%',
        height: '100%',
        transition: 'transform 0.7s',
        transformStyle: 'preserve-3d', // preserve-3d
    },
    cardFront: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden', // backface-hidden
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
        boxShadow: theme.shadows[4], // shadow-lg
        backgroundColor: theme.palette.background.default,
    },
    cardImagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D1D5DB', // Light Gray Placeholder
        transition: 'transform 0.7s',
    },
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(42, 38, 113, 0.4)', // Dark Indigo with opacity
        transition: 'background-color 0.3s',
    },
    stepIdLarge: {
        position: 'absolute',
        top: theme.spacing(2),
        right: theme.spacing(3),
        fontSize: '6rem',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 900,
        opacity: 0.15,
        zIndex: 10,
        color: theme.palette.common.white,
        lineHeight: 1,
        pointerEvents: 'none',
        [theme.breakpoints.up('md')]: {
            fontSize: '8rem',
        }
    },
    frontTitleWrapper: {
        position: 'absolute',
        bottom: theme.spacing(4), // bottom-8
        left: theme.spacing(4), // left-8
    },
    frontTitle: {
        fontSize: '2.5rem',
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        color: theme.palette.common.white,
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3rem',
        }
    },
    cardBack: {
        position: 'absolute',
        inset: 0,
        backfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        borderRadius: '1.5rem',
        padding: theme.spacing(4), // p-8
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#F8F8FA',
        borderWidth: '2px', // border-2
        borderStyle: 'solid',
    },
    backStepId: {
        fontSize: '3rem', // text-5xl
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(2), // mb-4
        opacity: 0.2,
    },
    backTitle: {
        fontSize: '2.5rem', // text-4xl
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(2), // mb-4
    },
    backDescription: {
        fontSize: '1.125rem', // text-lg
        color: theme.palette.text.primary,
        lineHeight: 1.625,
        fontWeight: 400,
    },
    mobileIndicators: {
        display: 'none',
    },
    indicatorDot: {
        display: 'none',
    },
    // New Grid Layout Styles
    bentoGrid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)',
        gap: theme.spacing(3),
        marginTop: theme.spacing(6),
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr', // 2 equal columns instead of 3
            gridTemplateRows: 'repeat(2, 320px)',
        }
    },
    bentoBlock: {
        borderRadius: '1.5rem', // Consistent border radius for all blocks
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: theme.shadows[4],
    },
    bentoBlockText: {
        gridColumn: 'span 1',
        backgroundColor: theme.palette.primary.main, // Dark Indigo / Purple
        color: theme.palette.common.white,
        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: '1.5rem', // Force radius here as well
        boxShadow: theme.shadows[4],
        [theme.breakpoints.up('lg')]: {
            gridRow: 'span 2',
        }
    },
    bentoPill: {
        backgroundColor: theme.palette.common.white,
        color: '#111111',
        borderRadius: '9999px',
        padding: '4px 12px',
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: theme.spacing(4),
        display: 'inline-block',
    },
    bentoTitle: {
        fontSize: '2rem',
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        lineHeight: 1.2,
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            fontSize: '2.5rem',
        }
    },
    bentoDescription: {
        fontSize: '1rem',
        color: 'rgba(255, 255, 255, 0.8)', // Lighter text on dark background
        lineHeight: 1.6,
        marginBottom: theme.spacing(4),
    },
    bentoButton: {
        backgroundColor: theme.palette.secondary.main, // Lime Green
        color: theme.palette.primary.main, // Dark Indigo
        padding: '16px 36px',
        borderRadius: '9999px',
        fontWeight: 700,
        textTransform: 'uppercase', // Match other uppercase CTA buttons
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s',
        marginTop: 'auto',
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.primary.main,
            transform: 'scale(1.05)',
        }
    },
    bentoImageTopRight: {
        gridColumn: 'span 1',
        backgroundColor: theme.palette.secondary.main, // Lime Green
        minHeight: '300px',
        borderRadius: '1.5rem',
        [theme.breakpoints.up('lg')]: {
            gridRow: 'span 1',
            minHeight: 'auto',
        }
    },
    bentoImageBottomRight: {
        gridColumn: 'span 1',
        backgroundColor: theme.palette.text.secondary, // Medium Purple/Indigo
        minHeight: '300px',
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        color: theme.palette.common.white,
        [theme.breakpoints.up('lg')]: {
            gridRow: 'span 1',
            minHeight: 'auto',
        }
    },
    bentoOverlayTitle: {
        fontSize: '1.5rem',
        fontFamily: theme.typography.h3.fontFamily,
        fontWeight: 600,
        marginTop: theme.spacing(2),
    }
}));
