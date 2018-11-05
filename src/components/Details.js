import React, { Component } from 'react';
import {
  withStyles,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@material-ui/core';
import { getVehicles, getFilms, getSpecies, getPlanets } from '../services/api';
import { Close } from '@material-ui/icons';

const styles = {
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '60%'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 350,
    height: 350,
  },
  paper: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: '50%'
  },
};

class Details extends Component {
  state = {
    vehicles: [],
    films: [],
    species: [],
    planet: false
  }

  componentDidMount = async () => {
    this.getVehiclesDetails(this.props.details.vehicles);
    this.getFilmsDetails(this.props.details.films);
    this.getSpeciesDetails(this.props.details.species);
    this.getPlanetsDetails(this.props.details.homeworld);
  }

  getVehiclesDetails = async (vehicles) => {
    if(vehicles) {
      vehicles.map(vehicle => {
        let id = vehicle.split("/");
        let details = getVehicles(id[5]);
        details.then((data) => {
          return this.setState((prevState) => ({
            vehicles: [
              ...prevState.vehicles,
              data
            ]
          }));
        });
      });
    }
  }

  getFilmsDetails = async (films) => {
    if(films) {
      films.map((movie) => {
        let id = movie.split("/");
        let details = getFilms(id[5]);
        details.then((data) => {
          return this.setState((prevState) => ({
            films: [
              ...prevState.films,
              data
            ]
          }));
        });
      });
    }
  }

  getSpeciesDetails = async (species) => {
    if(species) {
      species.map((specie) => {
        let id = specie.split("/");
        let details = getSpecies(id[5]);
        details.then((data) => {
          return this.setState((prevState) => ({
            species: [
              ...prevState.species,
              data
            ]
          }));
        });
      });
    }
  }

  getPlanetsDetails = async (planet) => {
    if(planet) {
      let id = planet.split("/");
      let details = getPlanets(id[5]);
      details.then((data) => {
        return this.setState({
          planet: data
        });
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.paper}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image={this.props.thumbnail}
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography variant="headline">
                Details
                <Button onClick={this.props.close} style={{float: 'right'}} size="small" color="primary">
                  <Close />
                </Button>
              </Typography>

              <Typography variant="subheading" color="textSecondary">
                <b>Specie:</b> {this.state.species.length !== 0 ? this.state.species.map((specie, index) => (
                  <span key={index}>{specie.name}</span>
                )) : <span>Loading...</span>}
              </Typography>

              <Typography variant="subheading" color="textSecondary">
                <b>Height:</b> {this.props.details.height}
              </Typography>

              <Typography variant="subheading" color="textSecondary">
                <b>Hair:</b> {this.props.details.hair_color}
              </Typography>

              <Typography variant="subheading" color="textSecondary">
                <b>Planet:</b> {this.state.planet ? <span>{this.state.planet.name}</span> : <span>Loading...</span>}
              </Typography>

              <Typography variant="subheading" color="textSecondary">
                <b>Movies:</b> {this.state.films.length !== 0 ? this.state.films.map((film, index) => (
                  <span key={index}>{film.title}, </span>
                )) : <span>Loading...</span>}
              </Typography>

              <Typography variant="subheading" color="textSecondary">
                <b>Veichels:</b> {this.state.vehicles.length !== 0 ? this.state.vehicles.map((vehicle, index) => (
                  <span key={index}>{vehicle.name}, </span>
                )).sort((a, b) => {
                  return a > b
                }) : <span>None</span>}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Details);