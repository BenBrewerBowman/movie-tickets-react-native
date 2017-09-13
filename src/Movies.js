import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import { movies } from './data';
import MoviePoster from './MoviePoster';

export default class Movies extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          {movies.map((movie, index) => <MoviePoster
            movie = {movie}
            onOpen = {this.openMovie}
            key = {index}
          />)}
        </ScrollView>
      </View>
    );
  }
}
