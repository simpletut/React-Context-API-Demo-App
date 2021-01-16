import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Container } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { PostsContext } from './../../Providers/Posts/posts.provider';

const useStyles = makeStyles((theme) => ({
  topMargin: {
    marginTop: 50,
  },
  btnWrap: {
    marginTop: 20,
  },
  dataTable: {
    backgroundColor: '#fff'
  }
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 300 },
  { field: 'body', headerName: 'Post Body', width: 500 },
];

const Posts = ({ }) => {
  const classes = useStyles();
  const { posts, removePost } = useContext(PostsContext);
  const [select, setSelection] = useState([]);

  const deletePost = () => {
    if (!Array.isArray(select) && select.length < 1) return;
    removePost(select);
  };

  return (
    <Container>
      <Grid container className={classes.topMargin}>
        <Grid item xs={12}>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              className={classes.dataTable}
              columns={columns}
              rows={posts}
              pageSize={5}
              checkboxSelection
              onSelectionChange={({ rowIds }) => {
                setSelection(rowIds);
              }} />
          </div>

        </Grid>

        <Grid item className={classes.btnWrap}>
          <Button
            color="secondary"
            onClick={deletePost}
          >Delete</Button>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Posts;
