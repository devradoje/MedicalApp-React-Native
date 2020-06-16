import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native'
import PropTypes from 'prop-types'
import ViewPropTypes from '../../config/ViewPropTypes'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import MeasureText from 'react-native-text-size';
import { ScaledSheet, verticalScale, scale } from 'react-native-size-matters';

class WeightSlider extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            value: 85
        }

        this.markerImage = require('../../assets/images/grid_pointer.png');
    }

    render() {
        const pointer_height = this.props.width / 15;
        const pointer_width = pointer_height * 36 / 92;
        const slider_width = this.props.width;
        const slider_height = this.props.width / 20;
        const text_position = (this.props.value - this.props.minValue) / (this.props.maxValue - this.props.minValue) *
                                this.props.width - scale(12);
        
        return (
            
            <View style={{width: this.props.width, height: verticalScale(42)}}>
                <View style={[styles.textContainer, {left: text_position}]}>
                    <Text style={styles.text}>{this.props.value}</Text>
                </View>
                <View style={styles.slider}>
                    <ImageBackground source={require('../../assets/images/grid_back.png')} style={{width: slider_width, height: slider_height}}>
                        <MultiSlider
                            sliderLength={this.props.width}
                            min={this.props.minValue}
                            max={this.props.maxValue}
                            customMarker={(e) => {
                                    return (
                                        <Image
                                            source={this.markerImage}
                                            style={{width: pointer_width, height: pointer_height}}
                                        />
                                    )
                                }}
                            selectedStyle={{backgroundColor: 'transparent'}}
                            unselectedStyle={{backgroundColor: 'transparent'}}
                            containerStyle={{height: pointer_height, width: slider_width}}
                            values={[this.props.value]}
                            onValuesChange={values => this.props.onValueChange(values[0])}
                        />
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
    },
    slider: {
        position: 'absolute',
        bottom: 0
    },
    textContainer: {
        position: 'absolute',
        top: 0
    },
    text: {
        color: '#008DE6',
        fontSize: '20@vs',
        fontWeight: 'bold'
    }
});

WeightSlider.propTypes = {
    width: PropTypes.number.isRequired,
}

WeightSlider.defaultProps = {
}

export default WeightSlider;