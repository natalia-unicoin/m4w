import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        zIndex: 1,
        paddingTop: theme.spacing(10), // pb-20 equivalent for top
        paddingBottom: theme.spacing(10), // pb-20
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.text.primary, // Dark Indigo
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(16), // pb-32 equivalent for top
            paddingBottom: theme.spacing(16), // pb-32
        }
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    gradientOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'none', // Removed dark gradient for dark text visibility
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2), // px-4
        paddingRight: theme.spacing(2),
        position: 'relative',
        zIndex: 10,
        [theme.breakpoints.up('md')]: {
            paddingLeft: theme.spacing(4), // px-8
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '60px',
            paddingRight: '60px',
        }
    },
    contentWrapper: {
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        color: '#2A2671',
    },
    title: {
        fontSize: '3rem', // text-5xl equivalent
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(2),
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '4.25rem',
            marginBottom: theme.spacing(3),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5.25rem',
        }
    },
    subtitle: {
        fontSize: '1.25rem',
        fontWeight: 500,
        color: '#2A2671',
        marginBottom: theme.spacing(4),
        lineHeight: 1.5,
        textWrap: 'balance',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
            marginBottom: theme.spacing(5),
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Hand
        fontSize: '3rem', // text-5xl
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem', // text-7xl
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6rem', // text-9xl
        }
    },
    description: {
        fontSize: '1rem', // text-base
        fontWeight: 400, // font-normal
        marginBottom: theme.spacing(6), // mb-12
        maxWidth: '48rem', // max-w-3xl
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.625,
        color: '#2A2671', // updated color
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem', // text-lg
            marginBottom: theme.spacing(8),
        }
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(2), // gap-4
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(4), // gap-8
        }
    },
    primaryButton: {
        width: '100%',
        backgroundColor: '#2A2671', // User requested exact matching background
        color: theme.palette.common.white, // White text
        padding: '16px 32px', // px-8 py-4
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        letterSpacing: '0.1em', // tracking-widest
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: '#1d1a50', // darker shade on hover
            transform: 'scale(1.05)',
        },
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            padding: '24px 48px', // px-12 py-6
            fontSize: '1rem', // text-base
        }
    },
    secondaryButton: {
        width: '100%',
        backgroundColor: 'transparent',
        color: '#2A2671', // updated to match text
        padding: '16px 32px',
        fontSize: '0.875rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        border: `1px solid #2A2671`,
        borderRadius: '9999px',
        backdropFilter: 'blur(4px)',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'rgba(42,38,113,0.1)', // #2A2671 with 10% opacity
        },
        [theme.breakpoints.up('md')]: {
            width: 'auto',
            padding: '24px 48px',
            fontSize: '1rem',
        }
    }
}));
