import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: '#f8f8f8',
        padding: '50px 0px 20px'
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: '30px',
    },
    cardGrid:{
        padding: '20px 0',
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'

    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1',
    },
    footer: {
        backgroundColor: '#f8f8f8',
        padding: '50px 0px',
    },
}))

export default useStyles