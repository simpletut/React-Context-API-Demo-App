import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { v4 as uuidv4 } from 'uuid';
import { PostsContext } from './../../Providers/Posts/posts.provider';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL_STATE = {
  title: '',
  body: ''
};

const AddPost = props => {
  const history = useHistory();
  const { createPost } = useContext(PostsContext);
  const [formValues, setFormValues] = useState({ ...INITIAL_STATE });
  const classes = useStyles();

  const handleInput = evt => {
    if (!evt) return;

    const { value, name } = evt.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const config = {
      ...formValues,
      id: uuidv4()
    };

    createPost(config);
    history.push('/');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <AddCircleIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Add New Post
        </Typography>

        <form className={classes.form} onSubmit={handleSubmit}>

          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                name="title"
                value={formValues.title}
                onChange={handleInput}
                label="Title"
                fullWidth
                required
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="body"
                value={formValues.body}
                onChange={handleInput}
                required
                label="Post"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add
          </Button>

        </form>

      </div>
    </Container>
  );
};

export default AddPost;
