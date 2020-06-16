import React, { Component } from 'react'
import { View, Image, Animated } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'

export default class Splash extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }
  
  componentDidMount() {

    this.toHigh();
  }

  toHigh = () => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 3000,              // Make it take a while
      }
    ).start(this.onWait);
  }

  onWait = () => {
    setTimeout(() => {
      this.toLow();
    }, 2000);
  }
  
  toLow = () => {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 1000,              // Make it take a while
      }
    ).start(this.onEnd);
  }

  onEnd = () => {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={styles.container}>
      <Animated.View                 // Special animatable View</Animated.View>
        style={[styles.container, {
          opacity: this.state.fadeAnim,         // Bind opacity to animated value
        }]}
      >
        <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
        />
      </Animated.View>
      </View>
    )
  }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    logo: {
        width: '200@s'
    }
});