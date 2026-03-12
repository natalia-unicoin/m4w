import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        backgroundColor: '#F9F9F9', // Off-white to distinguish from previous section
        color: theme.palette.text.primary,
        overflow: 'hidden',
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
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    title: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        marginBottom: theme.spacing(6),
        fontSize: '2.5rem',
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '4.5rem',
        }
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    leadText: {
        fontSize: '1.25rem', // text-xl
        color: theme.palette.text.primary,
        lineHeight: 1.625, // leading-relaxed
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem', // text-2xl
        }
    },
    description: {
        fontSize: '1rem', // text-base
        fontWeight: 400,
        lineHeight: 1.625, // leading-relaxed
        color: theme.palette.text.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem', // text-lg
        }
    }
}));
