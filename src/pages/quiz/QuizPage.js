import React, { Component } from 'react';
import Character from '../../components/Character';
import CountdownComponent from '../../components/Countdown';
import Header from '../../components/layout/Header/Header';
import { getCharacters } from '../../services/api';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: '10%',
    marginRight: '10%',
    [theme.breakpoints.up(1280 + theme.spacing.unit * 3 * 2)]: {
      width: 1280,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }
});

class QuizPage extends Component {
  state = {
    results: false
  }

  characters;

  componentWillMount = async () => {
    this.characters = await getCharacters();
    if(this.characters) {
      this.setState({
        results: true
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Header title={'Star Quiz'} countdown={<CountdownComponent />} />
        <main className={classes.layout}>
          {this.state.results && this.characters.results.map((character, index) => (
            <Character data={character} key={index} />
          )).sort(() => Math.random() - Math.random() )}
        </main>
      </div>
    );
  }
};

export default withStyles(styles)(QuizPage);