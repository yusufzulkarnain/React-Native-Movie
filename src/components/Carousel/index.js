import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {API} from '@res';
import {DateString} from '@components';
import Carousel from 'react-native-snap-carousel';
import {sliderWidth, itemWidth} from './style';
import styles from '../ListMovie/style';

const _renderItem = ({item, index}) => {
  return (
    <TouchableOpacity activeOpacity={1}>
      <Image
        source={{uri: API.original_image + item.backdrop_path}}
        resizeMode={'cover'}
        style={{width: itemWidth, height: itemWidth, borderRadius: 10}}
      />
      <View style={styles.carouselTitleBox}>
        <Text style={styles.textTitleCarousel}>{item.original_title}</Text>
        <Text style={styles.dateText}>
          Release: {DateString(item.release_date)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const CarouselMovie = ({data}) => {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Carousel
        loop
        autoplay
        autoplayInterval={7000}
        data={data}
        renderItem={_renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
      />
    </View>
  );
};

export default CarouselMovie;
