import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './../../Components/Header'
import SideMenu from './../../Components/SideMenu';

const useStyles = makeStyles((theme) => ({
  topSpacing: {
    marginTop: 20,
  },
  sideBar: {
    backgroundColor: '#fff',
    height: 'calc(100vh - 64px)'
  }
}));

const MainLayout = props => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={2} className={classes.sideBar}>
            <SideMenu />
          </Grid>
          <Grid item xs={10}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
