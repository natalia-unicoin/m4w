import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        position: 'relative',
        minHeight: '120vh', // Stretch container taller
        width: '100%',
        display: 'flex',
        alignItems: 'flex-end', // Push content to bottom
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#F8F8FA',
        color: theme.palette.text.primary,
        paddingBottom: 0, // Removed padding to let it hit the bottom edge
        [theme.breakpoints.up('md')]: {
            minHeight: '130vh', // Even taller on desktop to ensure face is clear
            paddingBottom: 0,
        }
    },
    bgWrapper: {
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundColor: theme.palette.info.main, // Fallback color
        backgroundSize: 'cover',
        backgroundPosition: 'center top', // Keep face visible at the top
        backgroundRepeat: 'no-repeat',
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
        paddingTop: '3rem',
        paddingBottom: '2rem', // Minimal padding down here
        backgroundColor: 'transparent',
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // bold
        marginBottom: theme.spacing(1), // Extremely tight margin between title and subtitle
        lineHeight: 0.95, // Even tighter line-height
        color: theme.palette.common.white,
        fontSize: '3rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '4.25rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5.25rem',
        }
    },
    subtitle: {
        fontFamily: theme.typography.body1.fontFamily,
        fontSize: '1.25rem', // Softer size to match the screenshot
        marginBottom: theme.spacing(6),
        color: 'rgba(255, 255, 255, 0.85)', // Slight transparency for the subtitle
        maxWidth: '42rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        lineHeight: 1.6,
        textWrap: 'balance',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // Slightly larger on tablet
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat (Hand)
        color: theme.palette.common.white, // Changed to white
        fontSize: '4rem',
        [theme.breakpoints.up('md')]: {
            fontSize: '5.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '6.75rem',
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
        padding: '12px 32px', // Slightly slimmer padding to match reference
        borderRadius: '9999px',
        fontSize: '0.875rem', // Clean, small UI size
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: '1px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.common.white,
            borderColor: theme.palette.common.white,
        },
    },
    outlineButton: {
        backgroundColor: 'transparent',
        color: theme.palette.common.white,
        padding: '12px 32px',
        borderRadius: '9999px',
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        border: '1px solid rgba(255, 255, 255, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: theme.palette.common.white,
        },
    },
    scrollIndicatorContainer: {
        position: 'absolute',
        bottom: theme.spacing(4),
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(1),
        zIndex: 20,
        [theme.breakpoints.up('md')]: {
            bottom: theme.spacing(8),
        }
    },
    scrollMouse: {
        width: '30px',
        height: '50px',
        border: `2px solid ${theme.palette.text.primary}`,
        borderRadius: '15px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '6px',
        opacity: 0.6,
    },
    scrollWheel: {
        width: '4px',
        height: '8px',
        backgroundColor: theme.palette.text.primary,
        borderRadius: '2px',
    },
    sideTracker: {
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '4px',
        height: '120px',
        backgroundColor: 'rgba(0,0,0,0.1)',
        zIndex: 20,
        display: 'none',
        [theme.breakpoints.up('lg')]: {
            display: 'block',
        }
    },
    sideTrackerFill: {
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '2px',
    },
    secondaryButton: {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary, // Dark text
        padding: '14px 34px',
        borderRadius: '9999px',
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        border: `2px solid ${theme.palette.text.primary}`, // Dark border
        cursor: 'pointer',
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.text.primary,
            color: theme.palette.common.white, // White text on hover
            transform: 'scale(1.05)',
        },
    }
}));
