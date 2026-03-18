import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(6), // py-12
        paddingBottom: theme.spacing(6),
        backgroundColor: theme.palette.background.default, // FDF2EC
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(10), // py-20
            paddingBottom: theme.spacing(10),
        }
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2), // px-4
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4), // px-8
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '60px',
            paddingRight: '60px',
        }
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        marginBottom: theme.spacing(6), // mb-12
    },
    titleWrapper: {
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(4), // mb-8
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // bold
        lineHeight: 1.1,
        color: theme.palette.text.primary,
        fontSize: '2.25rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat
        fontSize: '3.5rem',
        marginLeft: theme.spacing(1), // ml-2
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem', // text-7xl
            marginLeft: theme.spacing(2), // ml-4
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5.5rem', // text-8xl
        }
    },
    descriptionWrapper: {
        maxWidth: '48rem', // max-w-3xl
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    description: {
        fontSize: '1.25rem', // text-lg
        fontWeight: 400,
        lineHeight: 1.625, // leading-relaxed
        color: theme.palette.text.primary,
        textWrap: 'balance',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // text-xl
        }
    },
    // Scroll/Grid Container
    scrollContainer: {
        display: 'flex',
        gap: theme.spacing(2), // gap-4
        overflowX: 'auto',
        scrollSnapType: 'x mandatory',
        paddingBottom: theme.spacing(4), // pb-8
        marginLeft: theme.spacing(-2), // -mx-4
        paddingLeft: theme.spacing(2), // px-4
        paddingRight: theme.spacing(2),
        scrollbarWidth: 'none', // scrollbar-hide
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', // md:grid-cols-2
            overflow: 'visible',
            scrollSnapType: 'none',
            paddingBottom: 0,
            margin: 0,
            padding: 0,
        },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', // lg:grid-cols-4
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
    card: {
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '1.5rem', // rounded-3xl
        cursor: 'pointer',
        height: '500px',
        [theme.breakpoints.up('md')]: {
            height: '600px',
        }
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
        transition: 'background-color 0.5s',
    },
    content: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: theme.spacing(4), // p-8
    },
    cardTitle: {
        fontSize: '1.5rem', // text-2xl
        fontFamily: theme.typography.subtitle1.fontFamily, // Cursive (Caveat)
        fontWeight: 700, // Bold
        color: theme.palette.common.white, // Cream
        marginBottom: theme.spacing(2), // mb-4
        lineHeight: 1.1,
        minHeight: '2.2em', // Ensures all titles have the same height for top alignment
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem', // text-3xl
        }
    },
    descriptionContainer: {
        overflow: 'hidden',
        transition: 'all 0.5s ease',
    },
    cardDescription: {
        fontSize: '1rem', // Smaller text to fit better
        color: theme.palette.common.white,
        lineHeight: 1.5,
        fontWeight: 400,
        transition: 'all 0.5s ease',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    },
    arrowButton: {
        position: 'absolute',
        top: theme.spacing(3), // top-6
        right: theme.spacing(3), // right-6
        width: '48px', // w-12
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(-45deg)',
        transition: 'all 0.5s',
    },
    // Mobile Indicators
    mobileIndicators: {
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(1),
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    indicatorDot: {
        height: '8px',
        borderRadius: '9999px',
        transition: 'all 0.3s',
    }
}));
