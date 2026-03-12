import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end', // Push content to bottom
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.common.white,
        color: theme.palette.text.primary,
        paddingBottom: theme.spacing(8), // Add padding at bottom
        [theme.breakpoints.up('md')]: {
            paddingBottom: theme.spacing(12),
        }
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundColor: theme.palette.text.primary, // Dark Indigo / Violeta oscuro
    },
    content: {
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        maxWidth: '64rem', // max-w-5xl
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3rem',
        backgroundColor: 'transparent',
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // bold
        marginBottom: theme.spacing(4),
        lineHeight: 1.1,
        color: theme.palette.common.white,
        fontSize: '2.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    subtitle: {
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: '1.25rem', // Increased from 1.125rem
        marginBottom: theme.spacing(6),
        color: theme.palette.common.white,
        maxWidth: '48rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.6,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // Increased from 1.25rem
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat (Hand)
        color: theme.palette.secondary.main, // Switched to Lime Green for better contrast
        fontSize: '3.5rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5.5rem',
        }
    },
    ctaContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    ctaButton: {
        backgroundColor: theme.palette.primary.main, // Purple
        color: theme.palette.common.white,
        padding: '16px 36px',
        borderRadius: '9999px',
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.text.primary, // Dark Indigo
            transform: 'scale(1.05)',
        },
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        color: theme.palette.common.white, // White text
        padding: '14px 34px',
        borderRadius: '9999px',
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        border: `2px solid ${theme.palette.common.white}`, // White border
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.text.primary, // Dark Indigo text on hover
            transform: 'scale(1.05)',
        },
    }
}));
