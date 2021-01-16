import React, { useState } from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
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
  { field: 'id', headerName: 'ID' },
  { field: 'title', headerName: 'Title' },
  { field: 'desc', headerName: 'Desc' },
];

const rows = [
  { id: 1, title: 'Snow', desc: 'Jon' },
];

const Todos = ({}) => {
  const classes = useStyles();
  const [select, setSelection] = useState([]);

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
              onSelectionChange={(newSelection) => {
                setSelection(newSelection.rows);
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

export default Todos;
