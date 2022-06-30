import {Platform, StyleSheet, Dimensions} from 'react-native';
const mWindow = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  conatinerBanner: {
    // flex: 1,
    // height: mWindow.height / 4,
    flexDirection: 'column',
  },
  imageBanner: {
    width: '100%',
    height: undefined,
    aspectRatio: 2,
  },
  titleBanner: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  containerMovieInfo: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#A9A9A9',
    marginTop: 4,
    paddingTop: 8,
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  imageThumnail: {
    width: 250,
    height: 80,
    aspectRatio: 0.7,
    borderRadius: 5,
  },
  lineInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 4,
    alignItems: 'center',
  },
  tagText: {
    fontSize: 11,
    color: '#A9A9A9',
  },
  iconStar: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  viewTitleBanner: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    // flexDirection: 'column',
    paddingLeft: 8,
  },
  bodyDetail: {
    // paddingHorizontal: 12,
    margin: 16,
  },
  textBody: {
    fontSize: 14,
    color: '#000',
    textAlign: 'justify',
  },
});

export default styles;
