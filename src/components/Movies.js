import React, { Component } from 'react';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';


export class Movies extends Component {
    render() {
        return this.props.movies.map((movie) => (     
            <MovieItem 
                key={movie.id}
                movie={movie}
            />      
        ));
    }
}

//Prop Types
Movies.propTypes = {
    movies: PropTypes.array.isRequired,
}

export default Movies;
