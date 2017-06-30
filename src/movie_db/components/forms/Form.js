import React, {PropTypes} from 'react';
import {get} from 'lodash';

import TextInput from './TextInput';


class Form extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.savingsKeypress = this.savingsKeypress.bind(this);
  }

  savingsKeypress(name, value) {
    setTimeout(function() {
      this.props.saveValue(value);
    }.bind(this), 500);
  }

  showMovies(movies) {
    let data = [];

    if (!movies.length) {
      return <div />;
    }

    movies.forEach(function(movie) {
      let name = get(movie, 'name');
      if (name) {
        let imgLink;
        const imgPath = get(movie, 'profile_path', get(movie, 'poster_path'));
        if (imgPath) {
          imgLink = <img width="45" height="45" src={"https://image.tmdb.org/t/p/w45_and_h45_bestv2" + imgPath} />;
        }

        data.push(
          <div style={{marginBottom: '15px'}}>
            {imgLink}
            <span style={{marginLeft: '10px'}}>{name}</span>
          </div>
        );
      }
    });

    return (<div>{data}</div>);
  }

  render() {
    const {dataSaving} = this.props;

    return (
      <div>
        <h2>Movie Database</h2>
        <div>Value is: {dataSaving.searchString}</div>
        <TextInput name="searchString"
          placeholder="Seach for a movie, person, ..."
          onChange={this.savingsKeypress} />

        <div>
          <h3>Results</h3>
          {this.showMovies(dataSaving.movies)}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  saveValue: PropTypes.func.isRequired,
  dataSaving: PropTypes.object.isRequired
};

export default Form;
