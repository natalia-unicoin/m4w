import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        backgroundColor: '#F1F1F1', // Off-white to distinguish from previous section
        color: theme.palette.common.black,
        borderTop: `1px solid ${theme.palette.grey[200]}`,
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
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: theme.spacing(6), // gap-12 -> 48px
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: theme.spacing(10), // gap-20
        }
    },
    textColumn: {
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40%',
        }
    },
    contentColumn: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        [theme.breakpoints.up('md')]: {
            width: '60%',
        }
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700, // bold
        fontSize: '2.25rem', // text-4xl
        marginBottom: theme.spacing(3), // mb-6
        lineHeight: 1.1, // leading-tight
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem', // text-5xl
        }
    },
    highlight: {
        fontFamily: theme.typography.subtitle1.fontFamily, // Caveat
        fontSize: '3.5rem', // text-5xl
        color: theme.palette.primary.main, // Purple
        [theme.breakpoints.up('md')]: {
            fontSize: '4.5rem', // text-6xl
        }
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: theme.spacing(4),
    },
    leadText: {
        fontSize: '1.125rem', // text-xl
        color: theme.palette.text.primary,
        lineHeight: 1.625, // leading-relaxed
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-2xl
        }
    },
    description: {
        fontSize: '1rem', // text-base
        color: theme.palette.text.primary,
        lineHeight: 1.625, // leading-relaxed
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem', // text-lg
        }
    },
    button: {
        backgroundColor: theme.palette.primary.main, // Primary Purple
        color: theme.palette.common.white,
        padding: '16px 36px',
        fontSize: '1rem', // text-base
        fontWeight: 700,
        marginTop: theme.spacing(2),
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'all 0.3s',
        alignSelf: 'flex-start',
        '&:hover': {
            backgroundColor: theme.palette.text.primary, // Dark Indigo
            transform: 'scale(1.05)',
        }
    }
}));
