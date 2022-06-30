import {Platform, StyleSheet, Dimensions} from 'react-native';
const mWindow = Dimensions.get('window');

const styles = StyleSheet.create({
  List: {
    marginTop: 10,
    marginHorizontal: 8,
    marginBottom: 10,
    // flexDirection: 'coloum',
    overflow: 'hidden',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 4,
    borderRadius: 12,
    alignItems: 'center',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    // height: Dimensions.get('window').height * 0.6,
    // paddingHorizontal: 12,
  },
  containerTitleContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  texTitleUpComing: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  posterImageList: {
    width: 120,
    height: 168,
    borderRadius: 10,
  },
  titleMovie: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'justify',
  },
  allMovies: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 16,
    // marginLeft: 16,
  },
  showAll: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 16,
    fontStyle: 'italic',
  },
  voteContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height: 26,
    width: '100%',
    paddingLeft: 6,
    paddingTop: 4,
    flexDirection: 'row',
  },
  iconStar: {
    width: 14,
    height: 14,
  },
  fontRate: {
    fontSize: 12,
    color: 'white',
    fontWeight: '700',
    marginLeft: 6,
  },
  carouselTitleBox: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 50,
    width: '100%',
    paddingLeft: 8,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingTop: 2,
  },
  textTitleCarousel: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  dateText: {
    fontSize: 11,
    fontWeight: '600',
    color: 'white',
  },
  containerTitleList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default styles;
