import {Platform, StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    // paddingHorizontal: 12,
    paddingTop: 16,
    // height: Dimensions.get('window').height,
    backgroundColor: 'white',
  },
  containerScorview: {
    paddingTop: 16,
    backgroundColor: '#fff',
    paddingBottom: 50,
  },
  containerLoading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingtext: {
    marginTop: 10,
  },
});

export default styles;
