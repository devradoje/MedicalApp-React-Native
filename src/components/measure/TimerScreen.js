import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet, scale } from 'react-native-size-matters'
import CutdownClock from '../extra/CutdownClock'
import PropTypes from 'prop-types'

class TimerScreen extends Component {

    onFinish = () => {
        this.props.onFinish("127", "80");
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Veuillez patienter avant la prochaine mesure.
                    </Text>
                </View>
                <CutdownClock
                    radius={scale(90)}
                    numberStyle={styles.clockNumberText}
                    textStyle={styles.clockSecText}
                    onFinish={this.onFinish}
                />
            </View>
        )
    }
}

TimerScreen.propTypes = {
    onFinish: PropTypes.func.isRequired,
}

TimerScreen.defaultProps = {
    
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    titleContainer: {
        marginTop: '50@vs',
        paddingLeft: '30@s',
        paddingRight: '30@s',
        marginBottom: '100@vs',
        width: '100%'
    },
    titleText: {
        fontSize: '16@vs',
        color: 'black',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
    },
    clockNumberText: {
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
        fontSize: '30@vs',
    },
    clockSecText: {
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
        fontSize: '20@vs',
    }
});

export default TimerScreen;