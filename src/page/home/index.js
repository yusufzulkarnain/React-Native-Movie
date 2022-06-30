import React from 'react';
import {ScrollView, ActivityIndicator, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMovie,
  getMovieUpComing,
  getMovieTopRated,
  getMovieGenre,
} from '../../redux/actions';
import styles from './styles';
import {ListMovie, CarouselMovie, GenreTabMenu} from '@components';

const Home = ({navigation}) => {
  const globalstate = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMovieUpComing());
    dispatch(getMovie());
    dispatch(getMovieGenre());
    dispatch(getMovieTopRated());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (globalstate.loading) {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.containerScorview}>
        <CarouselMovie data={globalstate.movie_up_coming.results} />
        <GenreTabMenu data={globalstate.movie_genre} />
        <ListMovie
          data={globalstate.movie.results}
          navigation={navigation}
          title={'Popular'}
        />
        <ListMovie
          data={globalstate.movie_top_rated.results}
          title={'Top Rated'}
          navigation={navigation}
        />
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.containerLoading}>
        <ActivityIndicator size="small" color="#9d9d9d" />
        <Text style={styles.loadingtext}>Please Wait</Text>
      </View>
    );
  }
};

export default Home;
