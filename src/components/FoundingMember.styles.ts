import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        backgroundColor: '#F8F8FA', // Changed to match site base
        color: theme.palette.text.primary,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(16), // py-32
            paddingBottom: theme.spacing(16),
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
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch', // Stretch columns to equal height
        gap: theme.spacing(6), // gap-12
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(10), // gap-20
        }
    },
    imageColumn: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50%', // w-1/2
        }
    },
    contentColumn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically next to image
        [theme.breakpoints.up('md')]: {
            width: '50%', // w-1/2
        }
    },
    imageWrapper: {
        position: 'relative',
        height: '100%', // Take full height
        minHeight: '360px', // Fallback for mobile
        maxHeight: '530px', // Prevent the portrait from getting too tall
        borderRadius: '1.5rem', // rounded-3xl
        overflow: 'hidden',
    },
    imagePlaceholder: {
        width: '100%',
        height: '100%',
        backgroundColor: '#D1D5DB', // Light Gray
    },
    title: {
        fontSize: '3rem', // text-5xl
        fontFamily: theme.typography.h1.fontFamily, // Display
        fontWeight: 700, // font-bold
        marginBottom: theme.spacing(4), // mb-8
        lineHeight: 1.1,
        color: theme.palette.text.primary, // Dark blue/indigo
        [theme.breakpoints.up('md')]: {
            fontSize: '4rem', // text-6xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5rem', // text-7xl
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
        fontSize: '1rem', // Smaller text for the rest
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(4),
        lineHeight: 1.6,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    },
    bold: {
        whiteSpace: 'nowrap',
        fontWeight: 700,
        color: theme.palette.primary.main,
    },
    button: {
        backgroundColor: theme.palette.primary.main, // Primary Purple
        color: theme.palette.common.white,
        padding: '16px 36px', // px-8 py-4
        fontSize: '1rem', // text-base
        fontWeight: 700,
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.text.primary, // Dark Indigo
            transform: 'scale(1.05)',
        }
    }
}));
