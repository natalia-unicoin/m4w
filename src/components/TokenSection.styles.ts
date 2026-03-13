import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: theme.spacing(6), // py-12
        paddingBottom: theme.spacing(6),
        backgroundColor: '#F8F8FA',
        color: theme.palette.text.primary,
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            paddingTop: theme.spacing(12), // py-24
            paddingBottom: theme.spacing(12),
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
    header: {
        marginBottom: theme.spacing(8), // mb-16
        maxWidth: '56rem', // max-w-4xl
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            marginBottom: theme.spacing(10), // mb-20
        }
    },
    title: {
        fontSize: '2.5rem', // text-4xl
        fontFamily: theme.typography.h1.fontFamily, // Display
        fontWeight: 700, // font-bold
        marginBottom: theme.spacing(3), // mb-6
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem', // text-5xl
            marginBottom: theme.spacing(4), // mb-8
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem', // text-6xl
        }
    },
    description: {
        fontSize: '1.125rem', // text-lg
        fontWeight: 400,
        lineHeight: 1.625, // leading-relaxed
        color: theme.palette.text.primary,
        maxWidth: '42rem', // max-w-2xl
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.up('md')]: {
            fontSize: '1.25rem', // text-xl
        }
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr)', // prevent overflow
        gap: theme.spacing(4), // gap-8
        marginBottom: theme.spacing(8),
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
            gap: theme.spacing(6), // gap-12
        }
    },
    card: {
        backgroundColor: '#F8F8FA',
        padding: theme.spacing(4), // p-8
        borderRadius: '1.5rem', // rounded-3xl
        border: `1px solid ${theme.palette.grey[200]}`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.5s',
        '&:hover': {
            boxShadow: theme.shadows[10], // shadow-2xl
            transform: 'translateY(-0.5rem)', // -translate-y-2
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5), // p-10
            borderRadius: '2rem',
        }
    },
    blurCircle: {
        position: 'absolute',
        top: '-2rem',
        right: '-2rem',
        width: '12rem',
        height: '12rem',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0,
        transition: 'opacity 0.5s',
        opacity: 0.5,
    },
    cardHeader: {
        position: 'relative',
        zIndex: 10,
        marginBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    icon: {
        fontSize: '2.5rem',
        marginBottom: theme.spacing(2),
    },
    cardTitle: {
        fontSize: '2rem',
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        lineHeight: 1.2,
        color: theme.palette.text.primary,
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        flexGrow: 1,
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), // space-y-4
    },
    listItem: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: theme.spacing(1.5), // gap-3
        fontSize: '1rem', // text-base
        color: theme.palette.text.primary,
        paddingBottom: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    },
    dot: {
        width: '0.5rem', // w-2
        height: '0.5rem',
        borderRadius: '50%',
        marginTop: '0.4rem', // Aligned with text
        flexShrink: 0,
    },
    ctaWrapper: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(4),
    },
    button: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main, // Primary Purple
        color: theme.palette.common.white,
        padding: '16px 36px',
        borderRadius: '9999px', // rounded-full
        fontWeight: 700,
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        transition: 'all 0.3s',
        cursor: 'pointer',
        border: 'none',
        '&:hover': {
            backgroundColor: theme.palette.text.primary, // Dark Indigo
        }
    }
}));
