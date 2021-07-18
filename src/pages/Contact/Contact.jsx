import emailjs from 'emailjs-com';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const CssTextField = withStyles({
  root: {
    marginTop: '.5rem',
    '& label': {
      color: 'aquamarine',
      '&.Mui-focused': {
        color: 'aquamarine',
      },
    },
    '& .MuiOutlinedInput-root': {
      color: 'aquamarine',
      '& fieldset': {
        borderColor: 'aquamarine',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'aquamarine',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  contact__container: {
    margin: '5rem auto',
    padding: '0 1rem',
    maxWidth: '40rem',
    minWidth: '375px',
    textAlign: 'center',
  },

  contact__title: {
    padding: '1.5rem',
    color: 'tomato',
    fontSize: '2rem',
  },

  contact__button: {
    marginTop: '1rem',
    width: '10rem',
    backgroundColor: 'tomato',
    color: 'white',
    fontSize: '.8rem',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_7jfncob',
      'template_3xf8yqd',
      e.target,
      'user_3F6GZsSnXPmRGN01YNBPg',
    );
    alert('Message Sent. Thank you for your contact. I will reply you ASAP.');
    e.target.reset();
  };

  return (
    <Box className={classes.contact__container}>
      <Typography className={classes.contact__title}>CONTACT ME</Typography>
      <form onSubmit={sendEmail}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <CssTextField
              placeholder="Please enter your name"
              label="Name"
              variant="outlined"
              fullWidth
              required
              name="from_name"
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              type="email"
              placeholder="Please enter your email"
              label="Email"
              variant="outlined"
              fullWidth
              required
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              type="number"
              placeholder="Please enter your phone number"
              label="Phone"
              variant="outlined"
              fullWidth
              name="phone"
            />
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              label="Message"
              multiline
              rows={6}
              placeholder="Type your message here"
              variant="outlined"
              fullWidth
              required
              name="message"
            />
          </Grid>
        </Grid>
        <Button type="submit" className={classes.contact__button}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
