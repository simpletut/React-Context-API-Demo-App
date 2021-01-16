import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Container } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

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

const rows = [
  {
    "id": "1",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
  },
  {
    "id": "2",
    "title": "Lorem ipsum dolor sit amet",
    "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
  },
  {
    "id": "3",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
  },
  {
    "id": "4",
    "title": "Lorem ipsum dolor sit amet",
    "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
  },
  {
    "id": "5",
    "title": "Lorem ipsum dolor sit amet",
    "body": "Nullam elementum augue ex, non laoreet augue pharetra eu. Proin finibus eros et purus consequat, ac sodales ligula eleifend. Aenean commodo dui elit, in blandit massa tincidunt id. Phasellus dignissim a lorem ac mollis. Sed auctor felis nec mollis vestibulum. Donec sed lacinia lacus. Quisque pellentesque dolor vel metus hendrerit vehicula. Integer a justo dignissim, porta erat sit amet, aliquam orci. Mauris eu lectus nibh. Sed consequat, leo ac posuere tempor, risus urna dignissim lorem, ut condimentum turpis sem tincidunt ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo arcu ut metus placerat mollis. Nullam vitae mi lobortis quam tristique ornare nec vitae ipsum. Mauris urna massa, vulputate sed auctor nec, vulputate sed tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut dictum eget lectus sed dapibus."
  }
];

const Posts = ({}) => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  return (
    <Container>
      <Grid container className={classes.topMargin}>
        <Grid item xs={12}>

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              className={classes.dataTable}
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              onSelectionChange={({ rowIds }) => {
                console.log(rowIds);
                setSelected(rowIds);
              }} />
          </div>

        </Grid>

        <Grid item className={classes.btnWrap}>
          <Button color="secondary">Delete</Button>
        </Grid>

      </Grid>
    </Container>
  );
}

export default Posts;
