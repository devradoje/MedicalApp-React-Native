import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Text, Button } from 'react-native-elements'
import { ScaledSheet } from 'react-native-size-matters'

export default class MeasureHome extends Component {

    onNextPress = () => {
        this.props.navigation.navigate('StartMeasure');
    }
    
    onBackPress = () => {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.top}>
                    <Image 
                        style={styles.top_image} 
                        source={require('../../assets/images/measure_icon.png')}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>LA PRISE DE MESURE</Text>
                </View>
                <View style={styles.buttonContainer}>    
                    <Button buttonStyle={styles.backButton} titleStyle={styles.backButtonText} title="Guide d’utilisation" onPress={this.onBackPress}/>
                </View>
                <View style={styles.buttonContainer}>    
                    <Button buttonStyle={styles.backButton} titleStyle={styles.backButtonText} title="Conseils" onPress={this.onBackPress}/>
                </View>
                <View style={styles.buttonContainer}>       
                    <Button buttonStyle={styles.nextButton} titleStyle={styles.nextButtonText} title="Débuter la mesure" onPress={this.onNextPress}/>
                </View>
            </View>
        )
    }
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    top: {
        width: '100%',
        marginTop: '80@vs'
    },
    top_image: {
        width: '100%',
        height: '110@vs'
    },
    titleContainer: {
        marginTop: '50@vs',
        paddingLeft: '60@s',
        paddingRight: '60@s',
        marginBottom: '70@vs'
    },
    titleText: {
        fontSize: '30@vs',
        color: 'black',
        fontFamily: 'GalanoGrotesqueAlt-ExtraBold',
        color: '#008DE6',
        textAlign: 'center'
    },
    buttonContainer: {
        width: '100%',
        paddingLeft: '40@s',
        paddingRight: '40@s',
        marginTop: '20@vs'
    },
    nextButton:{
        backgroundColor: '#008DE6',
        height: '40@vs',
        borderRadius: 20,
    },
    nextButtonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: 'white',
        textAlign: 'center',
        fontSize: '15@vs'
    },
    backButton:{
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#008DE6',
        height: '40@vs',
        borderRadius: 20,
    },
    backButtonText:{
        fontFamily: 'GalanoGrotesque-SemiBold',
        color: '#008DE6',
        textAlign: 'center',
        fontSize: '15@vs'
    }
});
