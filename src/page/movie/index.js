import React from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieByGenre} from '../../redux/actions';
import styles from './styles';
import {GridMovie} from '@components';
import {useRoute} from '@react-navigation/native';

const Movie = ({navigation}) => {
  const route = useRoute();
  const globalstate = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMovieByGenre(route.params.genre));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View contentContainerStyle={styles.containerScorview}>
      <GridMovie
        data={globalstate.movie_by_genre.results}
        navigation={navigation}
        title={route.params.genre}
      />
    </View>
  );
};

export default Movie;
