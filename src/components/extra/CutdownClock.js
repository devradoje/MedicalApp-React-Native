import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Platform } from 'react-native'
import PropTypes from 'prop-types'
import ViewPropTypes from '../../config/ViewPropTypes'
import Pie from 'react-native-pie'
import timer from 'react-native-timer'
import { ScaledSheet, verticalScale } from 'react-native-size-matters';

class CutdownClock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 600,
        }
    }

    componentDidMount() {
        this.startTimer();
    }
    
    startTimer() {
        this.setState({value: 600}, () => timer.setInterval(
            this, 'interval', this.onTick, 10
        ));
    }

    componentWillUnmount() {
        timer.clearInterval(this);
    }

    onTick = () => {
        let value = this.state.value;
        value = value - 1;
        this.setState({ value }, () => {
            if (value === 0) {
                timer.clearInterval(this, 'interval');
                this.props.onFinish();
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: this.props.radius * 2, height: this.props.radius * 2}}>
                    <View style={styles.layer}>
                        <Image
                            source={require('../../assets/images/clock_back.png')}
                            style={styles.backImage}
                            resizeMode="stretch"
                        />
                    </View>
                    <View style={styles.layer}>
                        <Pie
                            radius={this.props.radius * 0.65}
                            series={[this.state.value / 600 * 100]}
                            colors={['#53e0d2']} 
                            style={styles.pie}
                        />
                    </View>
                    <View style={styles.layer}>
                        <Image
                            source={require('../../assets/images/clock_center.png')}
                            style={{width: this.props.radius * 0.7, height: this.props.radius * 0.7}}
                        />
                    </View>
                    <View style={styles.layer}>
                        <View style={styles.textBox}>
                            <Text style={this.props.numberStyle}>{Math.ceil(this.state.value / 10)}</Text>
                            <View style={{marginTop: verticalScale(Platform.OS === 'ios' ? -30 : -10)}}>
                                <Text style={this.props.textStyle}>sec</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Image 
                    style={styles.shadowImage}
                    source={require('../../assets/images/clock_shadow.png')}
                    resizeMode="stretch"
                />
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    backImage: {
        width: '100%',
        height: '100%'
    },
    shadowImage: {
        marginTop: '18@vs',
        width: '120@s',
        height: '35@vs'
    },
    layer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBox: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});

CutdownClock.propTypes = {
    radius: PropTypes.number,
    numberStyle: Text.propTypes.style,
    textStyle: Text.propTypes.style,
    onFinish: PropTypes.func.isRequired,
}

CutdownClock.defaultProps = {
    radius: '150@vs',
    numberStyle: {
        color: 'white',
        fontSize: '20@vs',
    },
    textStyle: {
        color: 'white',
        fontSize: '15@vs',
    }
}

export default CutdownClock;