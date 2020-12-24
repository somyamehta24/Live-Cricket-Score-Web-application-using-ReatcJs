import logo from './logo.svg';
import './App.css';
import {Button, Container, Grid} from "@material-ui/core";
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches}from './api/Api'
import { Fragment, useEffect, useState } from 'react';
function App() {
  const [matches,setMatches]=useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);
  function IsTwenty20(props)
  {

      return <MyCard match={props.match} ></MyCard>
  }
  return (
    <div className="App">
      <Navbar />
      <h1 style={{marginTop:20}}>
        Welcome to my Live Score App:)
      </h1>
      <Container>
        <Grid container>
          <Grid item sm="12">
             {matches.map((match) => (
              <IsTwenty20 match={match}/>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
