import { makeStyles } from '@material-ui/core/styles';


function style() {
    
    makeStyles((theme) => ({
        
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.success.main,
      },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));}
  export default style;