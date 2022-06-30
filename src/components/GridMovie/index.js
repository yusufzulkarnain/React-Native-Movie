import * as React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {API, Images} from '@res';
import {useNavigation} from '@react-navigation/native';

const GridMovie = ({data, title, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerGrid}>
      <FlatList
        data={data}
        numColumns={3}
        contentContainerStyle={{paddingHorizontal: 16}}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={styles.List}
            onPress={() => {
              navigation.navigate('Detail', {id: item.id});
            }}>
            <View style={styles.voteContainer}>
              <Image
                style={styles.iconStar}
                source={Images.rateStar}
                resizeMode={'cover'}
              />
              <Text style={styles.fontRate}>{item.vote_average}</Text>
            </View>
            <Image
              style={styles.posterImageList}
              source={{uri: API.image_Carousel + item.poster_path}}
              resizeMode={'stretch'}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default GridMovie;
