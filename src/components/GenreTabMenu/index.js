import * as React from 'react';
import {View} from 'react-native';
import ScrollingButtonMenu from 'react-native-scroll-menu';

const CarouselMovie = ({data}) => {
  return (
    <ScrollingButtonMenu
      items={data}
      onPress={e => {
        console.log(e);
      }}
      selected={data.id}
    />
  );
};

export default CarouselMovie;
