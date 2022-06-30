import * as React from 'react';
import {View, FlatList, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {API, Images} from '@res';
import {useNavigation} from '@react-navigation/native';

const ListMovie = ({data, title, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerTitleList}>
        <Text style={styles.allMovies}>{title}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Movie', {genre: title});
          }}>
          <Text style={styles.showAll}>Show All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={{paddingHorizontal: 6}}
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

export default ListMovie;
