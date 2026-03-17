import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(16),
        paddingBottom: theme.spacing(16),
        backgroundColor: '#111111', // Deep dark modern background
        backgroundImage: 'radial-gradient(circle at top right, rgba(42, 38, 113, 0.4), transparent 50%), radial-gradient(circle at bottom left, rgba(183, 157, 236, 0.1), transparent 50%)',
        color: theme.palette.common.white,
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(24),
            paddingBottom: theme.spacing(24),
        }
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        position: 'relative',
        zIndex: 2,
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
        maxWidth: '900px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    overTitle: {
        fontFamily: theme.typography.body1.fontFamily, // Inter
        color: '#111111', // Black text
        backgroundColor: '#ffffff', // White background
        fontSize: '0.875rem', // Smaller text for a badge
        fontWeight: 600, // SemiBold
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        padding: '8px 24px', // Pill padding
        borderRadius: '9999px', // Pill shape
        marginBottom: theme.spacing(4),
        display: 'inline-block', // Make it fit the content
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(8),
        fontSize: '3.5rem',
        lineHeight: 1.1,
        letterSpacing: '-0.02em',
        [theme.breakpoints.up('md')]: {
            fontSize: '5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6.5rem',
            lineHeight: 1,
        }
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    leadText: {
        fontSize: '1.25rem',
        color: theme.palette.common.white,
        lineHeight: 1.8,
        fontWeight: 400,
        marginBottom: theme.spacing(6),
        maxWidth: '900px',
        margin: '0 auto',
        opacity: 0.9,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem',
        }
    },
    middleText: {
        fontSize: '1.125rem',
        fontWeight: 700,
        lineHeight: 1.8,
        color: theme.palette.info.main,
        marginBottom: theme.spacing(6),
        maxWidth: '800px',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.375rem',
        }
    },
    description: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.8,
        color: 'rgba(255, 255, 255, 0.7)',
        maxWidth: '800px',
        margin: '0 auto',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    }
}));
