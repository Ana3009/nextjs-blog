import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    text_small: {
        fontSize: '1em',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8em'
        },
        [theme.breakpoints.up(759)]: {
            fontSize: '6em'
        }
    },
    
    text_red: {
        color: 'red'
    },

    mt_10: {
        marginTop: theme.spacing(10) 
    },

    mb_5: {
        marginBottom: theme.spacing(5)
    }
}))

export const generateStyles = () => {
    const classes = useStyles()
    
    return classes
}