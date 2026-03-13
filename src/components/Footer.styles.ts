import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
    footer: {
        backgroundColor: '#FDF2EC',
        color: theme.palette.common.black,
        paddingTop: theme.spacing(10), // py-20 (approx 80px)
        paddingBottom: theme.spacing(10),
        borderTop: `1px solid ${theme.palette.grey[100]}`,
    },
    container: {
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme.spacing(3), // px-6
        paddingRight: theme.spacing(3),
    },
    mainGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))', // grid-cols-1
        gap: theme.spacing(6), // gap-12 = 48px -> use spacing(6) ~48px
        marginBottom: theme.spacing(10), // mb-20
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))', // md:grid-cols-12
        }
    },
    brandColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 4 / span 4',
        }
    },
    logoWrapper: {
        width: '208px', // w-52
        marginBottom: theme.spacing(3), // mb-6
    },
    logo: {
        width: '100%',
        height: 'auto',
    },
    description: {
        color: theme.palette.grey[800], // Dark gray instead of purple
        lineHeight: 1.625, // leading-relaxed
        maxWidth: '24rem', // max-w-sm
        marginBottom: theme.spacing(4), // mb-8
    },
    socialWrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(3), // gap-6
    },
    socialIcon: {
        width: '48px', // w-12
        height: '48px', // h-12
        borderRadius: '50%',
        backgroundColor: theme.palette.grey[50], // gray-50
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black,
        transition: 'all 0.3s',
        '&:hover': {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        }
    },
    socialSvg: {
        transition: 'transform 0.3s',
        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    // Links Columns
    linksColumn: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
        }
    },
    linksColumnFirst: {
        gridColumn: 'span 1 / span 1',
        [theme.breakpoints.up('md')]: {
            gridColumn: 'span 2 / span 2',
            gridColumnStart: 7, // md:col-start-7
        }
    },
    columnTitle: {
        fontWeight: 700,
        marginBottom: theme.spacing(3), // mb-6
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2), // space-y-4
        color: theme.palette.grey[800], // Dark gray instead of purple
    },
    linkItem: {
        color: 'inherit',
        textDecoration: 'none',
        transition: 'color 0.2s',
        '&:hover': {
            color: theme.palette.common.black,
        }
    },
    // Disclaimer
    disclaimerContainer: {
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6), // Added space below disclaimer
        borderTop: `1px solid ${theme.palette.grey[100]}`,
        textAlign: 'left',
        color: theme.palette.text.primary, // Using primary color for better contrast
    },
    disclaimerTitle: {
        fontSize: '0.875rem', // text-sm
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        marginBottom: theme.spacing(2),
        color: theme.palette.text.primary,
    },
    disclaimerText: {
        fontSize: '0.75rem', // text-xs
        lineHeight: 1.6,
        color: theme.palette.text.primary, // Ensure strong contrast
        marginBottom: theme.spacing(2),
        '&:last-child': {
            marginBottom: 0,
        }
    },
    // Bottom Bar
    bottomBar: {
        paddingTop: theme.spacing(4), // pt-8
        borderTop: `1px solid ${theme.palette.grey[100]}`,
    },
    tagline: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(3),
        fontSize: '10px', // text-[10px]
        fontWeight: 700,
        letterSpacing: '0.2em', // tracking-[0.2em]
        textTransform: 'uppercase',
        color: theme.palette.grey[400], // gray-400
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            fontSize: '0.75rem', // md:text-xs
        }
    },
    separator: {
        display: 'none',
        color: theme.palette.grey[300],
        [theme.breakpoints.up('md')]: {
            display: 'block',
        }
    },
    copyright: {
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center',
        fontSize: '0.75rem', // text-xs, clearer than 10px
        color: theme.palette.grey[500], // Much more readable contrast
    },
    copyrightBrand: {
        whiteSpace: 'nowrap',
        fontWeight: 700,
    }
}));
