import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters'
import PropTypes from 'prop-types'

class MeasureDisplay extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        {this.props.progress === 1 && "Première mesure"}
                        {this.props.progress === 2 && "Deuxième mesure"}
                        {this.props.progress === 3 && "Troisième mesure"}
                    </Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>
                        VOS RESULTATS
                    </Text>
                </View>
                <Text style={styles.highNumber}>{this.props.systolic}</Text>
                <Text style={styles.highNumber}>{this.props.diastolic}</Text>
                <View style={styles.buttonContainer}>       
                    <Button buttonStyle={styles.button} titleStyle={styles.buttonText} title="Suivant" onPress={this.props.onConfirm}/>
                </View>
            </View>
        )
    }
}

MeasureDisplay.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    systolic: PropTypes.string.isRequired,
    diastolic: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
}

MeasureDisplay.defaultProps = {
    
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#008DE6'
    },
    top: {
        width: '100%',
        marginTop: '100@vs'
    },
    top_image: {
        width: '100%',
        height: '150@vs'
    },
    titleContainer: {
        marginTop: '50@vs',
    },
    titleText: {
        fontSize: '18@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
        textAlign: 'center',
    },
    detailContainer: {
        marginTop: '5@vs',
        marginBottom: '50@vs'
    },
    detailText: {
        fontSize: '18@vs',
        color: 'white',
        fontFamily: 'GalanoGrotesque-Light',
        textAlign: 'center',
    },
    highNumber: {
        marginTop: '40@vs',
        fontSize: '120@vs',
        fontFamily: 'Digital-7 Italic',
        color: 'white',
    }, 
    buttonContainer: {
        width: '100%',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        marginTop: '100@vs'
    },
    button:{
        backgroundColor: 'white',
        height: '40@vs',
        borderRadius: 20,
    },
    buttonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: '#008DE6',
        textAlign: 'center',
        fontSize: '15@vs'
    }
});

export default MeasureDisplay;