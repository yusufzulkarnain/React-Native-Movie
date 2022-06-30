import React from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getMovieDetail} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {API, Images} from '@res';
import styles from './styles';
import {DateString} from '@components';
const Detail = () => {
  const route = useRoute();
  const globalstate = useSelector(state => state);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMovieDetail(route.params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 100}}>
      <View style={styles.conatinerBanner}>
        <Image
          source={{
            uri: API.original_image + globalstate.movie_detail.backdrop_path,
          }}
          resizeMode={'cover'}
          style={styles.imageBanner}
        />
      </View>
      <View style={styles.lineInfo}>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.tagText}>Production: </Text>
          {globalstate.loadingData ? (
            globalstate.movie_detail.production_companies.map((item, index) => {
              return (
                <View key={index}>
                  <Text style={styles.tagText}>{item.name} </Text>
                </View>
              );
            })
          ) : (
            <View />
          )}
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.iconStar}
            source={Images.rateStar}
            resizeMode={'cover'}
          />
          <Text style={styles.tagText}>
            {globalstate.movie_detail.vote_average}
          </Text>
        </View>
      </View>

      <View style={styles.containerMovieInfo}>
        <View>
          <Image
            source={{
              uri: API.image_Carousel + globalstate.movie_detail.poster_path,
            }}
            resizeMode={'cover'}
            style={styles.imageThumnail}
          />
        </View>
        <View style={styles.viewTitleBanner}>
          <Text style={styles.titleBanner}>
            {globalstate.movie_detail.original_title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.tagText}>Genres: </Text>
            {globalstate.loadingData ? (
              globalstate.movie_detail.genres.map((item, index) => {
                return (
                  <Text key={index} style={styles.tagText}>
                    {item.name}{' '}
                  </Text>
                );
              })
            ) : (
              <View />
            )}
          </View>
          {globalstate.loadingData ? (
            <Text style={styles.tagText}>
              Release Date: {DateString(globalstate.movie_detail.release_date)}
            </Text>
          ) : (
            <View />
          )}
        </View>
      </View>
      <View style={styles.bodyDetail}>
        <Text style={styles.textBody}>{globalstate.movie_detail.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default Detail;
