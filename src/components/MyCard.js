import { Button, Card, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { getMatchDetail } from '../api/Api';
// import './img/vs.jpg' ;


const MyCard=({match})=>{
    const [detail,setDetail]=useState({});
    const [open,setOpen]=useState(false);
    const handleClick=(id)=>{
      getMatchDetail(id).then(response=>{
        setDetail(response);
        handleOpen();
        // getDailog();
      }).catch(err=>{
        console.log(err);
      })
    }
    const handleClose=()=>{
      setOpen(false)
    };
    const handleOpen=()=>{
      setOpen(true)
    };
    const getDailog=()=> (
        <Dialog open={open} onclose={handleClose}>
          <DialogTitle id="alert-dialogue-title">{"Match Detail.."}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialogue-description">
              <Typography>Detail:{detail.stat}</Typography>
              <Typography>
                  Match:
                  <span style={{fontStyle:"italic",fontWeight:"bold"}}>
                        {  detail.matchStarted? "Started ":"Still Not Started "}
                      </span>
              </Typography>
              <Typography>
                  Score:<span style={{fontStyle:"italic",fontWeight:"bold"}}>
                        { detail.score}
                      </span>
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>x
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
        </Dialog>
      );
    
    const getMatchCard=()=>{
       return( 
       <Card style={{
        background: match.matchStarted ? "#e2e2e2" : "",
        marginTop: 15,
      }}>
           <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">{match["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img
              style={{width:250}}
                src="https://cdn1.vectorstock.com/i/1000x1000/43/60/versus-game-cover-neon-banner-sport-vs-team-vector-26814360.jpg"
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
            <CardActions>
                <Grid container justify="center">
                    <Grid item>
                        <Button onClick={()=>{
                          handleClick(match.unique_id);
                        }} variant="contained" color="primary">
                            Show Detail
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button style={{marginLeft:50}} variant="contained" color="primary">
                           Start Time: { new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card>);
    };

    return (
      <Fragment>
      {getMatchCard()}
      {getDailog()}
      </Fragment>
      );
};
export default MyCard; 