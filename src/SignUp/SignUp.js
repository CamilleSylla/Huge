import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyle = theme => ({
        
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
});




class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpEmail: "",
      signUpPassword:"",
      signUpPrenom: "",
      signUpNom: ""
    }
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onPrenomChange = this.onPrenomChange.bind(this);
    this.onNomChange = this.onNomChange.bind(this);
  }
  onNomChange =(event) => {
    this.setState({signUpNom: event.target.value})
  }

  onPrenomChange = (event) => {
    this.setState({signUpPrenom: event.target.value})
  }
 
  onEmailChange = (event) => {
    this.setState({signUpEmail: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({signUpPassword: event.target.value})
  }
  onSubmitSignUp = (event) => {
    fetch('http://localhost:3001/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signUpEmail,
        password: this.state.signUpPassword,
        nom: this.state.signUpNom,
        prenom: this.state.signUpPrenom
      })
    }).then(alert("Un email de confirmation vous a été envoyer"))
  }

  
  render (){
    const {classes} = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="nom"
                  name="nom"
                  variant="outlined"
                  required
                  fullWidth
                  id="nom"
                  label="Nom"
                  onChange={this.onNomChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="prenom"
                  label="prenom"
                  name="Prénom"
                  onChange={this.onPrenomChange}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Adresse email"
                  name="email"
                  autoComplete="email"
                  onChange={this.onEmailChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.onPasswordChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              href="http://localhost:3000"
              onClick={this.onSubmitSignUp}
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }

  
}

export default withStyles(useStyle)(SignUp);