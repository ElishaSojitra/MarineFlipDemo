import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import FlipPage, {FlipPagePage} from 'react-native-flip-page';
const baseUrl = 'http://unsplash.it/320/480/?image=';
const images = [434, 428, 413, 400];
let Image_Http_URL = {
  uri:
    'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
};

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlipPage loopForever>
          {images.map((n, i) => (
            <FlipPagePage>
              <View
                style={{
                  flexDirection: 'column',
                  height: 'auto',
                  justifyContent: 'flex-start',
                }}>
                <Image
                  key={i}
                  source={{uri: `${baseUrl}${n}`}}
                  style={{height: '50%', resizeMode: 'contain'}}
                />
                <Text
                  style={{fontSize: 30, width: '100%', textAlign: 'center'}}>
                  ahsjdkfhsjkhfjskdfgjsdgfhjsdgfhjsdgfhjsg sbdfhjgshdjfgdshj
                  ahsjdkfhsjkhfjskdfgjsdgfhjsdgfhjsdgfhjsg
                  ahsjdkfhsjkhfjskdfgjsdgfhjsdgfhjsdgfhjsg
                  ahsjdkfhsjkhfjskdfgjsdgfhjsdgfhjsdgfhjsg
                  ksdhjfksadhfjashdfjsgdfjasdgfhjdgs
                </Text>
              </View>
            </FlipPagePage>
          ))}
        </FlipPage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page2: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
