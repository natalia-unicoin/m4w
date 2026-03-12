import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    section: {
        paddingTop: theme.spacing(10), // py-20
        paddingBottom: theme.spacing(10),
        backgroundColor: theme.palette.common.white,
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
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(6),
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: theme.spacing(12),
        }
    },
    imageColumn: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '45%',
        }
    },
    imageWrapper: {
        position: 'relative',
        width: '100%',
        height: '600px',
        borderRadius: '24px', // Apple-style rounded corners
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)', // Subtle soft shadow
        [theme.breakpoints.up('md')]: {
            height: '700px',
        }
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center 15%', // lindo crop, focusing on upper body/face
        transition: 'transform 0.7s ease',
        '&:hover': {
            transform: 'scale(1.03)',
        }
    },
    contentColumn: {
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            width: '55%',
            paddingRight: theme.spacing(4),
        }
    },
    title: {
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        fontSize: '2.5rem',
        color: theme.palette.text.primary,
        marginBottom: theme.spacing(3),
        lineHeight: 1.1,
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        }
    },
    textContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    leadText: {
        fontSize: '1.25rem',
        color: theme.palette.text.primary,
        lineHeight: 1.625, // leading-relaxed
        marginBottom: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
        }
    },
    description: {
        fontSize: '1rem',
        color: theme.palette.text.primary,
        lineHeight: 1.625, // leading-relaxed
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            fontSize: '1.125rem',
        }
    }
}));
